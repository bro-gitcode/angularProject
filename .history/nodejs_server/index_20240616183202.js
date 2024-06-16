const express = require('express');
var db = require('./db');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/" ,(req,res) =>{
    res.json("{'message':'API NodeJS Assignment'}");
});

// TABLE PROJECT
app.get('/project',(req,res,next)=>{
    let sql = `SELECT id,name_project,create_date,price,leader,member FROM project ORDER BY create_date desc`;
    db.query(sql,(err,data)=>{
        if(err) res.json({'message': err});
        else res.json(data);
    });
});

app.get('/project/:id',(req,res,next)=>{
    let id = req.params.id;
    if(isNaN(id) == true) return res.json({'message':'Project does not exist'});

    let sql = `SELECT id,name_project,create_date,price,leader,member FROM project WHERE id=? ORDER BY create_date desc`;
    db.query(sql,id,(err,data)=>{
        if(err) res.json({'message': err});
        else if (data.lenngth == 0) res.json({'message': 'No projects'})
        else res.json(data[0]);
    });
});

// TABLE STAFF
app.get('/staff',(req,res,next)=>{
    let sql = `SELECT id,first_name,last_name,day_of_birth,sect,area FROM staff ORDER BY create_date desc`;
    db.query(sql,(err,data)=>{
        if(err) res.json({'message': err});
        else res.json(data);
    });
});

app.get('/staff/:id',(req,res,next)=>{
    let id = req.params.id;
    if(isNaN(id) == true) return res.json({'message':'Staff does not exist'});

    let sql = `SELECT id,first_name,last_name,day_of_birth,sect,area FROM staff WHERE id=? ORDER BY create_date desc`;
    db.query(sql,id,(err,data)=>{
        if(err) res.json({'message': err});
        else if (data.lenngth == 0) res.json({'message': 'No staff'})
        else res.json(data[0]);
    });
});

// TABLE TASK
app.get('/task',(req,res,next)=>{
    let sql = `SELECT id,name_task, FROM staff ORDER BY create_date desc`;
    db.query(sql,(err,data)=>{
        if(err) res.json({'message': err});
        else res.json(data);
    });
});

app.get('/task/:id',(req,res,next)=>{
    let id = req.params.id;
    if(isNaN(id) == true) return res.json({'message':'Staff does not exist'});

    let sql = `SELECT id,first_name,last_name,day_of_birth,sect,area FROM staff WHERE id=? ORDER BY create_date desc`;
    db.query(sql,id,(err,data)=>{
        if(err) res.json({'message': err});
        else if (data.lenngth == 0) res.json({'message': 'No staff'})
        else res.json(data[0]);
    });
});

// other path
app.listen(port,()=>{
    console.log(`Server started port ${port}`);
});