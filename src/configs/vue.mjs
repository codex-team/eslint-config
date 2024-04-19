import pluginVue from 'eslint-plugin-vue';
import { mergeConfigs } from 'eslint-flat-config-utils';
import { parser as TsParser } from 'typescript-eslint';
import VueParser from 'vue-eslint-parser';

export default [
  mergeConfigs(
    ...pluginVue.configs['flat/recommended'],
    {
      name: 'codex/vue',
      languageOptions: {
        parser: VueParser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: [ '.vue' ],
          parser: TsParser,
          sourceType: 'module',
        },
      },
      rules: {
        'vue/component-tags-order': 'off',
        'vue/block-order': ['error', {
          'order': [ ['template', 'script'], 'style'],
        } ],
        'vue/multi-word-component-names': 'off',
      },
    }
  ),
];
