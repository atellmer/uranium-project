;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FABCtrl', FABCtrl);

	FABCtrl.$inject = ['$scope'];

	function FABCtrl($scope) {
		this.isOpen = false;
		this.selectedMode = 'md-fling';
		this.selectedDirection = 'up';
		this.hover = false;

		$scope.moveUp = function () {
			return moveUp();
		}

		function moveUp() {
			angular.element("body,html").animate({
				scrollTop: 0
			}, 500);
		}
	}


})();