const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const formatData = require('./utils/formatData');
const {create} = require('./utils/token');
let Router = express.Router();

Router.post('/', (req, res) => {
    let {
        tel,
        password
    } = req.body;
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if (error) {
            throw error;
        }

        let db = database.db('threeApp');
        let user = db.collection('user');
        let data={};

        user.findOne({
            tel: tel
        }, (error, result) => {
            if (result) {
                if (result.password == password) {
                    // 生成token
                    let token=create(tel);
                    data={
                        code: 1,
                        data: tel,
                        token:token,
                        msg: 'have'
                    }
                } else {
                    data={
                        code: 2,
                        data: [],
                        msg: 'fail'
                    }
                }
                res.send(data);
            } else {
                res.send({
                    code: 0,
                    data: [],
                    msg: 'none'
                })
            }
        });

        database.close();
    });
});

module.exports = Router;