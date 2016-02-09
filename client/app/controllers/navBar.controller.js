;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('NavBarCtrl', NavBarCtrl);

	NavBarCtrl.$inject = ['$scope', '$mdSidenav', '$mdDialog'];

	function NavBarCtrl($scope, $mdSidenav, $mdDialog) {

		$scope.toggle = function () {
			return buildToggler('menu');
		}

		$scope.isOpen = function () {
			return $mdSidenav('menu').isOpen();
		}

		$scope.showDialog = function (ev) {
			return showDialog(ev);
		};

		function buildToggler(id) {
			$mdSidenav(id).toggle();
		}

		function showDialog(ev) {
			$mdDialog.show({
				templateUrl: '../app/views/phone-dialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		}
	}

})();