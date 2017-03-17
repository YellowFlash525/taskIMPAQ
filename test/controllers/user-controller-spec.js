describe('UsersController', function() {
	'use strict';

	beforeEach(module('app'));

	var $httpBackend;
	var UserCtrl;
	var scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		UserCtrl = $controller('UsersCtrl', {$scope: scope});
	}));

	beforeEach(inject(function(_$httpBackend_){
		$httpBackend = _$httpBackend_;
	}));

	it('deleteUser', function() {
		scope.users = [{
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 2",
			"selected": false,
			"editable": false
		}]
		scope.removeUser(1);
		scope.removeUser(2);
		expect(scope.users.length).toBe(0);
	});

	it('editOneUser', function() {
		scope.users = [{
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 2",
			"selected": false,
			"editable": false
		}]
		scope.editOneUser(1);
		expect(scope.users[1].editable).toBe(true);
	});

	it('updateOneUser', function() {
		scope.users = [{
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 2",
			"selected": false,
			"editable": true
		}]
		scope.updateOneUser(1);
		expect(scope.users[1].editable).toBe(false);
	});

	describe('editMultiUsers', function() {
		it('if selected flag is true', function() {

		});
		it('if selected flag is false', function() {
			
		});
	});

	describe('updateMultiUsers', function() {
		it('if selected flag is true', function() {

		});
	});

	it('load data from json file', function() {
		$httpBackend.expectGET('app/users.json').respond([{
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 2",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 3",
			"selected": false,
			"editable": false
		}, {
			"name": "Joe",
			"surname": "Doe",
			"dateBirth": "24.03.2000",
			"mobileNumber": 34425366,
			"adress": "Poznan, Wolska 4",
			"selected": false,
			"editable": false
		}]);
		$httpBackend.flush();
		expect(scope.users[1].name).toEqual("Joe");
		expect(scope.users[1].adress).toEqual("Poznan, Wolska 2");
	});
});