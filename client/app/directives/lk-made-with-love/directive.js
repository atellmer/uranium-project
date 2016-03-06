;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkMadeWithLove', lkMadeWithLove);

	function lkMadeWithLove() {
		return {
			templateUrl: '../app/directives/lk-made-with-love/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();