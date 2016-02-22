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
