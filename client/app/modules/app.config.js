;
(function () {
	'use strict';
	angular
		.module('app')
		.config(configurator);

	configurator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

	function configurator($stateProvider, $urlRouterProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('root', {
				url: '/',
				templateUrl: '../app/views/landing.html'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: '../app/views/blog.html',
				controller: 'BlogCtrl'
			})
			.state('post', {
				url: '/blog/:id',
				templateUrl: '../app/views/post.html',
				controller: 'PostCtrl'
			})
			.state('portfolio', {
				url: '/portfolio/:id',
				templateUrl: '../app/views/portfolio-item.html',
				controller: 'PortfolioItemCtrl'
			})
			.state('contacts', {
				url: '/contacts/',
				templateUrl: '../app/views/contacts.html'
			});
	}

})();