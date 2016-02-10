(function() {
  'use strict';

  angular
    .module('trelloProject')
    .controller('boardsPageController', BoardsPageController);

    function BoardsPageController() {
      var vm = this;
      vm.hello = "Hello";
      console.log("ccc")
    }
})
