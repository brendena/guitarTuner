'use strict';

/**
 * @ngdoc overview
 * @name guitarTunerApp
 * @description
 * # guitarTunerApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('guitarTunerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'LocalStorageModule',
	'indexedDB'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/instrumentSelection', {
        templateUrl: 'views/instrumentSelection.html',
        controller: 'InstrumentSelectionCtrl'
      })
	  .when('/insturment/:instrument',{
		templateUrl: 'views/tuner.html',
		controller: 'tunerCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($indexedDBProvider){
	console.log("hello");
	$indexedDBProvider
		.connection('myIndexedDataBase')
		.upgradeDatabase(2, function(event, db, tx){
			var objStore = db.createObjectStore('instruments', {keyPath: 'title'});
		});
  });
/*
  .config(function(localStorageServiceProvider){
	localStorageServiceProvider.setStorageType('localStorage');
	localStorageServiceProvider.setPrefix('guitarTunerApp');
  });
*/

















