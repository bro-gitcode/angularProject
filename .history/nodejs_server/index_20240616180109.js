const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/" ,(req,res) =>{
    res.json("{'message':'API NodeJS Assigment'}")
})