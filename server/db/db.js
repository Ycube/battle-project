var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var db = mongoose.connect('mongodb://localhost/lol_database');

module.exports  = db;