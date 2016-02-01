;(function() {
	'use strict';

	angular
    .module('app')
    .controller('BlogCtrl', BlogCtrl);

  BlogCtrl.$inject = ['$scope'];

  function BlogCtrl($scope) {
  	$scope.cards = [
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/1.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/2.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/3.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/4.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/5.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/6.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/1.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/2.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/3.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/4.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/5.jpg', alt: 'Alt text'},
  		{title: 'Заголовок', anonce: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. e. Nulla dolores modi ipsa saepe eaque veniam earum exercitationem.", img: 'img/blog/6.jpg', alt: 'Alt text'}
  	]
  }
})();