const express = require('express');
const Router = express.Router();

const formatData = require('./utils/formatData');
const {verify} = require('./utils/token');

Router.get('/',(req,res)=>{
    let token = req.header('token');
    if (verify(token)) {
        res.send(formatData());
    } else {
        res.send(formatData({ code: 302 }));
    }
})

module.exports = Router;