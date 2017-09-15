'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// load routes
var userRoutes = require('./routes/user');

var app = express();

// middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// serve dist folder
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../dist')));

// set routes
app.use('/api', userRoutes);

module.exports = app;
