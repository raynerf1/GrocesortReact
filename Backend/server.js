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

app.post('/productosSQL', (req, res) => {
    const subseccionNombre = req.body.subseccionNombre;
    console.log('Valor recibido:', subseccionNombre);

    let consultaextra = '';
    let consultaextra2 = '';

    switch (subseccionNombre) {
        case "Azucar blanco":
            consultaextra = ' where pr.subseccion = "azucar blanco" ';
            break;
        case "Galleta estilo oreo":
            consultaextra2 = ' or producto LIKE "galleta%chocolate%blanco" ';
            break;
    }

    let consulta = `SELECT p.*, pr.seccion, pr.subseccion, pr.descripcion, pr.descripcionutf, pr.imagen, pr.enlace
    FROM precios p
    INNER JOIN (
        SELECT producto, supermercado, MAX(fecha) AS max_fecha
        FROM precios
        WHERE fecha IS NOT NULL -- Para excluir registros sin fecha
        AND (supermercado = 'ahorra mas' OR supermercado = 'alcampo' OR supermercado = 'dia' OR supermercado = 'eroski' OR supermercado = 'mercadona' OR supermercado = 'carrefour')
        AND producto LIKE ? ${consultaextra2}
        GROUP BY producto, supermercado
    ) max_precios
    ON p.producto = max_precios.producto
    AND p.supermercado = max_precios.supermercado
    AND p.fecha = max_precios.max_fecha
    LEFT JOIN productos pr
    ON p.producto = pr.producto
    AND p.supermercado = pr.supermercado ${consultaextra}
    ORDER BY precio ASC;`;

    let input = subseccionNombre + '%';

    switch (subseccionNombre) {
        case "Azucar blanco":
            input = 'Azucar%';
            break;
        case "Batido de chocolate":
            input = 'Batido chocolate%';
            break;
        case "Batido de fresa":
            input = 'Batido fresa%';
            break;
        case "Batido de vainilla":
            input = 'Batido vainilla%';
            break;
        case "Cafe molido":
            input = 'Cafe molido';
            break;
        case "Galleta digestive":
            input = 'Galleta digestive';
            break;
        case "Galleta estilo oreo":
            input = 'Galleta oreo';
            break;
        // Agrega los demás casos según tu lógica
    }
    db.query(consulta, [input], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })

    // Aquí deberías realizar la consulta a tu base de datos utilizando input y consulta

    // Una vez que tengas los resultados, puedes enviarlos como respuesta
});
