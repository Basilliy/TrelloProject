(function() {

  angular
    .module('trelloProject' ,['ui.router'])
    .config(configRouter);

    configRouter.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];
    function configRouter($locationProvider, $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'scripts/index/index.tpl.html'
        })
        .state('login',{
          url: '/login',
          templateUrl: 'scripts/login/login.tpl.html',
          controller: 'loginPageController',
          controllerAs: 'vm'
        })
        .state('registration',{
          url: '/registation',
          templateUrl: 'scripts/registration/register.html'
        })
        .state('boards', {
          url: '/boards',
          templateUrl: 'scripts/boards/boards.html',
          controller: 'boardsPageController',
          controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise("/404");
    // $locationProvider.html5Mode({ enabled: true, requireBase: true }).hashPrefix('!');

    }
})();
