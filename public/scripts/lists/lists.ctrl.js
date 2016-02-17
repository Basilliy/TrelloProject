(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('ListsPageController', ListsPageController);

    function ListsPageController() {
      var vm = this;
      vm.listsTitle = ['Inbox', 'First list', 'Second list tararar tutu im a crazy train tyty'];
    }
})();
