;(function() {
	'use strict';

	angular
  .module('app')
  .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$scope', '$http', '$timeout', '$window'];

  function PostsCtrl($scope, $http, $timeout, $window) {
    var cash,
        last,
        delta,
        initial = 6,
        path = '../app/models/posts.model.json';

    $http.get(path).success(function(response) {
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
      delta += last;
      if(cash) {
        $scope.cards = cash.slice(last, delta);
      }
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