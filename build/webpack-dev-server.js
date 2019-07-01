'use strict';

// 通过webpack-dev-server直接启动打包编译服务
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackDevConf = require('./webpack-dev.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const conf = require('./getConf')

const defineOption = {
  ROUTE_PREFIX: conf.router.ROUTE_PREFIX,
  PRODUCTION_ROUTE: conf.router.PRODUCTION_ROUTE
}

// 重写webpackDevConf相关参数
webpackDevConf.entry = {
  index: [
    path.resolve(__dirname, '../src/index.js'),
    "webpack-dev-server/client?http://localhost:" + conf.config.port + "/",
    'webpack/hot/dev-server'
  ]
}

webpackDevConf.plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.html'),
    inject: true,
    favicon: path.join(__dirname, "../src/" + conf.config.icon),
    title: conf.config.title
  }),
  new OpenBrowserPlugin({
    url: 'http://localhost:' + conf.config.port
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin(defineOption),
]

// 获取webpack编译对象
const compiler = webpack(webpackDevConf)

const server = new webpackDevServer(compiler, merge({
  publicPath: webpackDevConf.output.publicPath,
  inline: true,
  hot: true,
  historyApiFallback: true
},
  conf.proxyConf
))

// 启动打包编译服务
server.listen(conf.config.port, () => {
  console.log('start http proxy server at locahost: ' + JSON.stringify(server.address()))
})