// Main viewmodel class
define(['knockout','jquery','knockout_mapping'], function(ko,$ , mappping) {

	return function myDataViewModel(){

		$.getJSON("https://data.cityofchicago.org/resource/alternative-fuel-locations.json?fuel_type_code=LPG", function(data) {

	  		var myDataViewModel = {

	  			myData: mappping.fromJS(data)
	  	
	  		}

	  });
		
	}
   
	  

});