const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// axios.get('/user?ID=12345')
Router.get('/', async (req, res) => {
    let {
        goodsid
    } = req.query;
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        // let goodsId=req.params.goodsId*1;
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let data;

        goodslist.findOne({goodsId:goodsid*1},(err,result)=> {
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
