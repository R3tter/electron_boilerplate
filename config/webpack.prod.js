const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { renderer, dist, icons, main } = require('./paths').main;

const { version } = require('../package.json');

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].[hash:6].css'
});

module.exports = [
  () => ({
    entry: {
      src: renderer
    },
    mode: 'production',
    output: {
      publicPath: '/',
      path: dist,
      filename: 'renderer.[hash:6].js'
    },
    target: 'electron-renderer',
    optimization: {
      minimize: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|svg|jpg)$/,
          exclude: icons,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash:6].[ext]'
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader'
          ]
        },
        {
          test: /\.(eot|eot\#iefix|ttf|woff|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]'
            }
          }
        },
        {
          test: /\.pdf$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'pdf/[name].[ext]'
            }
          }
        },
        {
          test: /\.svg$/,
          include: [icons],
          use: ['@svgr/webpack']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'App title',
        // favicon: path.join(src, 'favicon.ico'),
        template: path.join(renderer, 'index.ejs'),
        inject: 'body',
        publicPath: '',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        hash: true,
        version
      }),
      extractSass,
      new webpack.DefinePlugin({
        DEV: JSON.stringify(false),
        PROD: JSON.stringify(true),
        VERSION: JSON.stringify(version)
      })
    ]
  }),
  () => ({
    entry: {
      src: main
    },
    output: {
      publicPath: '/',
      path: dist,
      filename: 'main.js'
    },
    target: 'electron-main',
    devtool: 'source-map',
    mode: 'production',
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
        DEV: JSON.stringify(false),
        PROD: JSON.stringify(true),
        VERSION: JSON.stringify(version)
      })
    ]
  })
];
