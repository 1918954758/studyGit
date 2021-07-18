/**
 * 
 */
Ext.onReady(function () {
	var childPanel1 = Ext.create('Ext.panel.Panel', {
		title: 'Child Panel1',
		html: 'A Panel'
	});
	var childPanel2 = Ext.create('Ext.panel.Panel', {
		title: 'Child Panel2',
		html: 'B Panel'
	});
	Ext.create('Ext.container.Viewport', {
		renderTo: Ext.getBody(),
		items: [childPanel1, childPanel2]
	});
});