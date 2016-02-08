;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('NavBarCtrl', NavBarCtrl);

	NavBarCtrl.$inject = ['$scope', '$mdSidenav'];

	function NavBarCtrl($scope, $mdSidenav) {

		$scope.toggle = function () {
			return buildToggler('menu');
		}

		$scope.isOpen = function () {
			return $mdSidenav('menu').isOpen();
		}

		function buildToggler(id) {
			$mdSidenav(id).toggle();
		}
	}

})();