;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('SocialCtrl', SocialCtrl);

	SocialCtrl.$inject = ['$scope'];

	function SocialCtrl($scope) {

		var site = 'http://likearts.ru',
			title = 'LIKEARTS',
			image = 'http://s.fotorama.io/1.jpg',
			description = 'Lorem Ipsum Dolor';

		$scope.vk = function () {
			return vk();
		}
		$scope.ok = function () {
			return ok();
		}
		$scope.fb = function () {
			return fb();
		}
		$scope.tw = function () {
			return tw();
		}

		function vk() {
			Share.vk(site, title, image, description);
		}

		function ok() {
			Share.ok(site, description);
		}

		function fb() {
			Share.fb(site, title, image, description);
		}

		function tw() {
			Share.tw(site, title);
		}

		var Share = {
			vk: function (purl, ptitle, pimg, text) {
				var url;
				url = 'http://vkontakte.ru/share.php?';
				url += 'url=' + encodeURIComponent(purl);
				url += '&title=' + encodeURIComponent(ptitle);
				url += '&description=' + encodeURIComponent(text);
				url += '&image=' + encodeURIComponent(pimg);
				url += '&noparse=true';
				Share.popup(url);
			},
			ok: function (purl, text) {
				var url;
				url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
				url += '&st.comments=' + encodeURIComponent(text);
				url += '&st._surl=' + encodeURIComponent(purl);
				Share.popup(url);
			},
			fb: function (purl, ptitle, pimg, text) {
				var url;
				url = 'http://www.facebook.com/sharer.php?s=100';
				url += '&p[title]=' + encodeURIComponent(ptitle);
				url += '&p[summary]=' + encodeURIComponent(text);
				url += '&p[url]=' + encodeURIComponent(purl);
				url += '&p[images][0]=' + encodeURIComponent(pimg);
				Share.popup(url);
			},
			tw: function (purl, ptitle) {
				var url;
				url = 'http://twitter.com/share?';
				url += 'text=' + encodeURIComponent(ptitle);
				url += '&url=' + encodeURIComponent(purl);
				url += '&counturl=' + encodeURIComponent(purl);
				Share.popup(url);
			},
			popup: function (url) {
				window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
			}
		};
	}

})();