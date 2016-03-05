;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('CalculateBtnCtrl', CalculateBtnCtrl);

	CalculateBtnCtrl.$inject = ['$scope'];

	function CalculateBtnCtrl($scope) {

		var element = angular.element('#scroll-here');

		$scope.go = function () {
			return go();
		}

		function go() {
			angular.element("body,html").animate({
				scrollTop: (element.offset().top - 50)
			}, 500);
		}
	}
})();