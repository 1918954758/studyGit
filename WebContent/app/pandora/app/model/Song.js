Ext.define('Pandora.model.Song', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'artist', 'album', 'played_date', 'station'],
    
    proxy: {
        type: 'ajax',
        url: 'data/songs.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});