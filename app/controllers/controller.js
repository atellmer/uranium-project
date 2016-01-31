'use strict';

var app = angular.module('app', ['ngMaterial']);

app.config(function($mdIconProvider) {
  $mdIconProvider.fontSet('fa', 'fontawesome');
});

app.controller('AppCtrl', function($scope) {
});
