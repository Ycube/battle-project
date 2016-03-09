angular.module('lolStats.landing', [])

  .controller('LandingController', ['$scope', '$location', 'landingService' ,function ($scope, $location, landingService) {
    $scope.userName = '';
    $scope.season = 'SEASON2016';
    $scope.savedSummoners;
    
    $scope.sendUsername = function(){
      landingService.sendData($scope.userName, $scope.season)
        .then(function(res){
          landingService.data = res;
        })
        .then(function() { $location.path('/stats')});
    };

    $scope.getSavedSummoners = function() {
      landingService.getSavedSummoners()
        .then(function(res) {
          $scope.savedSummoners = res.data;
            // console.log($scope.savedSummoners)
        });
    }

    $scope.getSavedSummoners();
      
  }])
  .factory('landingService', function ($http) {
      //service stores shared data
      return {
        getSavedSummoners: function() {
          return $http({
            method: 'GET',
            url: '/api/summoners'
          })
        },
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