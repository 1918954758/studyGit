Ext.define('Pandora.controller.Station', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'stationsList',
        selector: 'stationslist'
    }],

    stores: ['Stations', 'RecentSongs'],
    
    init: function() {
        this.control({
        	//使用 StationsList.js 的 alias: 'widget.stationslist', 属性
            'stationslist': {
                selectionchange: this.onStationSelect
            },
            //使用 NewStation.js 的 alias: 'widget.newstation', 属性
            'newstation': {
                select: this.onNewStationSelect
            }
        });
    },
    
    onLaunch: function() {
        var stationsStore = this.getStationsStore();        
        stationsStore.load({
            callback: this.onStationsLoad,
            scope: this
        });
    },

    onStationsLoad: function() {
        var stationsList = this.getStationsList();
        stationsList.getSelectionModel().select(0);
    },
    
    onStationSelect: function(selModel, selection) {
    	// stationstart - 是一个事件名
        this.application.fireEvent('stationstart', selection[0]);
    },
    
    onNewStationSelect: function(field, selection) {
        var selected = selection[0],
            store = this.getStationsStore(),
            list = this.getStationsList();
            
        if (selected && !store.getById(selected.get('id'))) {
            store.add(selected);
            list.getSelectionModel().select(selected);
        }
    }
});
