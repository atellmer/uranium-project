;(function() {

	'use strict';

	angular
    .module('app')
    .controller('NavBarCtrl', NavBarCtrl);

  NavBarCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];

  function NavBarCtrl($scope, $timeout, $mdSidenav) {

    $scope.toggle = buildToggler('menu');
    
    $scope.isOpen = function() {
      return $mdSidenav('menu').isOpen();
    };

    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle();
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle();
      }
    }
  }
  
})();