'use strict'
var app = angular.module('app', []);
	
app.controller('UsersCtrl', function($scope, $http){
	$http.get('app/users.json').then(function SuccesCallback(response){
		$scope.users = response.data;
	}, function ErrorCalback(response){
        throw new Error('Something was wrong')
    });

    $scope.data = "ala";

	$scope.removeUser = function(user) {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };

    $scope.editOneUser = function(user){
        $scope.users[user].editable = true;
    };

    $scope.updateOneUser = function(user){
        $scope.users[user].editable = false;
    };

    $scope.editMultiUsers = function() {
    	angular.forEach($scope.users, function(value, key) {
            if($scope.users[key].selected){
                $scope.users[key].editable = true;
                $scope.users[key].selected = false;
            }
        });    			
    };
    
    $scope.updateMultiUsers = function() {
        angular.forEach($scope.users, function(value, key) {
            if($scope.users[key].editable){
                $scope.users[key].editable = false;
                $scope.users[key].selected = false;
            }
            else {
                $scope.users[key].selected = false;
            }
        });
    };

    //zmienić na forEach
});
