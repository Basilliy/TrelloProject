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
        scope.text = ['Polar bears can eat as many as 86 penguins in a single sitting.',
        'The top six foods that make your fart are beans, corn, bell peppers, cauliflower, cabbage and milk!',
        'Alcohol activates and stimulates the same part of the brain associated with honesty.'];

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
            scope.text.push(scope.newCardsText);
            scope.focusOn = true;
            scope.newCardsText = null;
          }
        }

        function removeList() {
          scope.reload({ title: scope.data });
        }
      }
    }
})();
