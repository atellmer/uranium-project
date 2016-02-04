;(function() {
	'use strict';

	angular
  .module('app')
  .controller('TemplateCtrl', TemplateCtrl);

  TemplateCtrl.$inject = ['$scope'];

  function TemplateCtrl($scope) {

  	$scope.templates = [ 
  		{name: 'index.html', url: '../app/views/index.html'},
    	{name: 'blog.html', url: '../app/views/blog.html'} 
    	];

  	$scope.template = $scope.templates[1];

  }
 })();