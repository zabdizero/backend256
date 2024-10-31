const mongoose = require("mongoose");

const OikosSchema = mongoose.Schema ({

    Consolidador: {
        type: String,
        require: true
    },
    Fecha: {
        type: String,
        require: true
    },
    NombreOiko: {
        type: String,
        require: true
    },
    Celular: {
        type: Number,
        require: true
    },
    Direccion: {
        type: String,
        require: true
    },
    Contacto: {
        type: String,
        require: true
    },
    Servicio: {
        type: String,
        require: true
    }
},{versionkey:false});

module.exports = mongoose.model('Oikos',OikosSchema);