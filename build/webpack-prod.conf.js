'use strict';

// webpack生产环境配置文件，重写webpack基础配置文件相关参数
const webpack = require('webpack')
const path = require('path')
const webpackBaseConf = require('./webpack-base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const conf = require('./getConf')

const defineOption = {
  ROUTE_PREFIX: conf.router.ROUTE_PREFIX,
  PRODUCTION_ROUTE: conf.router.PRODUCTION_ROUTE
}

webpackBaseConf.mode = 'production'
webpackBaseConf.entry = [path.join(__dirname, '../src/index.js')]
webpackBaseConf.output.publicPath = conf.router.PRODUCTION_ROUTE
webpackBaseConf.plugins = [
  new webpack.DefinePlugin(defineOption),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '../src/index.html'),
    inject: true,
    favicon: path.resolve(__dirname, "../src/" + conf.config.icon),
    title: conf.config.title
  })
]

module.exports = webpackBaseConf