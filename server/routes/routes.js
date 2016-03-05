var landingController = require('../controllers/landingController.js');
var summonerController = require('../controllers/summonerController.js')
module.exports = function (router) {


  router.post('/', landingController.getSummonerId);

  //get all summoners currently in mongodb
  router.get('/summoners', summonerController.getAllSummoners);
};