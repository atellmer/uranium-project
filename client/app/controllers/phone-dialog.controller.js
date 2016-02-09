;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogCtrl', PhoneDialogCtrl);

	PhoneDialogCtrl.$inject = ['$scope', '$mdDialog'];

	function PhoneDialogCtrl($scope, $mdDialog) {

		$scope.user = {};
		$scope.user.name = '';
		$scope.user.phone = '';

		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {
			console.log('name: ', $scope.user.name);
			console.log('phone: ', $scope.user.phone);
			$mdDialog.cancel();
		}
	}
})();