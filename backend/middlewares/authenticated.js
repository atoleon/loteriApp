'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'palabra_secreta_para_generar_tokens*en?loteriapp=2017';

exports.ensureAuth = function(req, res, next) {
  // check out if token has been passed through the header
  if(!req.headers.authorization) {
    return res.status(403).send({ Error: 'La petición no tiene cabecera de autenticación' })
  }

  var token = req.headers.authorization.replace(/['"]+/g, '');

  try {
    var payload = jwt.decode(token, secret);

    // if token has not been expired
    if(payload.exp <= moment().unix()) {
      return res.status(401).send({ Error: 'El token ha expirado' })
    }
  }catch(ex) {
    return res.status(404).send({ Error: 'El token no es válido' })
  }

  req.user = payload;

  next();
}
