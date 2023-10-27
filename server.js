const express = require('express');
const app = express();
const port = 5000
const dotenv = require("dotenv")
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res)=>{
    // res.send("Hello World");
    res.sendFile(__dirname + '/page/index.html')
})

app.get('/', (req,res)=>{
    res.send("테스트8")
})



app.set('view engine','ejs');

const {MongoClient, ObjectId} = require('mongodb');
app.use(express.static(__dirname + '/public'))

let db;
let sample;
const url = `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PW}@cluster0.pcchu3g.mongodb.net/`

new MongoClient(url).connect().then((client)=>{
    db = client.db("twoboard");
    sample = client.db("sample_training")
    console.log("db 연결 완료!!")
    

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`${process.env.SERVER_PORT}번호에서 서버 실행중`)
    })
})
