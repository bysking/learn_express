// 引入express实例化router

var express = require('express')
var router = express.Router()

// 路由中间件 router.use() 参数是函数，接受3个参数req,res,next
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now()) // 中间件处理逻辑
  next() // 返回调用入口
})
// define the home page route
router.get('/', function (req, res) { // http://localhost:3000/birds/
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) { // http://localhost:3000/birds/about
  res.send('About birds')
})

module.exports = router