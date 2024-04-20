import jsdoc from 'eslint-plugin-jsdoc';
import { mergeConfigs } from 'eslint-flat-config-utils';

const commonConfig = {
  rules: {
    'jsdoc/require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: false,
      },
      contexts: [
        'TSInterfaceDeclaration',
        'TSPropertySignature',
        'TSMethodSignature',
        'TSDeclareFunction',
        'TSMethodDefinition',
        'TSEnumDeclaration',
        'TSEnumMember',
        'Propery',
      ],
      enableFixer: false,
    }],
    'jsdoc/informative-docs': ['error', {
      uselessWords: [
        'a',
        'an',
        'i',
        'in',
        'of',
        's',
        'the',
        'this',
        'to',
        'with',
        'from',
        'for',
        'on',
        'at',
        'as',
        'that',
        'which',
        'is',
        'are',
        'be',
        'will',
        'can',
        'could',
        'may',
        'might',
        'by',
        'options',
        'params',
        'settings',
        'data',
        'value',
        'then',
        'it',
        'its',
      ],
    }],
  },
};

export default [
  /**
   * JS related
   */
  mergeConfigs(
    jsdoc.configs['flat/recommended-error'],
    commonConfig,
    {
      name: 'codex/jsdoc/javascript',
      files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',
        '**/*.cjs',
        '**/*.vue',
      ],
      plugins: {
        jsdoc,
      },
      rules: {
        'jsdoc/require-returns-description': 'off',
        'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
      },
    }
  ),

  /**
   * TS related
   */
  mergeConfigs(
    jsdoc.configs['flat/recommended-typescript-error'],
    commonConfig,
    {
      name: 'codex/jsdoc/typescript',
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      rules: {
        'jsdoc/check-param-names': ['error', {
          checkDestructured: false,
        }],
        'jsdoc/require-param': ['error', {
          checkDestructured: false,
        }],
        'jsdoc/require-returns': 'off',
      },
    }
  ),
];
