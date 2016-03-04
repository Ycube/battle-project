var utils = require('../config/utils.js');
var request = require('request');
require('dotenv').config();

module.exports = {
  getSummonerId : function (req, res, next) {
    var name = req.body.userName;
    var riotApiKey = process.env.LOL_API_KEY;
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=" + riotApiKey;
    var season = req.body.season;
    
    request(urlRiot, function(err, result, body) {
      if (!err && res.statusCode == 200) {
        var data = JSON.parse(body);
        if (!data[name]) {
          //need to fix error handling later
          res.status(404).send();
        } else {          
          var summonerId = data[name].id;
          utils.getPlayerStats(req, res, summonerId, season);
        }
      }
    })
  }
};


