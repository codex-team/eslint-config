import globals from 'globals';

export default [
  {
    name: 'codex/globals',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
