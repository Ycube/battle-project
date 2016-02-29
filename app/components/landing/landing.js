angular.module('lolStats.landing', [])

  .controller('LandingController', ['$scope', '$location', 'landingService' ,function ($scope, $location, landingService) {
    $scope.userName = '';
    $scope.season = 'SEASON2016';
    
    $scope.sendUsername = function(){
      landingService.sendData($scope.userName, $scope.season)
        .then(function(res){
          landingService.data = res;
        })
        .then(function() { $location.path('/stats')});
    };
      
  }])
  .factory('landingService', function ($http) {
      //service stores shared data
      return {
        sendData : function(userName, season) {
          return $http({
            method : "POST",
            url : '/',
            data : {
              userName : userName,
              season : season
            }
          });
        }
      };

});