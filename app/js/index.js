
var app = angular.module('app', []);
	
app.controller('UsersCtrl', function($scope, $http){
	$http.get('app/users.json').then(function (response){
		$scope.users = response.data;
	});
});
