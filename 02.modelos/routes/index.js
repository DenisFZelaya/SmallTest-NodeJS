const express = require('express');
const router = express.Router();

const proyectosController = require('../Controllers/proyectosController');

module.exports = function() {
  router.get('/', proyectosController.proyectosHome);
  router.get('/nosotros', proyectosController.nosotros);
  router.get('/contacto', proyectosController.contacto);

  return router;
}
