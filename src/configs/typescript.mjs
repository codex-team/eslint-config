import { plugin, parser } from 'typescript-eslint';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    name: 'codex/typescript',
    files: [
      '**/*.ts',
    ],
    languageOptions: {
      parser: parser,
      parserOptions: {
        /**
         * Tells our parser how to find the TSConfig for each source file (true indicates to find the closest tsconfig.json for each source file
         * For monorepo, see https://typescript-eslint.io/getting-started/typed-linting/monorepos
         */
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      jsdoc,
    },
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/ban-types': 'error',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-enum-comparison': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-as-const': 'error',
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/unbound-method': 'error',

      /**
       * Disable autofix
       * https://github.com/chiefmikey/eslint-plugin-disable-autofix
       */
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        overrides: {
          constructors: 'no-public',
        },
      }],
      '@typescript-eslint/explicit-function-return-type': ['error', {
        allowExpressions: true,
      }],
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/member-ordering': ['error', {
        default: [
          'signature',
          'public-static-field',
          'protected-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-static-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
        ],
      }],
      '@typescript-eslint/no-magic-numbers': ['error', {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignore: [
          0,
          1,
          -1,
          2,
        ],
      }],
      camelcase: 'off',
      '@typescript-eslint/naming-convention': ['error', {
        selector: 'default',
        format: [
          'camelCase',
          'PascalCase',
          'UPPER_CASE',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: [
          'PascalCase',
        ],
      },
      {
        selector: 'typeParameter',
        format: [
          'StrictPascalCase',
        ],
      },
      {
        selector: 'enumMember',
        format: [
          'PascalCase',
        ],
      },
      {
        selector: 'property',
        format: ['camelCase'],
        filter: {
          regex: '^(?!(2xx|2[0-9][0-9]|application/json)$).*',
          match: true,
        },
      },
      {
        selector: 'property',
        format: null,
        filter: {
          regex: '^(2xx|2[0-9][0-9]|application/json)$',
          match: true,
        },
      },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
    },
  },
];
