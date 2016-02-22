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
      });


      function createNewList() {
        if (vm.newListTitle) {
          var newList = {
            title: vm.newListTitle
          }

          vm.lists.push(newList);
        }
      }

      function setVisibleNewList() {
        vm.visibleNewList = true;
      }

      function removeList(title) {
        vm.lists = vm.lists.filter(function(i) {
          return i.title !== title;
        });
      }
    }
})();
