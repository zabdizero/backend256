const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

//creamos la variable app

const app = express();
const port = process.env.PORT || 5000;

//conexion bases de datos

conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api cliente
app.use('/api/clientes', require('../routes/rutasClientes'));

//ruta para consumir la api Oikos
app.use('/api/Oikos', require('../routes/RutasOikos'));

//ruta para verificar nuestro servidor en la web
app.get('/', (req,res) =>{
    res.send("hola estamos conectados desde la web")
});

//ruta de nuestro servidor local
app.listen(port,() =>{
    console.log("el servidor esta conectado http://localhost:5000/");
})



