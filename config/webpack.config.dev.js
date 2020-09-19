'use strict'
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({	
      'process.env': {	
        NODE_ENV: '"development"',	
        BASE_URL: '"/"'	
      }
    }),
    new HtmlWebpackPlugin(
    {
      template:path.resolve(__dirname, '../public/index.html'),
    })
  ]
})

module.exports = devWebpackConfig;