(function() {
  'use strict';

  angular
    .module('trelloProject')
    .directive('list', listDirective);

    function listDirective() {
      var directive = {
        restrict: 'E',
        replace: true,
        scope: {
          data: '=',
          reload: '&'
        },
        templateUrl: './scripts/common/directives/list/list.tpl.html',
        link: linkFunc
      }

      return directive;

      function linkFunc(scope, elem, attrs) {
        scope.visibleNewCard = false;
        scope.createNewCard = createNewCard;
        scope.showNewCardInput = showNewCardInput;
        scope.removeList = removeList;

        function showNewCardInput() {
          scope.visibleNewCard = true;
          scope.focusOn = true;
        }

        function createNewCard() {
          if (scope.newCardsText) {
            scope.data.cards.push(scope.newCardsText);
            scope.focusOn = true;
            scope.newCardsText = null;
          }
        }

        function removeList() {
          scope.reload({ title: scope.data.title });
        }
      }
    }
})();
