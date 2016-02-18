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

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('ListsPageController', ListsPageController);

    function ListsPageController() {
      var vm = this;
      vm.listsTitle = ['Inbox', 'First list', 'Second list tararar tutu im a crazy train tyty', 'Another yet list'];
      vm.visibleNewList = false;

      vm.createNewList = createNewList;
      vm.setVisibleNewList = setVisibleNewList;
      vm.removeList = removeList;

      function createNewList() {
        if (vm.newListTitle) {
          vm.listsTitle.push(vm.newListTitle);
        }
      }

      function setVisibleNewList() {
        vm.visibleNewList = true;
      }

      function removeList(title) {
        var index = vm.listsTitle.indexOf(title);

        if (index > -1) {
          vm.listsTitle.splice(index, 1);
        }
      }
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('LoginPageController', LoginPageController);

    LoginPageController.$inject = ['TestService'];
    function LoginPageController(TestService) {
      var vm = this;

      vm.login = login;

      function login(validate) {
        TestService.save({}, { text: 'Im nigga, nigga' }, function (responce) {
          console.log(responce)
        });
        vm.submitted = true;

        if (validate) {
          console.log(vm.email)
          console.log(vm.password)
          // alert("well done");
        }
      }
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('RegistrationPageController', RegistrationPageController);

    RegistrationPageController.$inject = ["$state"];
    function RegistrationPageController($state) {
      var vm = this;
      vm.registration = registration;
      vm.greeting = "Hello world";

      function registration(validate) {
        vm.submitted = true;

        if (validate) {
          $state.go('lists')
        }
      }

    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .factory('AuthService', AuthService);

    AuthService.$inject = ['$resource'];
    function AuthService($resource) {
      return $resource('/auth/:type', {
        type: '@type'
      },
      {
        save: {
          method: 'POST',
          params: {
            type: 'registration'
          }
        },
        login: {
          method: 'POST',
          params: {
            type: 'login'
          }
        }
      });
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .factory('ListService', ListService);

    ListService.$inject = ['$resource'];
    function ListService($resource) {
      return $resource('/card/:id', {
        id: '@id'
      });
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .factory('ListService', ListService);

    ListService.$inject = ['$resource'];
    function ListService($resource) {
      return $resource('/list/:id', {
        id: '@id'
      });
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .factory('TestService', TestService);

    TestService.$inject = ['$resource'];
    function TestService($resource) {
      return $resource('/start/what');
    }
})();

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .directive('card', cardDirective);

    function cardDirective() {
      var directive = {
        restrict: 'E',
        replace: true,
        scope: {
          data:"="
        },
        templateUrl: './scripts/common/directives/card/card.tpl.html',
        link: linkFunc
      }

      return directive;

      function linkFunc(scope, elem, attrs) {

      }
    }
})();

(function() {

'use strict';

  angular
    .module('trelloProject')
    .directive('customFocus', customFocusDirective)

    customFocusDirective.$inject = ['$timeout'];
    function customFocusDirective($timeout) {
      var directive = {
        restrict: 'A',
        scope: {
          trigger: '=customFocus'
        },
        link: linkFunc
      }

      return directive;

      function linkFunc(scope, element, attrs) {
        scope.$watch('trigger', function(value) {
        if (value) {
          $timeout(function() {
            element[0].focus();
            scope.trigger = false;
          });
        }
      });
      }
    }

}());

(function() {
  'use strict';

  angular
    .module('trelloProject')
    .directive('list', listDirective);

    function listDirective() {
      var directive = {
        restrict: 'E',
        replace: true,
        scope: {
          data: '=',
          reload: '&'
        },
        templateUrl: './scripts/common/directives/list/list.tpl.html',
        link: linkFunc
      }

      return directive;

      function linkFunc(scope, elem, attrs) {
        scope.text = ['Polar bears can eat as many as 86 penguins in a single sitting.',
        'The top six foods that make your fart are beans, corn, bell peppers, cauliflower, cabbage and milk!',
        'Alcohol activates and stimulates the same part of the brain associated with honesty.'];

        scope.visibleNewCard = false;
        scope.createNewCard = createNewCard;
        scope.showNewCardInput = showNewCardInput;
        scope.removeList = removeList;

        function showNewCardInput() {
          scope.visibleNewCard = true;
          scope.focusOn = true;
        }

        function createNewCard() {
          if (scope.newCardsText) {
            scope.text.push(scope.newCardsText);
            scope.focusOn = true;
            scope.newCardsText = null;
          }
        }

        function removeList() {
          scope.reload({ title: scope.data });
        }
      }
    }
})();
