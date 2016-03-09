var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var summonerSchema = new Schema({
  username : String,
  summonerId : Number,
  searches : Number
});

module.exports = mongoose.model('Summoner', summonerSchema);
