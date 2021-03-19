const path = require('path');
const webpack = require('webpack');

const { src, build, icons } = require('../config/paths').main;

module.exports = async ({ config }) => {
  const svgLoader = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
  svgLoader.exclude = icons;
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/,
      include: icons,
      use: ['@svgr/webpack']
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ];

  return config;
};
