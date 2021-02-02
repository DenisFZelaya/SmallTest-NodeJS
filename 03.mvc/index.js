const express = require('express'); // Utilizando el modulo de express
const routes = require('./routes'); // especificar donde estan las rutas
const path = require('path');
//const bodyParser = require('body-parser');

// crear una aplicacion express
const app = express();

// donde cargar los archivos estaticos
app.use(express.static('public'));

//habilitar el template pug
app.set('view engine', 'pug');

// anadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// habilitar doby parser para obtener datos del formulario
//app.use(bodyParser.urlencoded({extended: true}))

// Rutas
app.use('/', routes());

// habilitar puerto
app.listen(3001);