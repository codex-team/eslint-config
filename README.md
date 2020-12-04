# CodeX basic ESLint configuration

## Install

Add package to your dev-dependencies using npm or yarn:

```bash
$ npm i -D eslint-config-codex eslint

$ yarn add -D eslint-config-codex eslint
```

## Usage

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

