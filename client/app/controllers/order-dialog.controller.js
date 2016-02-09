;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$scope', '$mdDialog'];

	function OrderDialogCtrl($scope, $mdDialog) {

		$scope.user = {};
		$scope.user.name = '';
		$scope.user.phone = '';
		$scope.user.email = '';

		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {
			console.log('name: ', $scope.user.name);
			console.log('phone: ', $scope.user.phone);
			console.log('email: ', $scope.user.email);
			$mdDialog.cancel();
		}
	}
})();