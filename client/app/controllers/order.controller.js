;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('OrderCtrl', OrderCtrl);

	OrderCtrl.$inject = ['$scope', '$mdDialog'];

	function OrderCtrl($scope, $mdDialog) {

		var project = [
			{
				name: 'Продающий лендинг',
				price: 10000
			},
			{
				name: 'Промо-сайт',
				price: 20000
			},
			{
				name: 'Сайт-визитка',
				price: 30000
			},
			{
				name: 'Корпоративный сайт',
				price: 40000
			},
			{
				name: 'Интернет-магазин',
				price: 50000
			}
		];

		var services = [
			{
				name: 'SEO-оптимизация',
				price: 10000
			},
			{
				name: 'Продвижение в Яндекс.Директ',
				price: 10000
			},
			{
				name: 'Техническое обслуживание сайта на год',
				price: 5000
			},
		]

		$scope.type = false;
		$scope.service = {
			cb1: false,
			cb2: false,
			cb3: false
		};
		$scope.cost = 0;

		$scope.send = function () {
			return send();
		};

		$scope.calculate = function () {
			return calculate();
		};

		$scope.showDialog = function (ev) {
			return showDialog(ev);
		};

		function calculate() {
			$scope.cost = 0;
			if ($scope.type) {
				$scope.cost += project[$scope.type].price;
			}
			if ($scope.service) {
				if ($scope.service.cb1) {
					$scope.cost += services[0].price;
				}
				if ($scope.service.cb2) {
					$scope.cost += services[1].price;
				}
				if ($scope.service.cb3) {
					$scope.cost += services[2].price;
				}
			}
		}

		function showDialog(ev) {
			$mdDialog.show({
				templateUrl: '../app/views/order-dialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			});
		}
	}

})();