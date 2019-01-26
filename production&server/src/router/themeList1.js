const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 首页列表：经典/亚麻天地
Router.get('/', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let category = db.collection('category');
        let data;

        category.find().toArray((err,result)=> {
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

// 列表category
Router.get('/:cid', async (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', async (error, database) => {
        if(error) {
            throw error;
        }
	   let page=req.query.page?req.page:1;
        let qty=req.query.qty?req.query.qty:10;

        let cid=req.params.cid*1;
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let category = db.collection('category');
        let data;

        function getTopic(cid){
            return new Promise((resolve,reject)=>{
                category.findOne({cid:cid},(err,result)=> {
                    if(result) {
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            })
        }

        let details=await getTopic(cid);

        goodslist.find({cid:cid}).sort({'time':-1}).limit(qty*1).skip(page * 1).toArray((err,result)=> {
            if(result) {
                data = {
                    code: 1,
                    data: result,
                    details:details,
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
