	// Main viewmodel class
	define(['knockout','knockout_mapping'], function(ko,mapping) {


	    // Class to represent a row in the seat reservat

	    var jsonCriteriaData = ['data','ID','year'];


	    function FilterViewModel() {
		    var self = this;
		 
		    self.filterItem = ko.observableArray([{}]); // initialize first row
		    self.filterCriteria = ko.observableArray(this.jsonCriteriaData);
		 
		    self.filterItemLine = function() {
		        self.filterItem.push({});
		    };
		 
		    self.removeFilterLine = function() {
		        self.filterItem.remove(this);
		    }
		}
 

	ko.applyBindings(new FilterViewModel(),document.getElementById("filterData")); 	
});