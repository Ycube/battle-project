var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

require('dotenv').config();

module.exports = {
  getPlayerStats : function(req, res, summonerId) {
    var riotApiKey = process.env.LOL_API_KEY;
    var rankedStats = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/ranked?season=" + season + "&api_key=" + riotApiKey;
    request(rankedStats, function(err, result, body) {
      if (err) {
        res.status(404).send();
      } else {
        var playerStats = JSON.parse(body);
        //send datat to saveSummoner controller
        console.log(playerStats);
        //might have to extract the data to each individual stat
        res.json(playerStats);
      }
    })
  }
};
