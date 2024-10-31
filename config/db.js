const mongoose = require('mongoose');
require('dotenv').config();

//configurar la conexion con mongo db

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("estamos conectados con mongo db"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;