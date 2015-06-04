'use strict';

/**
 * @ngdoc function
 * @name guitarTunerApp.controller:tunerCtrl
 * @description
 * # tunerCtrl
 * Controller of the guitarTunerApp
 */
angular.module('guitarTunerApp')
.controller('tunerCtrl', function ($scope, $indexedDB, $routeParams) {

	$indexedDB.openStore('instruments', function(store){
		store.find($routeParams.instrument).then(function(instruments){
			console.log(instruments);	
		});
	});
	console.log($routeParams);
});
