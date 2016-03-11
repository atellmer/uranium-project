;
(function () {
	'use strict';
	angular
		.module('app')
		.config(configurator);

	configurator.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'valdrProvider'];

	function configurator($stateProvider, $urlRouterProvider, $locationProvider, valdrProvider) {
		//$locationProvider.html5Mode(true);

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


		valdrProvider.addConstraints({
			'Order': {
				'name': {
					'size': {
						'min': 3,
						'max': 20,
						'message': 'Нужно не менее 3 символов, но не более 20'
					},
					'pattern': {
						'value': '/^[+]{0,1}[а-яА-Я, a-zA-Z]{3,}$/',
						'message': 'Имя должно состоять из букв'
					},
					'required': {
						'message': 'Обязательное поле'
					}
				},
				'phone': {
					'size': {
						'min': 5,
						'max': 15,
						'message': 'Нужно не менее 5 символов, но не более 15.'
					},
					'pattern': {
						'value': '/^[+]{0,1}[-(),0-9]{5,}$/',
						'message': 'Сюда вводить буквы не надо'
					}
				},
				'email': {
					'email': {
						'message': 'Некорректный e-mail'
					},
					'required': {
						'message': 'Обязательное поле'
					}
				}
			}
		});
	}
})();