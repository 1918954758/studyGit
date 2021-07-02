Ext.define('Pandora.store.SearchResults', {
    extend: 'Ext.data.Store',
    requires: 'Pandora.model.Station',
    model: 'Pandora.model.Station',
    
    //sorters: ['name'],
	//Overriding the model's default proxy
	proxy: {
	    type: 'ajax',
	    url: '/shopping1.0/app/pandora/data/searchresults.json',
	    reader: {
	        type: 'json',
	        root: 'results'
	    }
	}
});