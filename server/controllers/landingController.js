var utils = require('../config/utils.js');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
require('dotenv').config();
//fix this to use promises and save each summoner request into mongoose
module.exports = {
  getSummonerId : function (req, res, next) {
    var riotApiKey = process.env.LOL_API_KEY;
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + username + "?api_key=" + riotApiKey;

    // request(urlRiot)

    request(urlRiot)
      .then(function(result) {
        var data = JSON.parse(result.body)
        var summonerId = data[username].id //curently global variable
        res.send(summonerId);
      })

    // , function(err, result, body) {
    //   if (!err && res.statusCode == 200) {
    //     var data = JSON.parse(body);
    //     console.log(data, "this is data")
    //     if (!data[name]) {
    //       //need to fix error handling later
    //       res.status(404).send();
    //     } else {          
    //       var summonerId = data[name].id;
    //       utils.getPlayerStats(req, res, summonerId, season);
    //     }
    //   } else {
    //     console.log('request failed');
    //   }
    // })
  }
};


