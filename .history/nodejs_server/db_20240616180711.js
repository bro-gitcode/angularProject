var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'tuan2203@',
    database: 'dbproject'
});

db.connect()