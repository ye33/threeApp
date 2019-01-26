const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// 查询订单表：渲染购物车
Router.get('/', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if (error) {
            throw error;
        }

        let db = database.db('threeApp');
        let order = db.collection('order');
        let data;

        order.find().sort({ 'time': -1 }).toArray((err, result) => {
            if (result) {
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

// 加入订单表：参数goodsid、number、name、image、price
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
        if (error) {
            throw error;
        }

        let db = database.db('threeApp');
        let order = db.collection('order');
        let data;
        goodsId = goodsid * 1;
        price = price * 1;
        number = number * 1;

        order.findOne({ goodsId: goodsId }, (err, result) => {
            if (result) {
                // 订单表存在该商品，更新数量
                number = result.number + number;

                MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
                    let db = database.db('threeApp');
                    let order = db.collection('order');
                    order.updateOne({
                        goodsId: goodsId
                    }, {
                        $set: {
                            number: number
                        }
                    }, (error, result) => {
                        if (error) {
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
            } else {
                // 订单表不存在该商品，添加
                MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
                    let db = database.db('threeApp');
                    let order = db.collection('order');
                    order.insert({
                        goodsId: goodsId,
                        name: name,
                        price: price,
                        image: image,
                        number: number,
                        selected: false,
                        time: new Date()
                    }, (error, result) => {
                        if (error) {
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
            }
        });
        database.close();
    });
});

//更新订单表：参数goodsid、number
Router.post('/updategood', urlencodedParser, (req, res) => {
    let {
        goodsid,
        number
    } = req.body;
    // 连接数据库
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if (error) {
            throw error;
        }
        // 打开数据库，找到集合
        let db = database.db('threeApp');
        let order = db.collection('order');

        order.updateOne({
            goodsId: goodsid * 1
        }, {
            $set: {
                number: number * 1
            }
        }, (error, result) => {
            let data;
            if (error) {
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

// 删除订单：axios.get('/user?ID=12345')
Router.get('/delete', (req, res) => {
    // 获取id
    let {
        goodsid
    } = req.query;
    // 连接数据库
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if (error) {
            throw error;
        }
        let db = database.db('threeApp');
        let order = db.collection('order');
        let data;

        order.deleteOne({
            goodsId: goodsid * 1
        }, (error, result) => {
            if (result) {
                data = {
                    code: 1,
                    data: result,
                    msg: 'ok'
                }

            } else {
                data = {
                    code: 0,
                    data: [],
                    msg: 'sorry'
                }

            }
            res.send(data);
        });

        // 关闭数据库，避免资源浪费
        database.close();
    });
});

// 全删
Router.get('/deleteAll', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let order = db.collection('order');
        let data;

        order.deleteMany({}, (error, result) => {
            if(result) {
              data={
                  code: 1,
                  data: result,
                  msg: 'ok'
              }
            } else {
              data={
                  code: 0,
                  data: [],
                  msg: 'sorry'
              }
            }
            res.send(data);
        });

        // 关闭数据库，避免资源浪费
        database.close();
    });
});


module.exports = Router;