const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use (cors())
app.use(express.json());

app.listen(8081, ()=>{
    console.log("Escuchando por el puerto 8081");
})

const db = mysql.createConnection({
    host: 'HOST',
    user : 'USUARIO',
    password: 'CONTRASEÑA',
    database: 'BASEDATOS'
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

app.post('/subseccionSQL', (req, res) => {
    const seccionNombre = req.body.seccionNombre;
    console.log('Valor recibido:', seccionNombre);
    const sql = `SELECT id, subseccion, subseccionutf, imagen FROM subsecciones where seccion = ? order by subseccion asc`
    db.query(sql, [seccionNombre], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
  });
