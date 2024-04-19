import JavaScript from './src/configs/javascript.mjs';
import TypeScript from './src/configs/typescript.mjs';
import JsDoc from './src/configs/jsdoc.mjs';
import CodeStyle from './src/configs/codestyle.mjs';
import Vue from './src/configs/vue.mjs';
import Globals from './src/configs/globals.mjs';
import gitignore from 'eslint-config-flat-gitignore';

export default [
  gitignore(),
  ...Globals,
  ...CodeStyle,
  ...JavaScript,
  ...TypeScript,
  ...JsDoc,
  ...Vue,
];
