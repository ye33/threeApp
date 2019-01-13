const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 首页主题商品：秋冬/春夏...
Router.get('/', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let topiclist = db.collection('topiclist');
        let data;

        topiclist.find().toArray((err,result)=> {
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

// 列表主题商品列表：秋冬/春夏...
Router.get('/:params', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', async (error, database) => {
        if(error) {
            throw error;
        }

        let params=req.params.params;
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let topiclist = db.collection('topiclist');
        let data;

        function getTopic(params){
            return new Promise((resolve,reject)=>{
                topiclist.findOne({params:params},(err,result)=> {
                    if(result) {
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            })
        }

        let topic=await getTopic(params);

        goodslist.find({params:params}).toArray((err,result)=> {
            if(result) {
                data = {
                    code: 1,
                    data: result,
                    topic:topic,
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

module.exports = Router;