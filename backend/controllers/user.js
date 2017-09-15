'use strict'

// models
var User = require('../models/user');

// modules
var bcrypt = require('bcrypt-nodejs');

// services
var jwt = require('../services/jwt');

function pruebas(req, res) {
  res.status(200).send({ message: 'ruta de pruebas' })
}
// register user
function register(req, res) {
  // create user object
  var user = new User();

  // get reqeust params
  var params = req.body;

  // assign values to user
  if(params.password && params.name && params.email) {
    user.name = params.name;
    user.email = params.email;
    user.signupDate = new Date();
    user.wallet = 0;

  // check out if user exists
  User.findOne({ name: user.name }, (err, returnedUser) => {
    if(err) {
      res.status(500).send({ Error: 'Can not checkout if user exists' });
    }else {
      if(!returnedUser) {
        // encrypt password
        bcrypt.hash(params.password, null, null, (err, hash) => {
          if(err) {
            res.status(500).send({ message: 'Error saving user [no ecrypt password]' });
          }else {
            user.password = hash;

            // save user into database
            user.save((err, userStored) => {
              if(err) {
                res.status(500).send({ message: 'Error saving user [' + err + ']' });
              }else {
                if(!userStored) {
                  res.status(404).send({ message: 'Error saving user [user dont found]' });
                }else {
                  res.status(200).send({ message: 'User registered', user: userStored });
                }
              }
            });
          }
        })
      }else {
        res.status(500).send({ Error: 'Duplicated user' });
      }
    }
  })

  }else {
    res.status(400).send({ message: 'Error: all params are required' });
  }
}

// login user
function login(req, res) {
  // get requested params
  var params = req.body

  // look for user into db
  User.findOne({ email: params.email }, (err, returnedUser) => {
    if(err) {
      res.status(500).send({ Error: 'Looking for user into database ['+ err +']' })
    }else {
      if(returnedUser) {
        // check out password
        bcrypt.compare(params.password, returnedUser.password, (err, check) => {
          if(check) {
            if(params.getToken) {
              res.status(200).send({ token: jwt.createToken(returnedUser) })
            }else {
              res.status(200).send({ returnedUser })
            }
          }else {
            res.status(404).send({ Error: 'User or password incorrect' })
          }
        })
      }else {
        res.status(404).send({ message: 'User doesn\'t exists into database' })
      }
    }
  })

}

module.exports = {
  pruebas,
  register,
  login
}
