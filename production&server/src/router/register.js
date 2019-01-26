const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const formatData = require('./utils/formatData');
const {create} = require('./utils/token');
let Router = express.Router();

// 检查用户手机号是否存在
Router.post('/check',(req, res) => {
    let {
        tel
    } = req.body;
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let user = db.collection('user');
        let data;
        
        user.findOne({
            tel: tel
        }, (error, result) => {
            if(result) {
                data={
                    code: 1,
                    data: tel,
                    msg: 'have'
                }
            } else {
                data={
                    code: 0,
                    data: [],
                    msg: 'none'
                }
            }
            res.send(data);
        });
        database.close();
    });
});

// 新注册用户加入数据库
Router.post('/add', (req, res) => {
    let {
        tel,
        password
    } = req.body;
    // 连接数据库
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }
        // 打开数据库，找到集合
        let db = database.db('threeApp');
        let user = db.collection('user');

        // 插入新数据
        user.insert({
            tel:tel,
            password:password,
            status:1,
            regTime:new Date()
        }, (error, result) => {
            let data;
            if(error) {
                data = {
                    code: 0,
                    data: [],
                    msg: error
                }
            } else {
                let token=create(tel);
                data = {
                    code: 1,
                    data: tel,
                    token:token,
                    msg: 'success'
                }
            }
            res.send(data);
        });

        database.close();
    });
});

module.exports = Router;
