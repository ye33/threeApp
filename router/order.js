const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 查询订单表
Router.get('/', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let order = db.collection('order');
        let data;

        order.find().sort({'time':-1}).toArray((err,result)=> {
            if(result) {
                data = {
                    code: 1,
                    data: result,
                    msg: 'ok'
                }
            } else {
                data = {
                    code: 0,
                    data: error,
                    msg: 'sorry'
                }
            }
            res.send(data);
        });
        database.close();
    });
});

// 加入订单表
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});
Router.post('/addgood', urlencodedParser, (req, res) => {
    let {
        goodsid,
        name,
        image,
        price,
        number
    } = req.body;
    // 连接数据库
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let order = db.collection('order');
        goodsId=goodsid*1;
        price=price*1;

        // 插入新数据
        order.insert({
            goodsId: goodsId,
            name: name,
            price:price,
            image: image,
            number:number,
            time: new Date()
        }, (error, result) => {
            let data;
            if(error) {
                data = {
                    code: 0,
                    data: [],
                    msg: error
                }
            } else {
                data = {
                    code: 1,
                    data: result.ops,
                    msg: 'success'
                }
            }
            res.send(data);
        });

        database.close();
    });
});

//更新订单表
Router.post('/updategood', urlencodedParser, (req, res) => {
    let {
        goodsid,
        number
    } = req.body;
    // 连接数据库
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }
        // 打开数据库，找到集合
        let db = database.db('threeApp');
        let order = db.collection('order');

        goodlist.update({
            goodsId:goodsid*1
        }, {
            $set: {
                number:number*1
            }
        }, (error, result) => {
            let data;
            if(error) {
                data = {
                    code: 0,
                    data: [],
                    msg: error
                }
            } else {
                data = {
                    code: 1,
                    data: result,
                    msg: 'success'
                }
            }
            res.send(data);
        });

        database.close();
    });
});

module.exports = Router;

