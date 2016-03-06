;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkHeader', lkHeader);

	function lkHeader() {
		return {
			templateUrl: '../app/directives/lk-header/template.html',
			replace: true,
			restrict: 'E',
			controller: 'NavBarCtrl'
		}
	}
})(); 