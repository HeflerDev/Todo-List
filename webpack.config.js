/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
    devServer: {
         contentBase: './dist',
    },
  devServer: {
      contentBase: './dist',
  },
};

module.exports = config;
