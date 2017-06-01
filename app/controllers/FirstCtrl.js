"use strict";

app.controller("FirstCtrl", function ($scope, $http) {
	$http.get('./data/highways.json')
	.then((collection) => {
		$scope.highwayName = collection.data.blueridge.name;
		$scope.road = collection.data.blueridge;
	})
	.catch( (error) => {console.log(error);});
});
