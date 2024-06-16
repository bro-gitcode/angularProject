const express = require('express');
var db = require('./db');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/" ,(req,res) =>{
    res.json("{'message':'API NodeJS Assignment'}");
});

app.get('/project',(req,res,next)=>{
    let sql = `SELECT id,name_project,create_date,price,leader,member FROM project ORDER BY create_date desc`;
    db.query(sql,(err,data)=>{
        if(err) res.json({'message': err});
        else res.json(data);
    });
});

app.get('/project/:id',(req,res,next)=>{
    let id = req.params.id;
    if(is)
    let sql = `SELECT id,name_project,create_date,price,leader,member FROM project ORDER BY create_date desc`;
    db.query(sql,(err,data)=>{
        if(err) res.json({'message': err});
        else res.json(data);
    });
});

// other path
app.listen(port,()=>{
    console.log(`Server started port ${port}`);
});