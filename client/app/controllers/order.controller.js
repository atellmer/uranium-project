;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('OrderCtrl', OrderCtrl);

	OrderCtrl.$inject = ['$scope', '$http', '$mdDialog'];

	function OrderCtrl($scope, $http, $mdDialog) {
		var projects = [];
		var services = [];
		var path = '../app/models/prices.model.json';
		var parent = angular.element(document.querySelector('body'));

		$http.get(path).success(function (response) {
			var j = 0;
			var k = 0;
			for (var i = 0; i < response.length; i++) {
				if (response[i].type === 'сайт') {
					projects[j] = response[i];
					j++;
				}
				if (response[i].type === 'услуга') {
					services[k] = response[i];
					k++;
				}
			}
		});

		$scope.projects = projects;
		$scope.services = services;
		$scope.type = false;
		$scope.cost = 0;

		$scope.service = {
			cb1: false,
			cb2: false,
			cb3: false
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
				$scope.cost += projects[$scope.type].price;
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
				parent: parent,
				targetEvent: ev,
				clickOutsideToClose: true,
				controller: 'OrderDialogCtrl'
			});
		}
	}
})();