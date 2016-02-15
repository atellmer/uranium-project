;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PortfolioCtrl', PortfolioCtrl);

	PortfolioCtrl.$inject = ['$scope', '$http'];

	function PortfolioCtrl($scope, $http) {
		var path = '../app/models/portfolio.model.json';

		$http.get(path).success(function (response) {

			$scope.items = response;
		});

	}

})();