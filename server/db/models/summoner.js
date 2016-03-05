var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var summonerSchema = new Schema({
  name : String,
  play : Number,
  win : Number,
  loss : Number,
  kill : Number,
  assist : Number 
});


module.exports = mongoose.model('Summoner', summonerSchema);
