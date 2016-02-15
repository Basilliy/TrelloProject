
describe('registrationPageController', function() {
  var scope;

  beforeEach(function(){
    module('trelloProject');

    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      var localInjections = {
        $scope: scope,
      };
      $controller('registrationPageController as vm', localInjections);
    });
  });

  it('should expose title', function() {
    expect(scope.vm.greeting).equal('Hello world');
  });
});
