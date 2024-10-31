const express = require('express');
const router = express.Router();
const Clientecontroller = require('../controllers/Clientecontroller');

//rutas del crud

router.post('/',Clientecontroller.agregarClientes);
router.get('/',Clientecontroller.buscarClientes);
router.get('/:id',Clientecontroller.mostrarcliente);
//router.patch('/:id',Clientecontroller.modificarClientes);
router.put('/:id',Clientecontroller.actualizarcliente);
router.delete('/:id',Clientecontroller.eliminarcliente);

module.exports = router;