'use strict';

/**
 * @ngdoc function
 * @name guitarTunerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guitarTunerApp
 */
angular.module('guitarTunerApp')
  .controller('InstrumentSelectionCtrl', function ($scope, $indexedDB, myLocalStorage) {

	

	$scope.notes = ['A','A#','B','C','C#','D','D#','E','E#','F','F#','G','G#'];
	$scope.octaves = 8;
	$scope.note = {
		"value":"a",
		"octave":4
	}
	$scope.instrument ={
		"title": "Blank Instrument",
		"notes": []
	}
	$scope.instrument.title = "Blank Instrument";
	$scope.instrument.Notes = [];

	$scope.getNumber = function(num) {
		return new Array(num);   
	}
	$scope.addNote = function(note){
		$scope.instrument.notes.push({"value": note.value,"octave":note.octave});	
	}
	console.log(myLocalStorage);
	$scope.submitInsturment = myLocalStorage.submitInstrument;
	
  });
