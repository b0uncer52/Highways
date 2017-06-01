"use strict";

app.controller("SecondCtrl", function ($scope, $http) {
	$http.get('./data/highways.json')
	.then((collection) => {
		$scope.highwayName = collection.data.route66.name;
		$scope.road = collection.data.route66;
	})
	.catch( (error) => {console.log(error);});
});