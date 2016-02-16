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
