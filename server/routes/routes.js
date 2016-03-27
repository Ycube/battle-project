var landingController = require('../controllers/landingController.js');
var summonerController = require('../controllers/summonerController.js')
module.exports = function (router) {


  router.post('/', landingController.getSummonerId);

  //get all summoners currently in mongodb
  router.get('/api/summoners', summonerController.getAllSummoners);
  router.post('/api/summoners', summonerController.saveSummoner);
};