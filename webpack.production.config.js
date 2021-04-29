const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'babel-regenerator-runtime':     'babel-regenerator-runtime',
    'c4g-maps': './Resources/public/js/c4g-maps-main.js',
    'c4g-search': './Resources/public/js/c4g-search.js'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/'),
    chunkFilename: '[name].bundle.[contenthash].js',
    publicPath: "bundles/con4gismaps/build/"
  },
  resolve: {
    modules: ['node_modules', 'Resources/public/js'],
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/ol)/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./Resources/public/js/'),
          path.resolve('./Resources/public/js/components'),
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    namedModules: true,
    namedChunks: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    occurrenceOrder: false,
    usedExports: true,
    concatenateModules: true,
    sideEffects: false
  }
};

module.exports = config;