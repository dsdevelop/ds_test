var express = require('express');
var app = express();
var db = require('./db');

var UserConroller = require('./user/UserController');
app.use('/users', UserConroller)

module.exports = app;