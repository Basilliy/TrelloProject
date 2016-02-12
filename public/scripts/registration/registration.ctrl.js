(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('registrationPageController', registrationPageController);

    function registrationPageController() {
      var vm = this;
      vm.registration = registration;

      function registration(validate) {
        vm.submitted = true;

        if (validate) {
          console.log(vm.email)
          console.log(vm.password)
          alert("well done");
        }
      }

    }
})();
