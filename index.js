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
    })
});

app.post("/api/add", (req, res) => {
    const add = req.body.added;

    const sqlInsert = 
    "UPDATE products SET basket = '1' WHERE (id = '?');";
    db.query(sqlInsert, [add])
})

app.post("/api/remove", (req, res) => {
    const remove = req.body.removed;

    const sqlInsert = 
    "UPDATE products SET basket = '0' WHERE (id = '?');";
    db.query(sqlInsert, [remove])
})

app.get("/api/getLog", (req, res) => {
    res.send(logged);
    match = false;
});

app.get("/api/getOcc", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products ORDER BY sale DESC LIMIT 3;";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getBasket", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE basket='1';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getA", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Adidas';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getC", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Converse';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getNe", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='New Balance';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getNi", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Nike';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getP", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Puma';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getR", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Rebook';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getU", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Umbro';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getV", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE brand='Vans';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFem", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' ORDER BY sale DESC LIMIT 4;";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemA", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Adidas';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemC", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Converse';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemNe", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='New Balance'";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemNi", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Nike';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemP", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Puma';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemR", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Rebook';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemU", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Umbro';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getFemV", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Female' AND brand='Vans';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMal", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' ORDER BY sale DESC LIMIT 4;";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalA", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Adidas';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalC", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Converse';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalNe", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='New Balance';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalNi", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Nike';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalP", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Puma';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalR", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Rebook';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalU", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Umbro';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getMalV", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Male' AND brand='Vans';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChi", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' ORDER BY sale DESC LIMIT 4;";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiA", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Adidas';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiC", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Converse';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiNe", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='New Balance';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiNi", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Nike';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})
app.get("/api/getChiP", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Puma';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiR", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Rebook';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiU", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Umbro';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.get("/api/getChiV", (req, res) => {
    const sqlInsert = 
    "SELECT * FROM products WHERE sex='Child' AND brand='Vans';";
    db.query(sqlInsert, (err, result) => {
        res.send(result);
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
});
