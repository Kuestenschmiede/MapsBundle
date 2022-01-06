/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'c4g-maps': './src/Resources/public/js/c4g-maps-main.js',
    'c4g-backend-helper': './src/Resources/public/js/c4g-backend-helper.js',
    'c4g-backend-editor': './src/Resources/public/js/c4g-backend-editor.js',
    'c4g-search': './src/Resources/public/js/c4g-search.js'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./src/Resources/public/build/'),
    chunkFilename: '[name].bundle.[contenthash].js',
    publicPath: "bundles/con4gismaps/build/"
  },
  resolve: {
    modules: ['node_modules', 'src/Resources/public/js'],
    extensions: ['.jsx', '.js'],
    fallback: {
      "http": false,
      "https": false,
      "buffer": false,
      "url": false,
      "fs": false
    }
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
          path.resolve('./src/Resources/public/js/'),
          path.resolve('./src/Resources/public/js/components')
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    usedExports: true,
    concatenateModules: true,
    sideEffects: false,
    chunkIds: "named",
    moduleIds: "named"
  }
};

module.exports = config;