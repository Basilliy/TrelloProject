(function() {
  
  angular.module('trelloproject' ,['ui-router'])
  .config(configrouter);  
    
    function configrouter($locationProvider, $stateProvider, $urlRouterProvider){
        $stateProvider
        .state('index',{
            url: "/",
            templateUrl: "/index.html"
        });
    }
})();
