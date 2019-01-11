const proxy = require('http-proxy-middleware');
const express = require('express');
let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use('/dbapi', proxy({
    "target": "https://wx.3hmlg.com/",
    "changeOrigin": true,
    "pathRewrite": {
        "^/dbapi" : ""
    }
}));

app.listen(4008, function(){
    console.log('Server running on http://localhost:4008');
});