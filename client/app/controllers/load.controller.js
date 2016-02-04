;(function() {
	'use strict';

	angular
  .module('app')
  .controller('LoadCtrl', LoadCtrl);

  LoadCtrl.$inject = ['$scope', '$window'];

  function LoadCtrl($scope) {
    angular.element(document).ready(function() {
     $scope.onload = true;
    });
    
  }
})();