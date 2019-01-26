const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
let Router = express.Router();

// 首页查询商品总表，按时间输出
Router.get('/goodsNew', (req, res) => {
	MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
		if(error) {
			throw error;
		}

		let db = database.db('threeApp');
		let goodslist = db.collection('goodslist');
		let data;

		goodslist.find().sort({'time':-1}).limit(10).toArray((err,result)=> {
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

// 首页查询商品总表，按人气输出
Router.get('/goodsHot', (req, res) => {
	MongoClient.connect('mongodb://127.0.0.1:27017', (error, database) => {
		if(error) {
			throw error;
		}

		let db = database.db('threeApp');
		let goodslist = db.collection('goodslist');
		let data;

		goodslist.find({"hot":{$gt:600}}).sort({'hot':-1}).toArray((err,result)=> {
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