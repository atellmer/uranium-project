;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkContent', lkContent);

	function lkContent() {
		return {
			templateUrl: '../app/directives/lk-content/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();