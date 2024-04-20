import stylistic from '@stylistic/eslint-plugin';

const semi = true;
const indent = 2;

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
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed', {
        requireForBlockBody: true,
      }],
      '@stylistic/arrow-spacing': ['error', {
        after: true,
        before: true,
      }],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      }],
      '@stylistic/comma-spacing': ['error', {
        after: true,
        before: false,
      }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never', {
        enforceForClassMembers: true,
      }],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': 'error',
      '@stylistic/indent': ['error', indent, {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSUnionType',
          'TSIntersectionType',
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
      }],
      '@stylistic/indent-binary-ops': ['error', indent],
      '@stylistic/key-spacing': ['error', {
        afterColon: true,
        beforeColon: false,
      }],
      '@stylistic/keyword-spacing': ['error', {
        after: true,
        before: true,
      }],
      '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],
      '@stylistic/max-statements-per-line': ['error', {
        max: 1,
      }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: semi ? 'semi' : 'none',
          requireLast: semi,
        },
        multilineDetection: 'brackets',
        overrides: {
          interface: {
            multiline: {
              delimiter: semi ? 'semi' : 'none',
              requireLast: semi,
            },
          },
        },
        singleline: {
          delimiter: semi ? 'semi' : 'comma',
        },
      }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': ['error', {
        allowSamePrecedence: true,
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
      }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/padded-blocks': ['error', {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: false,
      }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', semi ? 'always' : 'never'],
      '@stylistic/semi-spacing': ['error', {
        after: true,
        before: false,
      }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': ['error', {
        nonwords: false,
        words: true,
      }],
      '@stylistic/spaced-comment': ['error', 'always', {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['!'],
        },
        line: {
          exceptions: ['/', '#'],
          markers: ['/'],
        },
      }],
      '@stylistic/template-curly-spacing': 'error',
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/type-annotation-spacing': ['error', {
      }],
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/wrap-iife': ['error', 'any', {
        functionPrototypeMethods: true,
      }],
      '@stylistic/yield-star-spacing': ['error', 'both'],

      '@stylistic/object-curly-newline': ['error', {
        consistent: true,
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false,
      }],
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/padding-line-between-statements': ['error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: [
            'const',
            'let',
            'var',
          ],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: [
            'const',
            'let',
            'var',
          ],
          next: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive',
        },
      ],

      camelcase: ['error', {
        properties: 'always',
      }],
      'one-var': ['error', 'never'],
      curly: ['error', 'all'],
    },
  },
];
