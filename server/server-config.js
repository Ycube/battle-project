var express = require('express');
var db = require('./db/db');

var app = express();

require('./config/middleware.js')(app,express);

module.exports = app;

