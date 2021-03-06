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
