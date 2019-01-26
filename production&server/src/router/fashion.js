const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 时尚LOOK
Router.get('/', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let fashion = db.collection('fashion');
        let data;

        fashion.find().toArray((err,result)=> {
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

Router.get('/detail', (req, res) => {
    let {
        fashionid
    } = req.query;
    console.log(fashionid);
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let fashion = db.collection('fashion');
        let data;

        fashion.findOne({fashionId:fashionid},(err,result)=> {
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

module.exports = Router;