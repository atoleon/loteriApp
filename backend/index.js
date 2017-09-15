'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var dbHost = 'mongodb://localhost';
var dbPort = ':27017';
var dbName = '/loteriapp';

var serverPort = process.env.PORT || 1982;

mongoose.Promise = global.Promise; //avoid deprecation warning
mongoose.connect(dbHost + dbPort + dbName, { useMongoClient: true }).then(() => {
  console.log('Conexión a la base de datos ' + dbHost + dbPort + dbName + ' con éxito');

  app.listen(serverPort, () => {
    console.log('Servidor web corriendo correctamente en el puerto ' + serverPort);
  })
}).catch(err => {
  console.log(err)
});
