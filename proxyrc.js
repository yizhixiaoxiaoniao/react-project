const cookie = 'test_cookie'

const proxyConf = {
  proxy: {
    '/api/*': {
      target: 'http://localhost:9090',
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Cookie', cookie)
      }
    }
  }
}

module.exports = {
  proxyConf
}