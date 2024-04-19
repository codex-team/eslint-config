import jsdoc from 'eslint-plugin-jsdoc';
import { mergeConfigs } from 'eslint-flat-config-utils';

export default [
  /**
   * Common for TS and JS
   */
  {
    name: 'codex/jsdoc/common',
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.vue',
      '**/*.ts',
      '**/*.tsx',
    ],
    rules: {
      'jsdoc/informative-docs': 'error',
    },
  },

  /**
   * JS related
   */
  mergeConfigs(
    jsdoc.configs['flat/recommended'],
    {
      name: 'codex/jsdoc/javascript',
      files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',
        '**/*.cjs',
        '**/*.vue',
        '**/*.ts',
        '**/*.tsx',
      ],
      plugins: {
        jsdoc,
      },
      rules: {
        'jsdoc/require-jsdoc': ['error', {
          'require': {
            'FunctionDeclaration': true,
            'MethodDefinition': true,
            'ClassDeclaration': true,
            'ArrowFunctionExpression': false,
          },
        } ],
        'jsdoc/require-returns-description': 'off',
        'jsdoc/tag-lines': ['error', 'any', { 'startLines': 1 } ],
      },
    }
  ),

  /**
   * TS related
   */
  mergeConfigs(
    jsdoc.configs['flat/recommended-typescript'],
    {
      name: 'codex/jsdoc/typescript',
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      rules: {
        'jsdoc/check-param-names': ['error', {
          checkDestructured: false,
        } ],
        'jsdoc/require-param': ['error', {
          checkDestructured: false,
        } ],
      },
    }
  ),
];
