;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$scope', '$sanitize', '$mdDialog', '$mdToast'];

	function OrderDialogCtrl($scope, $sanitize, $mdDialog, $mdToast) {

		var user = {
			name: '',
			phone: '',
			email: ''
		}

		$scope.user = user;


		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {
			$mdDialog.cancel();

			user.name = $sanitize($scope.user.name);
			user.phone = $sanitize($scope.user.phone);
			user.email = $sanitize($scope.user.email);

			console.log(user.name);
			console.log(user.phone);
			console.log(user.email);

			$mdToast.show(
				$mdToast.simple()
				.textContent('Ваш заказ отправлен! Спасибо!')
				.position('bottom left')
				.hideDelay(5000)
				.parent(angular.element('#toast'))
			);
		}
	}
})();