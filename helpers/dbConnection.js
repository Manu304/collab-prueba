const mysql = require('mysql');

const mysqlhost = process.env.MYSQLHOST || '192.168.1.5';
const mysqluser = process.env.MYSQLUSER || "Usuario";
const mysqlpass = process.env.MYSQLPASS || "GrupoCracks";

const conexion= mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database: "prueba"
});


const conectar = ()=>{
    conexion.connect(error =>{
        if(error){
            throw error;
        } else {
            console.log('Conexion Exitosa');
        }
    });
};

const desconectar= ()=>{
    conexion.end();
    console. log ('Finaliza')
};

module.exports={
    conexion,
    conectar,
    desconectar
}