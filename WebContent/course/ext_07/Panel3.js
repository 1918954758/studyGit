/**
 * 
 */
Ext.onReady(function () {
	Ext.create('Ext.tab.Panel', {
		renderTo: Ext.getBody(),
		width: 200,
		height: 200,
		title: 'Tab Panel',
		items: [{
			xtype: 'panel',
			title: 'Tab One',
			html: 'The first tab',
			listeners: {
				render: function() {
					Ext.MessageBox.alert('Tab one', 'Tab one was clicked.');
				}
			}
		}, {
			xtype: 'panel',
			title: 'Tab Two',
			html: 'The second tab',
			listeners: {
				render: function() {
					Ext.MessageBox.alert('Tab two', 'Tab two was clicked');
				}
			}
		}]
	});
});