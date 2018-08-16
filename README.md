# CodeX basic ESLint configuration

## Usage
Add package to your dev-dependencies using npm or yarn:
```
npm install --save-dev github:codex-team/eslint-config

yarn add -D github:codex-team/config
```

Add eslint to your dev-dependencies
```
npm install --save-dev eslint

yarn add -D eslint
```

Add `.eslintrc` file to your project`s root if you don't have it.

Add there the `extends` section:
```
{
  "extends": [
    "codex"
  ]
}
```