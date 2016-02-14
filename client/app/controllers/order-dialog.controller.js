;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$scope', '$mdDialog', '$mdToast'];

	function OrderDialogCtrl($scope, $mdDialog, $mdToast) {

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
			$mdDialog.cancel();

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