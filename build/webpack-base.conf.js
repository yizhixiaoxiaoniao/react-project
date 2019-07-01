'use strict';

// webpack基础配置文件，提供基础参数配置
const path = require('path')

module.exports = {
  mode: 'none',
  entry: {
    index: [path.join(__dirname, '../src/index.js'), 'webpack-hot-middleware/client?noInfo=true&reload=true']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[hash].min.js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(jpg|svg|png|gif|woff)$/,
        loader: 'url-loader'
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.josn'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  optimization: {
    splitChunks: {
      name: 'common'
    }
  }
}