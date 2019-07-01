'use strict';

// webpack实时打包编译服务
const express = require('express')
const webpack = require('webpack')
const webpackDevConf = require('./webpack-dev.conf')
const conf = require('./getConf')

// 实例化express框架
const app = express()

// 获取webpack编译对象
const compiler = webpack(webpackDevConf)

// 使用devMiddleware、hotMiddleware中间件
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackDevConf.output.publicPath,
  quiet: true
})
const hotMiddleware = require('webpack-hot-middleware')(compiler)
app.use(devMiddleware)
app.use(hotMiddleware)

// 启动实时编译服务
app.listen(conf.config.port,() => {
  console.log('start http server at localhost with port: ' + conf.config.port)
})
