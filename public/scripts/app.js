(function() {

  angular
    .module('trelloProject' ,['ui.router'])
    .config(configrouter);

    configrouter.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
    function configrouter($locationProvider, $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('index',{
          url: "/",
          templateUrl: "scripts/index/index.html"
        })
        .state('boards', {
          url: '/boards',
          templateUrl: 'scripts/boards/boards.html'
        });

    $urlRouterProvider.otherwise("/404");
    $locationProvider.html5Mode({ enabled: true, requireBase: true }).hashPrefix('!');

    }
})();
