'use strict';

/**
 * @ngdoc function
 * @name guitarTunerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitarTunerApp
 */
angular.module('guitarTunerApp')
  .controller('MainCtrl', function ($scope, $indexedDB,myLocalStorage) {
	$indexedDB.openStore('instruments', function(store){
		store.getAll().then(function(instruments){
			$scope.availableInstruments = instruments;
		});
	});
	myLocalStorage.getStoreInstrument()
	$scope.availableInstruments

	$scope.getAllStorage = function(){ console.log("button clicked");};
    
  });
