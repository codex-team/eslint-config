# CodeX ESLint configuration

- [Flat config](https://eslint.org/docs/latest/use/configure/configuration-files), ESLint 9
- JavaScript and TypeScript configs
- Vue.js config (TS)
- Codestyle config
- JSDoc configs for JS and TS
- Global variables list
- Gitignore support

## Install

Add package to your dev-dependencies using npm or yarn:

```bash
yarn add -D eslint-config-codex eslint
```

## Usage

Add following lines to your `eslint.config.mjs`:

```js
+ import CodeX from 'eslint-config-codex'

export default [
+  ...CodeX,
  // your customization
]
```

## VSCode suport

Open `Code` / `Settings`, find "Open Settings (JSON)" icon at the top-bar

Then fill opened `.vscode/settings.json`:

```json
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue",
    "html",
  ]
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
