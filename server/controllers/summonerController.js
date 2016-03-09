//summonerController.js
// var landingController = require('./landingController.js');
// var util = require('../config/utils.js');
var Promise = require('bluebird');
// promisifying db mondel, so we can use query functions with Async
var Summoner = Promise.promisifyAll(require('../db/models/summoner'));
var request = Promise.promisify(require('request'));
require('dotenv').config();

module.exports = {
  getAllSummoners : function(req, res) {
    //TODO
    //display all summoners currently saved into mongoosedb
    // console.log('hit get all summoners')
    Summoner.find({})
      .then(function (allSummoners) {
        res.json(allSummoners);
      })
  },
  saveSummoner : function(req, res) {
    var newSummoner = Summoner();
    var username = req.body.username; 
    var season = req.body.season; 
    var riotApiKey = process.env.LOL_API_KEY;
    var urlRiot = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + username + "?api_key=" + riotApiKey;
    Summoner.findOne({username: username})
      .then(function(user) {
        if (!user) {
          request(urlRiot)
          .then(function(result) {
          var data = JSON.parse(result.body);
          var summonerId = data[username].id; 
          var newSummoner = new Summoner({
            username : username,
            summonerId : summonerId,
            searches : 1
          });
          newSummoner.save()
            .then(function(newUser) {
               var rankedStats = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerId + "/ranked?season=" + season + "&api_key=" + riotApiKey;
              console.log(newUser);
              request(rankedStats)
                .then(function(stats) {
                  var data = JSON.parse(stats.body);
                  res.json(data.champions);
                })
            })
      })
        } else {
        user.searches += 1;
        user.save()
          .then(function(updatedUser) {
            var rankedStats = "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + user.summonerId + "/ranked?season=" + season + "&api_key=" + riotApiKey;
            request(rankedStats)
              .then(function(stats) {
                var data = JSON.parse(stats.body);
                res.json(data.champions);
              })
            })
        }
    })
  }
};  