;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PostsCtrl', PostsCtrl);

	PostsCtrl.$inject = ['$scope', '$http', '$window'];

	function PostsCtrl($scope, $http, $window) {
		var cash,
			last,
			delta,
			initial = 6,
			path = '../app/models/posts.model.json';

		$http.get(path).success(function (response) {
			last = 0;
			delta = 3;
			cash = {};
			$scope.cards = {};

			cash = response;

			$scope.cards = cash.slice(0, initial);
			last = delta;
		});

		angular.element($window).bind('scroll', scrollHandler);

		function loadMoreItems() {
			if (cash && (delta + last < cash.length)) {

				last = $scope.cards.length;

				var cards = $scope.cards.concat(cash.slice(last, last + delta));
				$scope.cards = cards;
			}
		}

		function scrollHandler() {
			var position,
				end;

			position = angular.element(this).scrollTop() + angular.element(this).height();
			end = angular.element('#end-content').offset().top;

			if (position >= end) {
				$scope.$apply(loadMoreItems);
			}
		}
	}
})();