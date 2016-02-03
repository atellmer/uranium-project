;(function() {
	'use strict';

	angular
  .module('app')
  .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$scope', '$http', '$timeout', '$window'];

  function PostsCtrl($scope, $http, $timeout, $window) {
    var cash,
        last,
        delta = 3,
        initial = 6,
        path = '../app/models/posts.model.json';

    $http.get(path).success(function(response) {
      cash = response;
      $scope.cards = response.slice(0, initial);
      last = delta;
    });

    angular.element($window).bind('scroll', scrollHandler);

    function loadMoreItems() {
      delta += last;
      $scope.cards = cash.slice(last, delta);
    }

    function scrollHandler() {
      var position,
          end;

      position = angular.element(this).scrollTop() + angular.element(this).height(),
      end = angular.element('#end-content').offset().top;

      if(position >= end) {
        $scope.$apply(loadMoreItems);
      }
    }
  }
})();