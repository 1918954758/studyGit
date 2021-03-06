Ext.define('Pandora.model.Station', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    proxy: {
        type: 'ajax',
        url: '/shopping1.0/app/pandora/data/stations.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});