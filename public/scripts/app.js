(function() {

  angular
    .module('trelloProject', ['ui.router', 'ngResource', 'ui.tree', 'ngScrollable'])
    .config(configRouter)
    .run(configRun)

    configRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    function configRouter($locationProvider, $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './scripts/home/home.tpl.html'
        })
        .state('login',{
          url: '/login',
          templateUrl: './scripts/login/login.tpl.html',
          controller: 'LoginPageController',
          controllerAs: 'vm'
        })
        .state('registration',{
          url: '/registation',
          templateUrl: './scripts/registration/registration.tpl.html',
          controller: 'RegistrationPageController',
          controllerAs: 'vm'
        })
        .state('lists',{
          url: '/lists',
          templateUrl: './scripts/lists/lists.tpl.html',
          controller: 'ListsPageController',
          controllerAs: 'vm'
        })
        .state('notfound', {
          url: '/404',
          templateUrl: './scripts/404/404.tpl.html'
        });

      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise('/404');
      // $locationProvider.html5Mode({ enabled: true, requireBase: true }).hashPrefix('!');

    }

    configRun.$inject = ['$rootScope', '$state', '$window'];
    function configRun($rootScope, $state, $window) {
      $rootScope.$on('$stateChangeSuccess', function(event, toState){
        var stateNames = toState.name.split('.');
        document.body.className = stateNames[stateNames.length - 1] + '-page';
      });
    }
})();
