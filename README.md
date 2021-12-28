# PRUEBA DE CONEXION CON MYSQL EN ADMIN
Pasos para correr la app:
- Crear la base de datos, el usuario y la tabla de prueba desde mysql:

```bash
CREATE DATABASE prueba;
CREATE USER 'prueba'@'%' IDENTIFIED BY 'prueba';
GRANT SELECT, INSERT, UPDATE, DELETE ON prueba.* TO 'prueba'@'%';
CREATE TABLE usuario(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(20) NOT NULL,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(45) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    rol TINYINT (1) NOT NULL,
	CONSTRAINT PK_USUARIO PRIMARY KEY (id)
);
```
- Crear el contenedor en docker
```bash
docker build . 
```
- Montar el contenedor con el hash que se dio anteriormente
```bash
docker run -p 5000:5000  -e MYSQLHOST='DIRECCION_IP'  -e MYSQLUSER='prueba' -e MYSQLPASS='prueba' -v "$(pwd)/api/:/app/api/" -v "$(pwd)/views/:/app/views/" -v "$(pwd)/public/:/app/public/" -it HASH
```
- Correr la app en el puerto 5000 e ingresar a la siguiente url:
` localhost:5000/admin/crear-usuario `

- Llenar los datos y corroborar en la base de datos local para verificar que si se ingresaron los datos

