/**
 * 
 */
Ext.onReady(function () {
	var child1 = Ext.create('Ext.Panel', {
		html: 'Text field'
	});
	var child2 = Ext.create('Ext.Panel', {
		html: 'Text field'
	});
	Ext.create('Ext.form.Panel', {
		renderTo: Ext.getBody(),
		width: 100,
		height: 100,
		border: true,
		layout: 'auto',
		frame: true,
		items: [child1, child2]
	});
});