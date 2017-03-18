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

	it('load data from json file', function() {
		$httpBackend.expectGET('app/users.json').respond([{
			"name": "Camile",
			"surname": "Smith",
			"dateBirth": "24.09.1995",
			"mobileNumber": 111111111,
			"adress": "Poznan, Strzelecka 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Anna",
			"surname": "Doe",
			"dateBirth": "18.03.1990",
			"mobileNumber": 456123890,
			"adress": "Warszawa, Wolska 2",
			"selected": false,
			"editable": false
		}, {
			"name": "Tom",
			"surname": "Owen",
			"dateBirth": "02.01.2000",
			"mobileNumber": 344253665,
			"adress": "Kalisz, Zwyciestwa 3",
			"selected": false,
			"editable": false
		}, {
			"name": "Jerry",
			"surname": "Duke",
			"dateBirth": "24.03.1999",
			"mobileNumber": 321432543,
			"adress": "Złotów, Paderewskiego 5",
			"selected": false,
			"editable": false
		}]);
		$httpBackend.flush();
		expect(scope.users[1].name).toEqual("Anna");
		expect(scope.users[1].adress).toEqual("Warszawa, Wolska 2");
	});

	it('deleteUser', function() {
		scope.users = [{
			"name": "Camile",
			"surname": "Smith",
			"dateBirth": "24.09.1995",
			"mobileNumber": 111111111,
			"adress": "Poznan, Strzelecka 1",
			"selected": false,
			"editable": true
		}, {
			"name": "Anna",
			"surname": "Doe",
			"dateBirth": "18.03.1990",
			"mobileNumber": 456123890,
			"adress": "Warszawa, Wolska 2",
			"selected": false,
			"editable": true
		}];
		scope.removeUser(1);
		scope.removeUser(2);
		expect(scope.users.length).toBe(0);
	});

	it('editOneUser', function() {
		scope.users = [{
			"name": "Camile",
			"surname": "Smith",
			"dateBirth": "24.09.1995",
			"mobileNumber": 111111111,
			"adress": "Poznan, Strzelecka 1",
			"selected": false,
			"editable": false
		}, {
			"name": "Anna",
			"surname": "Doe",
			"dateBirth": "18.03.1990",
			"mobileNumber": 456123890,
			"adress": "Warszawa, Wolska 2",
			"selected": false,
			"editable": false
		}];
		scope.editOneUser(1);
		expect(scope.users[1].editable).toBe(true);
	});

	it('updateOneUser', function() {
		scope.users = [{
			"name": "Camile",
			"surname": "Smith",
			"dateBirth": "24.09.1995",
			"mobileNumber": 111111111,
			"adress": "Poznan, Strzelecka 1",
			"selected": false,
			"editable": true
		}, {
			"name": "Anna",
			"surname": "Doe",
			"dateBirth": "18.03.1990",
			"mobileNumber": 456123890,
			"adress": "Warszawa, Wolska 2",
			"selected": false,
			"editable": true
		}];
		scope.updateOneUser(1);
		expect(scope.users[1].editable).toBe(false);
	});

	describe('editMultiUsers', function() {
		it('if user is selected', function() {
			scope.users = [{
				"name": "Camile",
				"surname": "Smith",
				"dateBirth": "24.09.1995",
				"mobileNumber": 111111111,
				"adress": "Poznan, Strzelecka 1",
				"selected": true,
				"editable": false
			}, {
				"name": "Anna",
				"surname": "Doe",
				"dateBirth": "18.03.1990",
				"mobileNumber": 456123890,
				"adress": "Warszawa, Wolska 2",
				"selected": true,
				"editable": false
			}];
			scope.editMultiUsers();
			expect(scope.users[0].editable).toBe(true);
			expect(scope.users[1].editable).toBe(true);
		});
	});

	describe('updateMultiUsers', function() {
		it('if user is editable', function() {
			scope.users = [{
				"name": "Camile",
				"surname": "Smith",
				"dateBirth": "24.09.1995",
				"mobileNumber": 111111111,
				"adress": "Poznan, Strzelecka 1",
				"selected": true,
				"editable": true
			}, {
				"name": "Anna",
				"surname": "Doe",
				"dateBirth": "18.03.1990",
				"mobileNumber": 456123890,
				"adress": "Warszawa, Wolska 2",
				"selected": true,
				"editable": true
			}];
			scope.updateMultiUsers();
			expect(scope.users[0].selected).toBe(false);
			expect(scope.users[0].editable).toBe(false);
			expect(scope.users[1].selected).toBe(false);
			expect(scope.users[1].editable).toBe(false);
		});
	});
});