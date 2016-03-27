angular.module('lolStats', [
  'lolStats.landing',
  'lolStats.stats',
  'ui.router',
  'ui.bootstrap',
  'ui.bootstrap.tpls',
  'ui.bootstrap.typeahead'
  ])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('landing', {
      templateUrl: 'components/landing/landing.html',
      url: '/',
      controller: 'LandingController'
    })
    .state('stats', {
      templateUrl:'components/stats/stats.html',
      url: '/stats',
      controller: 'StatsController'
    });
});