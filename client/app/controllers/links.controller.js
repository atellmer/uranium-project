;(function() {
	'use strict';

	angular
  .module('app')
  .controller('LinksCtrl', LinksCtrl);

  LinksCtrl.$inject = ['$scope'];

  function LinksCtrl($scope) {

  	$scope.goTo = function(path) {
  		return goTo(path);
  	}

  	function goTo(path) {
  		document.location.href = path;
  	}

  }

})();