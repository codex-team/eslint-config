import JavaScript from './src/configs/javascript.mjs';
import TypeScript from './src/configs/typescript.mjs';
import JsDoc from './src/configs/jsdoc.mjs';
import CodeStyle from './src/configs/codestyle.mjs';
import Vue from './src/configs/vue.mjs';
import Node from './src/configs/node.mjs';
import Globals from './src/configs/globals.mjs';
import Ignore from './src/configs/ignore.mjs';

export default [
  ...Ignore,
  ...Globals,
  ...CodeStyle,
  ...JavaScript,
  ...TypeScript,
  ...Node,
  ...JsDoc,
  ...Vue,
];
