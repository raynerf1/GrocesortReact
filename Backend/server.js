const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use (cors())

app.listen(8081, ()=>{
    console.log("Escuchando por el puerto 8081");
})

const db = mysql.createConnection({
    host: 'HOST',
    user : 'USUARIO',
    password: 'CONSTRASEÑA',
    database: 'BASEDEDATOS'
})

app.get('/', (re, res)=> {
    return res.json("Desde backend");
})

app.get('/secciones', (req, res)=> {
    const sql = "SELECT id, nombre, nombreutf, imagen FROM secciones order by nombre asc"
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
