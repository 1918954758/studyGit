Ext.require(['Ext.data.*']);

Ext.onReady(function() {
    window.generateData = function(){
        var data = [];
        data.push({
            name: 1,
            data: 10
        }, {
        	name: 5,
            data: 15
        }, {
        	name: 10,
            data: 20
        }, {
        	name: 15,
            data: 25
        }, {
        	name: 20,
            data: 35
        });
        return data;
    };
    window.store1 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data'],
        data: generateData()
    });
    window.loadTask = new Ext.util.DelayedTask();
});