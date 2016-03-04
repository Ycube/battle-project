var landingController = require('../controllers/landingController.js');

module.exports = function (router) {

  router.post('/', landingController.getSummonerId);
};