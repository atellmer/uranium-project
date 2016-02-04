;(function() {
	'use strict';
	angular
		.module('app')
		.config(configurator);

		configurator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	  function configurator($stateProvider, $urlRouterProvider, $locationProvider) {

	  	$urlRouterProvider.otherwise('/');

	    $stateProvider
		    .state('root', {
		      url: '/',
		      templateUrl: '../app/views/index.html'
		    })
		    .state('blog', {
		      url: '/blog',
		      templateUrl: '../app/views/blog.html'
		    });
	  }

})();


