const express = require('express');
const router = express.Router();

module.exports = function(){

  router.get('/', (req, res)=> {
    res.send('Index')
  })

  router.get('/contacto', (req, res)=> {
    res.send('Contacto')
  })

  router.get('/nosotros', (req, res)=> {
    res.send('Nosotros')
  })

  return router;
}
