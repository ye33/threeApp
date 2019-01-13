const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

Router.get('/:goodsId', async (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let goodsId=req.params.goodsId*1;
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let data;

        goodslist.findOne({goodsId:goodsId},(err,result)=> {
            if(result) {
                result.imgs=result.imgs.split('&');
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

module.exports = Router;
