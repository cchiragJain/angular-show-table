let App = angular.module("App", []);

App.controller("TableController", [
	"$scope",
	function ($scope) {
		$scope.data = [];
		$scope.isSubmitted = false;

		$scope.createTable = function () {
			// we are getting values in input with a ,
			$scope.headers = $scope.headers.split(",");

			$scope.isSubmitted = true;
		};

		$scope.logData = function () {
			console.log($scope.data);
		};
	},
]);
