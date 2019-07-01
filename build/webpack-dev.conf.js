'use strict';

// webpack开发环境配置文件，重写webpack基础配置文件相关参数
const webpack = require('webpack')
const path = require('path')
const webpackBaseConf = require('./webpack-base.conf')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const conf = require('./getConf')

const defineOption = {
  ROUTE_PREFIX: conf.router.ROUTE_PREFIX,
  PRODUCTION_ROUTE: conf.router.PRODUCTION_ROUTE
}

// 重写webpack基本参数
webpackBaseConf.mode = 'development'
webpackBaseConf.output.publicPath = '/'
webpackBaseConf.devtool = 'source-map' // 开发环境需要source-map来debug
webpackBaseConf.plugins = [
  new htmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.html'),
    inject: true,
    favicon: path.join(__dirname, "../src/" + conf.config.icon),
    title: conf.config.title
  }),
  new openBrowserWebpackPlugin({
    url: 'http://localhost:' + conf.config.port
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin(defineOption),
]

module.exports = webpackBaseConf