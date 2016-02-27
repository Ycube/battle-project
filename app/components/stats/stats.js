angular.module('lolStats.stats', [])

  .controller('StatsController', ['$scope', 'landingService', function($scope, landingService) {
   var stats = landingService.data;
   $scope.stats = stats;
   $scope.userName = stats.config.data.userName || "DNE";
   $scope.champions = stats.data.champions; 
   $scope.champList = [];
   $scope.champStats = [];

   var champIds = {"266":"Aatrox","103":"Ahri","84":"Akali","12":"Alistar","32":"Amumu","34":"Anivia","1":"Annie","22":"Ashe","268":"Azir","432":"Bard","53":"Blitzcrank","63":"Brand","201":"Braum","51":"Caitlyn","69":"Cassiopeia","31":"Chogath","42":"Corki","122":"Darius","131":"Diana","119":"Draven","36":"DrMundo","245":"Ekko","60":"Elise","28":"Evelynn","81":"Ezreal","9":"FiddleSticks","114":"Fiora","105":"Fizz","3":"Galio","41":"Gangplank","86":"Garen","150":"Gnar","79":"Gragas","104":"Graves","120":"Hecarim","74":"Heimerdinger","420":"Illaoi","39":"Irelia","40":"Janna","59":"JarvanIV","24":"Jax","126":"Jayce","202":"Jhin","222":"Jinx","429":"Kalista","43":"Karma","30":"Karthus","38":"Kassadin","55":"Katarina","10":"Kayle","85":"Kennen","121":"Khazix","203":"Kindred","96":"KogMaw","7":"Leblanc","64":"LeeSin","89":"Leona","127":"Lissandra","236":"Lucian","117":"Lulu","99":"Lux","54":"Malphite","90":"Malzahar","57":"Maokai","11":"MasterYi","21":"MissFortune","62":"MonkeyKing","82":"Mordekaiser","25":"Morgana","267":"Nami","75":"Nasus","111":"Nautilus","76":"Nidalee","56":"Nocturne","20":"Nunu","2":"Olaf","61":"Orianna","80":"Pantheon","78":"Poppy","133":"Quinn","33":"Rammus","421":"RekSai","58":"Renekton","107":"Rengar","92":"Riven","68":"Rumble","13":"Ryze","113":"Sejuani","35":"Shaco","98":"Shen","102":"Shyvana","27":"Singed","14":"Sion","15":"Sivir","72":"Skarner","37":"Sona","16":"Soraka","50":"Swain","134":"Syndra","223":"TahmKench","91":"Talon","44":"Taric","17":"Teemo","412":"Thresh","18":"Tristana","48":"Trundle","23":"Tryndamere","4":"TwistedFate","29":"Twitch","77":"Udyr","6":"Urgot","110":"Varus","67":"Vayne","45":"Veigar","161":"Velkoz","254":"Vi","112":"Viktor","8":"Vladimir","106":"Volibear","19":"Warwick","101":"Xerath","5":"XinZhao","157":"Yasuo","83":"Yorick","154":"Zac","238":"Zed","115":"Ziggs","26":"Zilean","143":"Zyra"};

   for(var i = $scope.champions.length -1 ; i > 0; i--) {
    $scope.champList.push($scope.champions[i].id);
    $scope.champStats.push($scope.champions[i].stats);
   }

   //changes champids to names
   for (var j = 1; j < $scope.champList.length; j++) {
    $scope.champList[0] = "Total"
    var champId = $scope.champList[j].toString(); 
        $scope.champList[j] = champIds[champId];
    }

  }]);