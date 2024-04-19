import stylistic from '@stylistic/eslint-plugin';

/**
 * Compare with this :
 * https://github.com/eslint-community/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
 */

export default [
  {
    name: 'codex/codestyle',
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
      '@stylistic': stylistic,
    },
    rules: {
      'camelcase': ['error', {
        properties: 'always',
      } ],
      'multiline-comment-style': [ 'error' ],
      'one-var': ['error', 'never'],
      'curly': ['error', 'all'],
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
      } ],
      '@stylistic/array-bracket-spacing': ['error', 'never', {
        singleValue: true,
        objectsInArrays: true,
        arraysInArrays: true,
      } ],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      } ],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false,
      } ],
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      } ],
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      } ],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/eol-last': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
      } ],
      '@stylistic/spaced-comment': ['error', 'always', {
        exceptions: [
          '-',
          '+',
        ],
        markers: [
          '=',
          '!',
        ],
      } ],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/indent': ['error', 2, {
        'SwitchCase': 1,
        'VariableDeclarator': 2,
      } ],
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/padding-line-between-statements': ['error',
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'return',
        },
        {
          'blankLine': 'always',
          'prev': [
            'const',
            'let',
            'var',
          ],
          'next': '*',
        },
        {
          'blankLine': 'any',
          'prev': [
            'const',
            'let',
            'var',
          ],
          'next': [
            'const',
            'let',
            'var',
          ],
        },
        {
          'blankLine': 'always',
          'prev': 'directive',
          'next': '*',
        },
        {
          'blankLine': 'any',
          'prev': 'directive',
          'next': 'directive',
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/keyword-spacing': [ 'error' ],
    },
  },
];
