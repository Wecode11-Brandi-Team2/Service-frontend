const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;
const isProd = env === 'production';

module.exports = {
  mode: env,
  context: path.resolve(__dirname, '..'),
  entry: {
    app: './main.js'
  },
  output: {
    filename: !isProd ? `js/[name].js` : 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: !isProd ? `js/[name].js` : 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json']
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                  esModule: false
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd
            ? {
                loader: MiniCssExtractPlugin.loader
              }
            : {
                loader: 'style-loader'
              },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: ['.js', '.jsx', '.vue'],
              emitWarning: false,
              emitError: false
            }
          }
        ]
      },
      {
        test: /\.m?jsx?$/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
