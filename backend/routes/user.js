'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var mdAuth = require('../middlewares/authenticated');
var multiparty = require('connect-multiparty');
var mdMultiparty = multiparty({ uploadDir: './uploads' });

var api = express.Router();

api.get('/pruebas', mdAuth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.register);
api.post('/login', UserController.login);
api.put('/update-user/:id', mdAuth.ensureAuth, UserController.updateUser);
api.post('/upload-user-img/:id', [mdAuth.ensureAuth, mdMultiparty], UserController.uploadUserImg);
api.get('/get-user-img/:img', UserController.getUserImg);

module.exports = api;
