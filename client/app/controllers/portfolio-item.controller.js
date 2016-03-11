;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PortfolioItemCtrl', PortfolioItemCtrl);

	PortfolioItemCtrl.$inject = ['$scope', '$http', '$stateParams', '$sanitize', 'lkScroll'];

	function PortfolioItemCtrl($scope, $http, $stateParams, $sanitize, lkScroll) {
		lkScroll.top();

		var id = $stateParams.id,
			path = '../app/models/portfolio.model.json';

		$scope.id = id;

		$http.get(path).success(function (response) {
			var findId = response[id - 1].id;

			if (id === findId) {
				$scope.item = response[id - 1];
			} else {
				console.log('не найден пост');
			}
		});
	}
})();