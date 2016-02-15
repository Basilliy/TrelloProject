(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('loginPageController', LoginPageController);

    function LoginPageController() {
      var vm = this;

      vm.login = login;

      function login(validate) {
        vm.submitted = true;

        if (validate) {
          console.log(vm.email)
          console.log(vm.password)
          alert("well done");
        }
      }
    }
})();
