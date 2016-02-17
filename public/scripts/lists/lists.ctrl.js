(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('ListsPageController', ListsPageController);

    function ListsPageController() {
      var vm = this;
      vm.listsTitle = ['Inbox', 'First list', 'Second list tararar tutu im a crazy train tyty', 'Another yet list'];
      vm.visibleNewList = false;
      vm.setVisibleNewList = setVisibleNewList;
      vm.createNewList = createNewList;

      function setVisibleNewList() {
        vm.visibleNewList = true;
      }

      function createNewList() {
        if (vm.newListTitle) {
          vm.listsTitle.push(vm.newListTitle);
        }
      }
    }
})();
