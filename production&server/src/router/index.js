const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParse = bodyParser.json();

const good = require('./good');
const list = require('./list');
const brands = require('./brands');
const fashion = require('./fashion');
const themeList1 = require('./themeList1');
const themeList2 = require('./themeList2');
const detail = require('./detail');
const order = require('./order');
const login = require('./login');
const register = require('./register');
const tokenRouter = require('./token');


let Router = express.Router();

Router.all('http://39.108.252.230:4008', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 利用body-parser格式化前端传入的参数
Router.use(urlencodedParser, jsonParse);

Router.use('/good', good);
Router.use('/list',list);
Router.use('/brands',brands);
Router.use('/fashion',fashion);
Router.use('/themeList1',themeList1);
Router.use('/themeList2',themeList2);
Router.use('/detail',detail);
Router.use('/order',order);
Router.use('/login',login);
Router.use('/register',register);
Router.use('/token', tokenRouter);

module.exports = Router;