;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('OrderCtrl', OrderCtrl);

	OrderCtrl.$inject = ['$scope', '$http', '$mdDialog', 'lkStore'];

	function OrderCtrl($scope, $http, $mdDialog, lkStore) {
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
			$scope.projects = projects;
			$scope.services = services;
		});

		$scope.cost = 0;

		$scope.calculate = function () {
			return calculate();
		}

		$scope.showDialog = function (ev) {
			return showDialog(ev);
		}

		function calculate() {
			$scope.cost = 0;

			if ($scope.select) {
				$scope.cost += $scope.projects[$scope.select].price;

				lkStore.project = $scope.projects[$scope.select].name;
			}

			for (var i = 0; i < $scope.services.length; i++) {
				if ($scope.services[i].checked) {
					$scope.cost += $scope.services[i].price;

					if (lkStore.services.length === 0) {
						lkStore.services.push($scope.services[i].name);
					}

					if (filter(lkStore.services, $scope.services[i].name)) {
						lkStore.services.push($scope.services[i].name);
					}
				} else {
					for (var j = 0; j < lkStore.services.length; j++) {
						if (lkStore.services[j] === $scope.services[i].name) {
							lkStore.services.splice(j, 1);
						}
					}
				}
			}

			lkStore.cost = $scope.cost;
		}

		function filter(array, row) {
			var sum = 0;
			for (var i = 0; i < array.length; i++) {
				sum += array[i].indexOf(row) + 1;
			}
			if (sum === 0) {
				return true;
			} else {
				return false;
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