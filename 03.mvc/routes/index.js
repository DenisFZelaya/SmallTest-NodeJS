const express = require('express');
const router = express.Router();

//Importar el controlador
const ProyectoController = require('../controllers/proyectoController');

module.exports = function () {
    // Rutas habilitadas
    router.get('/', ProyectoController.proyectoHome);
    router.get('/contacto', ProyectoController.proyectoContacto);
    return router;
}