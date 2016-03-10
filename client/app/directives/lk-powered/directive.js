;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkPowered', lkPowered);

	function lkPowered() {
		return {
			templateUrl: '../app/directives/lk-powered/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();