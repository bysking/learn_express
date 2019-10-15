const express = require('express')
const app = express()

app.get('/secret/a', (req, res) => {
  res.send('geta')
})

app.post('/secret/a', (req, res) => {
  res.send('posta')
})

app.all('/secret', function (req, res, next) {
  // 支持对应的get,post,put,delete
  // 用于在所有HTTP请求方法的路径上加载中间件功能。,
  // 使用在所有的HTTP请求方法的路径来加载中间件功能。
  console.log('all, a Accessing the secret section ...')
  next()
})

// 测试路由匹配url
// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/bysking/:uId/home/:homeId', (req, res) => {
  res.send(req.params)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})