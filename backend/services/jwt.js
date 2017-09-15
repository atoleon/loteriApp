'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'palabra_secreta_para_generar_tokens*en?loteriapp=2017';

exports.createToken = function(user) {
  var payload = {
    sub: user._id,
    name: user.name,
    email: user.email,
    signupDate: user.signupDate,
    wallet: user.wallet,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  }

  return jwt.encode(payload, secret);
}
