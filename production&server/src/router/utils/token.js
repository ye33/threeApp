/**
 * Token操作
 * 创建create
 * 验证verify
 */

 const jwt = require('jsonwebtoken');
 const config = require('../../config.json');
 
 //密钥：用于加密的key
 let {secret} = config;

 exports.create = (tel,expiresIn="168h")=>{
    let token = jwt.sign({tel}, secret, {
        expiresIn
    });
    return token;
 }

 exports.verify = (token)=>{
    let res = false;
    try{
        res = jwt.verify(token, secret);
    }catch(err){
        res = false;
    }

    return res;
 }