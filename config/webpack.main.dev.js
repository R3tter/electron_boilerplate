const webpack = require('webpack');

const { build, main } = require('./paths').main;
const { version } = require('../package.json');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = () => ({
  entry: {
    src: main
  },
  watch: true,
  output: {
    publicPath: '/',
    path: build,
    filename: 'main.js'
  },
  target: 'electron-main',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'jpg']
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true),
      PROD: JSON.stringify(false),
      VERSION: JSON.stringify(version)
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx']
    })
  ]
});
