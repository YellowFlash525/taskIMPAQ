'use strict'
var app = angular.module('app', []);
	
app.controller('UsersCtrl', function($scope, $http){
	$http.get('app/users.json').then(function (response){
		$scope.users = response.data;
	});

	this.removeUser = function(user) {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);
    };

    this.editOneUser = function(user){
        $scope.users[user].editable = true;
    };

    this.updateOneUser = function(user){
        $scope.users[user].editable = false;
    };

    this.editMultiUsers = function() {
    	angular.forEach($scope.users, function(value, key) {
            if($scope.users[key].selected){
                $scope.users[key].editable = true;
                $scope.users[key].selected = false;
            }
        });    			
    };
    
    this.updateMultiUsers = function() {
        angular.forEach($scope.users, function(value, key) {
            if($scope.users[key].editable){
                $scope.users[key].editable = false;
            }
        });
    };

    //zmienić na forEach
});
