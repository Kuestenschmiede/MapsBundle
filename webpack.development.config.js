const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'c4g-maps':'./Resources/public/js/c4g-maps-main.js',
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
          path.resolve('./Resources/public/js/components'),
        ],
      }
    ]
  }
};

module.exports = config;