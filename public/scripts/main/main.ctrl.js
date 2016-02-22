(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('MainPageController', MainPageController);

    function MainPageController() {
      var vm = this;
      vm.showDropdown = false;
      vm.closeDropdown = closeDropdown;

      function closeDropdown() {
        console.log(vm.showDropdown)
        vm.showDropdown = false;
        console.log(vm.showDropdown)
      }
    }

})();
