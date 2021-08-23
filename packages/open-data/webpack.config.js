// const webpack = require('webpack')
const path = require('path');
const ProgressbarWebpackPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = filePath => path.resolve(__dirname, filePath);
const isProd = process.env.NODE_ENV === 'production';
// const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: resolve('src/index.ts')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:5].js',
    publicPath: './',
    library: 'YXTOpenData',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.json']
  },
  externals: {
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?|babel|es6)$/,
        include: process.cwd(),
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          query: {
            limit: 10000,
            name: path.posix.join('images', '[name].[ext]')
          }
        }
      },
      {
        test: /\.(ttf|otf|woff2?)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ProgressbarWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'open-data组件示例',
      template: resolve('./template/index.html'),
      chunks: ['index']
    })
  ]
};
