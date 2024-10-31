const express = require('express');
const router = express.Router();
const oikosController = require('../controllers/oikosController');


router.post('/',oikosController.agregarOikos);
router.get('/',oikosController.buscarOikos);

module.exports = router;

