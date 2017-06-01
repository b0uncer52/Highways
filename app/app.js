"use strict";

var app = angular.module("HighwayApp", ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/default.html'
	}).when('/first', {
		templateUrl: 'partials/highway.html',
		controller: 'FirstCtrl'
	}).when('/second', {
		templateUrl: 'partials/highway.html',
		controller: 'SecondCtrl'
	}).otherwise('/');
});

console.log("hiya app.js");