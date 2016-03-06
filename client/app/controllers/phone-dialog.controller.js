;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogCtrl', PhoneDialogCtrl);

	PhoneDialogCtrl.$inject = ['$scope', '$sanitize', '$mdDialog'];

	function PhoneDialogCtrl($scope, $sanitize, $mdDialog) {

		var user = {
			name: '',
			phone: ''
		}

		$scope.user = user;

		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {

			user.name = $sanitize($scope.user.name);
			user.phone = $sanitize($scope.user.phone);

			console.log(user.name);
			console.log(user.phone);

			$mdDialog.cancel();
		}
	}
})();