const express = require('express');
const route = express.Router();

const controllerAuth = require('../app/controller/authController');

route.get('/register',controllerAuth.register);
route.get('/login',controllerAuth.loginPage);
route.post('/login',controllerAuth.login);
route.post('/action',controllerAuth.registerAction);









module.exports = route;

