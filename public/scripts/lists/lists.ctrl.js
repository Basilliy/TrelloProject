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
