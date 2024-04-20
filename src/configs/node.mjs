import { mergeConfigs } from 'eslint-flat-config-utils';
import NodePlugin from 'eslint-plugin-n';

export default [
  mergeConfigs(
    NodePlugin.configs['flat/recommended-module'],
    {
      name: 'codex/node',
      rules: {
        'n/handle-callback-err': ['error', '^(err|error)$'],
        'n/no-deprecated-api': 'error',
        'n/no-exports-assign': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/process': ['error', 'never'],
        'n/process-exit-as-throw': 'error',
      },
    }
  ),
];
