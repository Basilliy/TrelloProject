(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('ListsPageController', ListsPageController);

    ListsPageController.$inject = ["ListService"];
    function ListsPageController(ListService) {
      var vm = this;
      vm.visibleNewList = false;
      vm.createNewList = createNewList;
      vm.setVisibleNewList = setVisibleNewList;
      vm.removeList = removeList;

      ListService.get(function(responce) {
         vm.lists = responce.lists;
         console.log(vm.lists);
      });


      function createNewList() {
        if (vm.newListTitle) {
          vm.lists.push(vm.newListTitle);
        }
      }

      function setVisibleNewList() {
        vm.visibleNewList = true;
      }

      function removeList(title) {
        var index = vm.lists.indexOf(title);

        if (index > -1) {
          vm.lists.splice(index, 1);
        }
      }
    }
})();
