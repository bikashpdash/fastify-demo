const path =require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/main.mjs',
    mode:'development',
    target: 'node', // support native modules
    output: {
      filename: 'main.bundle.cjs',
      path: path.resolve(__dirname, 'dist')
    }
  }