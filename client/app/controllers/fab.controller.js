;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FABCtrl', FABCtrl);

	FABCtrl.$inject = ['$scope', '$mdDialog'];

	function FABCtrl($scope, $mdDialog) {
		var elementBody = angular.element(document.querySelector('body')),
			elementHtml = angular.element(document.querySelector('html')),
			parent = angular.element(document.querySelector('body'));

		this.isOpen = false;
		this.selectedMode = 'md-fling';
		this.selectedDirection = 'up';
		this.hover = false;

		$scope.moveUp = function () {
			return moveUp();
		}

		$scope.showDialog = function (ev) {
			return showDialog(ev);
		}

		function moveUp() {
			elementBody.animate({
				scrollTop: 0
			}, 500);
			elementHtml.animate({
				scrollTop: 0
			}, 500);
		}

		function showDialog(ev) {
			$mdDialog.show({
				templateUrl: '../app/views/phone-dialog.html',
				parent: parent,
				targetEvent: ev,
				clickOutsideToClose: true,
				controller: 'PhoneDialogCtrl'
			});
		}
	}
})();