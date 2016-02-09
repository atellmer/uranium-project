;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FABCtrl', FABCtrl);

	FABCtrl.$inject = ['$scope', '$mdDialog'];

	function FABCtrl($scope, $mdDialog) {
		this.isOpen = false;
		this.selectedMode = 'md-fling';
		this.selectedDirection = 'up';
		this.hover = false;

		$scope.moveUp = function () {
			return moveUp();
		}

		$scope.showDialog = function (ev) {
			return showDialog(ev);
		};

		function moveUp() {
			angular.element("body,html").animate({
				scrollTop: 0
			}, 500);
		}

		function showDialog(ev) {
			$mdDialog.show({
				templateUrl: '../app/views/order-dialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		}
	}


})();