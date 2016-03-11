;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$scope', '$http', '$sanitize', '$mdDialog', '$mdToast', 'lkStore'];

	function OrderDialogCtrl($scope, $http, $sanitize, $mdDialog, $mdToast, lkStore) {
		var data = {
				name: '',
				phone: '',
				email: '',
				cost: lkStore.cost || 'Не заполнено',
				project: lkStore.project || 'Не заполнено',
				services: lkStore.services || 'Не заполнено'
			},
			toast = angular.element(document.querySelector('#toast'));

		$scope.data = data;

		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {
			$mdDialog.cancel();

			data.name = $sanitize($scope.data.name);
			data.phone = $sanitize($scope.data.phone);
			data.email = $sanitize($scope.data.email);

			data = JSON.stringify(data);
				
			$http.post('/order', data).success(function(response){
				console.log('успех', response);
				
				$mdToast.show(
				$mdToast.simple()
				.textContent('Ваш заказ отправлен! Спасибо!')
				.position('bottom left')
				.hideDelay(5000)
				.parent(toast)
				);
			});	
		}
	}
})();