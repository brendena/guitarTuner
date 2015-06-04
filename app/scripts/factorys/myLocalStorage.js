"use strict"

myApp.factory('myLocalStorage', ['$indexedDB', function myLocalStorageFactory($indexedDB){
	//aviable store
	//instruments

	return {
		'submitInstrument':function(instrument){
			$indexedDB.openStore('instruments', function(store){
				store.insert({"title": instrument.title, "notes": instrument.notes}).then(function(e){ 
				console.log(e);
				});
			});
		},
		'getInstruments':function(returnVariable){
			$indexedDB.openStore('instruments', function(store){
				store.getAll().then(function(instruments){
					console.log(instruments);	
					returnVariable = instruments;
					console.log(returnVariable);
				});
			});
		},
		'getStoreInstrument':function(){
			$indexedDB.openStore('instruments', function(store){

			});
		}
	
	}
}]);


