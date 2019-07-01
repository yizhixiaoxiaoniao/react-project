const express = require('express')
const http = require('http')
const url = require('url')
const serverPort = 9090

// 实例化express框架
const app = express()

const server = http.createServer(app)

server.listen(serverPort, () => {
    console.log('start http server at localhost ' + serverPort + ' port')
})

app.use((req, res, next) => {
    console.log('Access router with req.url: ' + req.url)
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Progma', 'no-cache')
    next()
})

app.use('/api/getTable1Data', (req, res ,next) => {
    const query = url.parse(req.url, true).query
    const { pageSize, pageNum } = query
    console.log('getTable1Data with pageSize: S%, pageNum: S%', pageSize, pageNum)
    let data = [
        { userName: 'jinfeng', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng2', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng3', isAdmin: 'no', boardCount: '110', cardCount: '220', isEmail: 'no' },
        { userName: 'jinfeng4', isAdmin: 'yes', boardCount: '1', cardCount: '3', isEmail: 'yes' },
        { userName: 'jinfeng5', isAdmin: 'no', boardCount: '20', cardCount: '30', isEmail: 'no' },
        { userName: 'jinfeng', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng2', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng3', isAdmin: 'no', boardCount: '110', cardCount: '220', isEmail: 'no' },
        { userName: 'jinfeng4', isAdmin: 'yes', boardCount: '1', cardCount: '3', isEmail: 'yes' },
        { userName: 'jinfeng5', isAdmin: 'no', boardCount: '20', cardCount: '30', isEmail: 'no' },
        { userName: 'jinfeng', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng2', isAdmin: 'yes', boardCount: '10', cardCount: '20', isEmail: 'no' },
        { userName: 'jinfeng3', isAdmin: 'no', boardCount: '110', cardCount: '220', isEmail: 'no' },
        { userName: 'jinfeng4', isAdmin: 'yes', boardCount: '1', cardCount: '3', isEmail: 'yes' },
        { userName: 'jinfeng5', isAdmin: 'no', boardCount: '20', cardCount: '30', isEmail: 'no' }
    ]
    const resp = {
      code: 0,
      msg: '数据获取成功',
      data: {
          total: data.length,
          table1Data: data.slice(pageSize * (pageNum - 1), pageSize * pageNum)
      }
    }
    res.write(JSON.stringify(resp))
    res.end()
})
