'use strict';

/**
 * 获取json文件中定制化参数，包括config和router配置
 */
const packageJson = require('../package.json')
const proxyrc = require('../proxyrc')
const config = packageJson.config
const router = packageJson.router
const proxyConf = proxyrc.proxyConf

module.exports = {
  config,
  router,
  proxyConf
}