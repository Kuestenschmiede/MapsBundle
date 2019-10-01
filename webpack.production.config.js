const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-maps-main.js',
  mode: "production",
  output: {
    filename: 'c4g-maps.js',
    path: path.resolve('./Resources/public/build/')
  },
  resolve: {
    modules: ['node_modules', 'Resources/public/js'],
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new CompressionPlugin()
  ],
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