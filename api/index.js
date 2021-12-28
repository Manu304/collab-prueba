const express = require('express');
const { conectar, desconectar, conexion } = require('../helpers/dbConnection');

// const mysql = require('mysql');
// 
// 
// const mysqlhost = process.env.MYSQLHOST || '192.168.1.5';
// const mysqluser = process.env.MYSQLUSER || "Usuario";
// const mysqlpass = process.env.MYSQLPASS || "GrupoCracks";
// 
// const conexion= mysql.createConnection({
//     host: mysqlhost,
//     user: mysqluser,
//     password: mysqlpass,
//     database: "prueba"
// });
// 

//const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const port = process.env.port || 5000;

//app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.get('/', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/index.html'));
});
app.get('/login', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/login.html'));
});
app.get('/secretary', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/secretary.html'));
});
app.get('/secretary/venta', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registar-venta.html'));
});
app.get('/secretary/registrar-paciente', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registrar-paciente.html'));
});
app.get('/secretary/registrar-medico', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/secretary/registrar-medico.html'));
});

app.get('/admin', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/admin.html'));
});

app.get('/admin/corte-caja', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/corte-caja.html'));
});
app.get('/admin/crear-examen', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-examen.html'));
});

app.get('/admin/control-examenes', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-examenes.html'));
});

app.get('/admin/crear-usuario', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/crear-usuario.html'));
});

app.get('/admin/control-users', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-users.html'));
});
app.get('/admin/registrar-medico', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/registro-medicos.html'));
});
app.get('/admin/control-medicos', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/control-medicos.html'));
});
app.get('/admin/reportes', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/admin/reportes.html'));
});
app.get('/laboratorio', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/laboratorista/ventanaLaboratorista.html'));
});
app.get('/laboratorio/modificar-resultados', (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../views/laboratorista/busquedaBoleta.html'));
});



app.post('/admin/crear-usuario', (req, res) =>{
    const sql = 'INSERT INTO usuario SET ?';

    console.log(req.body);

    const newUser ={
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        rol: req.body.rol
    };
    //console.log(newUser)
    
    conexion.query(sql, newUser, error =>{
        if (error) throw error;
         res.status(201).sendFile(path.join(__dirname, '../views/index.html'));
     });


});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));