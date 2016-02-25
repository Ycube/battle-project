var morgan = require('morgan');
var bodyParser = require('body-parser');
// var Router = require('../landing/landing');

module.exports = function(app,express) {
  var router = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../app'));

  app.use('/', router);

  require('../landing/landingRoutes.js')(router)
};