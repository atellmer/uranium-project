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

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle();
      }
    }
  }
  
})();