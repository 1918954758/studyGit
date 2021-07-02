Ext.define('Pandora.model.Song', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'artist', 'album', 'played_date', 'station'],
    
    proxy: {
        type: 'ajax',
        url: '/shopping1.0/app/pandora/data/songs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});