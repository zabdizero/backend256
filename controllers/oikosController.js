const Oikos = require('../models/Oikos');

// funcion agregar oikos

exports.agregarOikos = async (req, res) =>{
    try {
        let Oiko;
        Oiko = new Oikos(req.body);
        await Oiko.save();
        res.json(Oiko);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar el Oiko');
    }
};

//Funcion buscar Oiko

exports.buscarOikos = async(req,res) =>{
    try {
        const oikos = await Oikos.find();
        res.json(oikos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un Oiko');
    }
};

// funcion 