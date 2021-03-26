const path = require('path');
const webpack = require('webpack');

const { renderer, build, icons } = require('./paths').main;
const { version } = require('../package.json');
const ESLintPlugin = require('eslint-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: {
    src: renderer
  },
  output: {
    publicPath: '/',
    path: build,
    filename: 'renderer.[fullhash:6].js'
  },
  mode: 'development',
  target: 'electron-renderer',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg)$/,
        exclude: icons,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'images/[name].[fullhash:6].[ext]'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, 'css-loader']
      },
      {
        test: /\.(eot|eot#iefix|ttf|woff|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[fullhash:6].[ext]'
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
        include: icons,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'jpg']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App title',
      // favicon: path.join(src, 'favicon.ico'),
      template: path.join(renderer, 'index.ejs'),
      inject: 'body',
      hash: true,
      version
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true),
      PROD: JSON.stringify(false),
      VERSION: JSON.stringify(version)
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx']
    })
  ],
  devServer: {
    contentBase: build,
    port: 8080,
    compress: false,
    hot: true,
    stats: 'normal',
    open: false,
    clientLogLevel: 'none',
    historyApiFallback: {
      disableDotRule: true
    },
    disableHostCheck: true
  }
});
