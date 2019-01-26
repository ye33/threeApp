const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 首页主路由分类：http://localhost:4008/list?lid=3
Router.get('/', (req, res) => {
    let {
        lid
    } = req.query;
    MongoClient.connect('mongodb://127.0.0.1:27017', async (error, database) => {
        if(error) {
            throw error;
        }

        let db = database.db('threeApp');
        let list = db.collection('list');
        let data;
        let dataarr=[];
        let dataobj=[];

        list.find({lid:lid*1}).toArray((err,result)=> {
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
                    name:name,
		    lid:lid,
                    data: dataobj,
                    msg: 'ok'
                }
            } else {
                data = {
                    code: 0,
                    name:name,
                    data: error,
                    msg: 'sorry'
                }
            }
            res.send(data);
        });
        database.close();
    });
});

// list动态列表
Router.get('/subList/:lid', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }
    let rule='goodsId';
    if(req.query.rule){
        rule=req.query.rule;
    }

        let lid=req.params.lid;
        let page=req.query.page?req.page:1;
        let qty=req.query.qty?req.query.qty:10;
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let data;

        goodslist.find({lid:lid}).sort({[rule]:-1}).limit(qty*1).skip(page * 1).toArray((err,result)=> {
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

// 模糊查询
Router.get('/like', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
        if(error) {
            throw error;
        }

        let rule=req.query.rule?req.query.rule:'goodsId';
        let page=req.query.page?req.query.page:1;
        let qty=req.query.qty?req.query.qty:10;
        let keyword=req.query.keyword?req.query.keyword:'棉麻';
        let db = database.db('threeApp');
        let goodslist = db.collection('goodslist');
        let data;

        goodslist.find({"name": {"$regex": '.*'+keyword+'.*', $options:'i'}}).sort({[rule]:-1}).limit(qty*1).skip(page * 1).toArray((err,result)=> {
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