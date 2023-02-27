const mongoose = require('mongoose');
require('dotenv').config();

const connect=()=> new Promise((resolve, reject) => {
    mongoose.set('strictQuery',true);
    mongoose.connect(process.env.DB_URL,function(err){
        if(err){
            reject(err);
        }
        resolve('DB is Connected');
    })
});

module.exports=connect;
