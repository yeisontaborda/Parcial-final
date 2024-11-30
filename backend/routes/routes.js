'use strict'

var express = require('express');
var holaMundoController = 
    require('../controllers/holamundo');

var cursosController = 
require ('../controllers/cursos');

var authenticationController 
= require("../controllers/autenticacion");

var token = require('../helpers/autenticacion');

var routes = express.Router();

routes.get('/api/saludar', 
    holaMundoController.saludar);

routes.post('/api/curso',
    token.validarToken,
    cursosController.crearCurso
);

routes.get('/api/curso',
    token.validarToken,
    cursosController.consultarCursos
);

routes.put('/api/curso/:_id',
    token.validarToken,
    cursosController.editarCurso
);

routes.post('/api/usuario',
    authenticationController.registrarUsuario
);

routes.post('/api/login',
    authenticationController.iniciarSesion
);

module.exports = routes;
