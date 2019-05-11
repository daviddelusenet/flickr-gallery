const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { distPath, publicPath } = require('./paths');

module.exports = () => ({
  entry: {
    'flickr-gallery': ['babel-polyfill', resolve(__dirname, './../src/index.js')],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        exclude: /(node_modules)/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: '[name].[hash].min.js',
    path: distPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: publicPath,
        to: distPath,
      },
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './../src/templates/index.html'),
    }),
  ],
});
