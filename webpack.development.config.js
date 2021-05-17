/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'c4g-maps': './Resources/public/js/c4g-maps-main.js',
    'c4g-backend-helper': './Resources/public/js/c4g-backend-helper.js',
    'c4g-backend-editor': './Resources/public/js/c4g-backend-editor.js',
    'c4g-search': './Resources/public/js/c4g-search.js'
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/'),
    chunkFilename: '[name].bundle.js',
    publicPath: "bundles/con4gismaps/build/"
  },
  devtool: "inline-source-map",
  resolve: {
    modules: [
      'node_modules',
      'Resources/public/js',
      '../../../../../RoutingBundle/Resources/public/js'
    ],
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
          path.resolve('./Resources/public/js/components')
        ],
      }
    ]
  }
};

module.exports = config;