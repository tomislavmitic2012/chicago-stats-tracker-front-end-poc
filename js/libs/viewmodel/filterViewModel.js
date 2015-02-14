	// Main viewmodel class
	define(['knockout','knockout_mapping','jquery'], function(ko,mapping,$) {


	    // Class to represent a row in the seat reservat

	    

	    $.getJSON("https://data.cityofchicago.org/resource/x2n5-8w5q.json", function(data) {



	    	var viewModel = {
	    		crimes: mapping.fromJS(data),
	    		shouldShowMessage: ko.observable(false),
	    		shouldShowFilter: ko.observable(true),
	    		shouldShowOverviewTable: ko.observable(false),
	    		overviewTabClick: function(){
	    			this.shouldShowOverviewTable(true),
	    			this.shouldShowFilter(false)
	    		},
	    		filterTabClick: function(){
	    			this.filterTabClick(true),
	    			this.shouldShowOverviewTable(false)
	    		},
	    		addNewFilterClick: function(){
	    			$('#filterWrapper div:first')
	    			.clone()
	    			.append('')
	    			.appendTo($('#filterWrapper'));
	    		},
	    		removeFilterClick: function(){
	    			alert('hello');

	    		}
	    	}


	    	ko.applyBindings(viewModel);


	    });


});