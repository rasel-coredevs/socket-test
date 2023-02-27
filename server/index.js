const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');
const connect = require('./mongodb');
const port = process.env.PORT || 5000;

const router = require('../server/routes/routes');


app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost/3000",
        methods:["POST","GET"],
    }
})

app.get('/',(req,res)=>{
    res.send("Server is running.....");
});

server.listen(port,async()=>{
    try{
        const db = await connect();
        console.log(db);
        console.log("Server is running on port ",port);
    }catch(err){
        console.log(err.message)
    }
});