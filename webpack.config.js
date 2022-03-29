const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, './'),
  // },
};