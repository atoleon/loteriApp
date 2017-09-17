'use strict'

// models
var User = require('../models/user');

// modules
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var path = require('path');

// services
var jwt = require('../services/jwt');

function pruebas(req, res) {
  res.status(200).send({ message: 'ruta de pruebas', user: req.user })
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

// update user
function updateUser(req, res) {
  var userId = req.params.id;
  var userData = req.body;

  if(userId != req.user.sub) {
    res.status(400).send({ Error: 'El usuario no se corresponde con el id' })
  }else {
    User.findByIdAndUpdate(userId, userData, {new: true}, (err, userUpdated) => {
      if(err) {
        res.status(500).send({ Error: 'Error actualizando usuario' })
      }else {
        if(!userUpdated) {
          res.status(400).send({ Error: 'No se ha podido actualizar el usuario' })
        }else {
          res.status(200).send({ message: 'usuario actualizado', user: userUpdated })
        }
      }
    })
  }
}

function uploadUserImg(req, res) {
  var imgUsersPath = './assets/img/users/profile/';
  var userId = req.params.id;

  if(!req.files.img) {
    return res.status(400).send({ Error: 'No existe archivo' })
  }

  var filePath = req.files.img.path;
  var fileName = filePath.split('/');
    fileName = fileName[fileName.length - 1];
  var fileExt = fileName.split('.');
    fileExt = fileExt[1];

  if(userId != req.user.sub) {
    fs.unlink(filePath);
    return res.status(400).send({ Error: 'El usuario no se corresponde con el id' })
  }

  if(fileExt != 'png' && fileExt != 'jpg' && fileExt != 'gif') {
    fs.unlink(filePath);
    return res.status(400).send({ Error: 'Extensión de archivo no permitida' })
  }

  // move img to users img profile folder
  var newFileName = userId + '.' + fileExt;
  var newFilePath = imgUsersPath + newFileName;
  fs.renameSync(filePath, newFilePath);

  User.findByIdAndUpdate(userId, { img: newFileName }, {new: true}, (err, userUpdated) => {
    if(err) {
      res.status(500).send({ Error: 'Error actualizando usuario' })
    }else {
      if(!userUpdated) {
        res.status(400).send({ Error: 'No se ha podido actualizar el usuario' })
      }else {
        res.status(200).send({ message: 'usuario actualizado', user: userUpdated })
      }
    }
  })
}

function getUserImg(req, res) {
  var imgName = req.params.img;
  var imgPath = './assets/img/users/profile/' + imgName;

  fs.exists(imgPath, function(exist) {
    if(exist) {
      res.sendFile(path.resolve(imgPath));
    }else {
      res.status(404).send({ message: 'File not found' });
    }
  })
}

module.exports = {
  pruebas,
  register,
  login,
  updateUser,
  uploadUserImg,
  getUserImg
}
