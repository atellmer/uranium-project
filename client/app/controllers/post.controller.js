;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PostCtrl', PostCtrl);

	PostCtrl.$inject = ['$scope', '$http', '$stateParams'];

	function PostCtrl($scope, $http, $stateParams) {

		var id = $stateParams.id,
			path = '../app/models/posts.model.json';


		$http.get(path).success(function (response) {

			var findId = response[id - 1].id;

			if (id === findId) {
				$scope.post = response[id - 1];
			} else {
				console.log('не найден пост');
			}
		});

	}


})();