# CodeX basic ESLint configuration

## Install

Add package to your dev-dependencies using npm or yarn:

```bash
$ npm i -D eslint-config-codex eslint

$ yarn add -D eslint-config-codex eslint
```

## Usage in JavaScript

Add `.eslintrc` file to your project's root if you don't have it.

```bash
./node_modules/.bin/eslint init
```

Then add the `extends` section to there:

```json
{
  "extends": [
    "codex"
  ]
}
```

## Usage in TypeScript

1. Follow instructions for JavaScript
2. Extend from `codex/ts` instead of `codex`

```json
{
  "extends": [
    "codex/ts"
  ]
}
```

## Troubleshooting

### ESLint couldn't determine the plugin ... uniquely

Since 7.x ESLint loads plugins from the location of each config file which has the `plugins` field. Resolve this issue by adding the root flag to your `.eslintrc` config

```
{
  "root": true
}
```

[Issue](https://github.com/codex-team/eslint-config/issues/25) | [Discussion](https://github.com/eslint/eslint/issues/13385#issuecomment-641252879)