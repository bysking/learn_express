# learn_express

1. 学习官网： http://www.expressjs.com.cn/

2. 版本： 4.16.0

3. express功能
保持最小规模的Node.js Web 应用程序开发框架

4. 安装

cd 项目目录
npm init (初始化包信息，新建package.json来管理项目信息，依赖等)
npm install express --save （临时安装，不添加到依赖列表npm install express --no-save）

5. hello world实例
安装 nodemon 实现监视express.js的修改自动运行

6. Express 应用程序生成器
通过应用生成器工具 express-generator 可以快速创建一个应用的骨架
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          输出使用方法
        --version       输出版本号
    -e, --ejs           添加对 ejs 模板引擎的支持
        --hbs           添加对 handlebars 模板引擎的支持
        --pug           添加对 pug 模板引擎的支持
    -H, --hogan         添加对 hogan.js 模板引擎的支持
        --no-view       创建不带视图引擎的项目
    -v, --view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）
    -c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）
        --git           添加 .gitignore
    -f, --force         强制在非空目录下创建
    7. 例如，如下命令创建了一个名称为 myapp 的 Express 应用。此应用将在当前目录下的 myapp 目录中创建，并且设置为使用 Pug 模板引擎（view engine）

    express --view=pug myapp
    然后安装所有依赖包：
    $ cd myapp
    $ npm install

7. 项目启动

  在 MacOS 或 Linux 中，通过如下命令启动此应用：

    $ DEBUG=myapp:* npm start

  在 Windows 中，通过如下命令启动此应用：

    > set DEBUG=myapp:* & npm start
8. 路由
  路由定义： app.METHOD(PATH, HANDLER)
  4中常见路由方法：

  （1）get方法
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  （2）post方法
  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  （3）put方法
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  （4）delete方法
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

9. 路由正则匹配，同一路由适配get,put,delete,post, 路由中间件， 路由模块化http://www.expressjs.com.cn/en/guide/routing.html

10. 请求方法
res.download() 	文件下载.
res.end() 	结束响应
res.json() 	Send a JSON response.
res.jsonp() 	Send a JSON response with JSONP support.
res.redirect() 	重定向请求
res.render() 	渲染模板
res.send() 	发送各种各样的响应
res.sendFile() 	8字节发送文件.
res.sendStatus() 	发送请求响应状态码

11. express托管静态文件
利用 Express 托管静态文件
express.static(root, [options]) // 内置中间件函数
通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问
app.use(express.static('public'))

12. 多个资源服务器如果要使用多个静态资源目录，请多次调用 express.static 中间件函数：

app.use(express.static('public'))
app.use(express.static('files'))

13. 兼容 app.use('/static', express.static(path.join(__dirname, 'public')))
