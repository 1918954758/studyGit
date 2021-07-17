/**
 * 
 */
Ext.onReady(function() {
	var component1 = Ext.create('Ext.Component', {
        html: 'First Compoent'
    });
    var component2 = Ext.create('Ext.Component', {
        html: 'Second Component'
    });
    var component3 = Ext.create('Ext.Component', {
        html: 'Third Component'
    });
    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        title: 'Container',
        border: 1,
        width: '50%',
        style: {
            borderStyle: 'solid', 
            borderWidth: '2px'
        },
        items: [component1, component2, component3]
    });
});