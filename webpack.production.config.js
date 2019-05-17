var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-maps-main.js',
  mode: "production",
  output: {
    filename: 'c4g-maps.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/ol)/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.')
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

module.exports = config;