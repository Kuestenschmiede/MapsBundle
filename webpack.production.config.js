var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-maps-main.js',
  mode: "production",
  output: {
    filename: 'c4g-maps.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.')
        ],
      }
    ]
  }
};

module.exports = config;