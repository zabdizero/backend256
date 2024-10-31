const Cliente = require('../models/Cliente');

//funcion agregar clientes 

exports.agregarClientes = async (req, res) =>{
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

//funsion buscar clientes

exports.buscarClientes = async(req,res) =>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

// funcion para solo mostrar un cliente

exports.mostrarcliente = async(req,res) =>{

    try{
        
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        
        }else{
            res.json(clientes);
        }

    } catch (error) {
    
        res.status(500).send('hubo un error al agregar un cliente');
    }
}
//funcion modificar un cliente con metodo patch

exports.modificarClientes = async (req, res) =>{
    try{
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        
        }else{
            res.json(clientes);
        }
    
    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
}
}

//funcion put

exports.actualizarcliente = async (req,res) => {

    try{
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        
        }else{
            res.json(clientes);
        }


    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
}
}

//funcion eliminar

exports.eliminarcliente = async (req,res) =>{

    try{

        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        
        }else{

            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "cliente eliminado"});
        }

    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
}
};