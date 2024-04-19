import js from '@eslint/js';
import { mergeConfigs } from 'eslint-flat-config-utils';

export default [
  mergeConfigs(
    js.configs.recommended,
    {
      name: 'codex/javascript',
      files: [
        '**/*.js',
        '**/*.jsx',
        '**/*.mjs',
        '**/*.cjs',
        '**/*.vue',
      ],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: 'module',
        },
      },
      rules: {
        'no-duplicate-imports': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'eqeqeq': 'error',
        'no-nested-ternary': 'error',
        'prefer-const': ['error', {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        } ],
        'no-console': 'error',
        'no-empty': ['error', { allowEmptyCatch: true } ],
      },
    }
  ),
];
