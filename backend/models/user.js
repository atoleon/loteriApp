'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  password: String,
  email: String,
  signupDate: Date,
  wallet: Number,
  role: String,
  img: String
})

module.exports = mongoose.model('User', userSchema);
