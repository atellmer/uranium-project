;(function() {
	'use strict';

	angular
    .module('app')
    .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$scope', '$http'];

  function PostsCtrl($scope, $http) {

  	$http.get('../app/models/posts.model.json')
  			 .success(function(response) {
						$scope.cards = response;
					});
  }
})();