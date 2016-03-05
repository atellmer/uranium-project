;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PortfolioItemCtrl', PortfolioItemCtrl);

	PortfolioItemCtrl.$inject = ['$scope', '$http', '$stateParams', '$sanitize'];

	function PortfolioItemCtrl($scope, $http, $stateParams, $sanitize) {

		var id = $stateParams.id;
		$scope.id = id;

		console.log('зашли в портфолио! #', id);

	}


})();