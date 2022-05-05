const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "zakupoholik"
});

let match = false;
let logged = false;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insertReg", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    
    const sqlInsert = 
    "INSERT INTO registration (login, password) VALUES (?,?);";
    db.query(sqlInsert, [login, password], (err, result) => {
        console.log(result);
    })
});

app.post("/api/insertLog", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    
    const sqlInsert = 
    "SELECT * FROM registration;";
    db.query(sqlInsert, (err, result) => {
        for(let x = 0; x < result.length; x++)
        {
            if(result[x].login == login && result[x].password == password)
                match = true;
            else
                match = match;
        }
        logged = match;
        'XD'
    })
});

app.get("/api/getLog", (req, res) => {
    console.log(logged);
    res.send(logged);
    match = false;
});

app.listen(3001, () => {
    console.log('running on port 3001');
});
