const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 首页主路由分类
Router.get('/:lid', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', async (error, database) => {
        if(error) {
            throw error;
        }

        let lid=req.params.lid*1;
        let db = database.db('threeApp');
        let list = db.collection('list');
        let data;
        let dataarr=[];
        let dataobj=[];

        list.find({lid:lid}).toArray((err,result)=> {
            if(result) {
                let name=result[0].name;
                let category=result[0].category.split('&').slice(0,-1);

                for(key in result[0]){
                    dataarr.push(result[0][key]);
                }
                dataarr=dataarr.slice(4);

                for(var i=0;i<dataarr.length;i++){
                    dataarr[i]=dataarr[i].split('&');
                }

                for(var i=0;i<dataarr.length;i++){
                    let tempobj={'name':category[i],'data':dataarr[i]}
                    dataobj.push(tempobj);
                }

                data = {
                    code: 1,
                    data: dataobj,
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