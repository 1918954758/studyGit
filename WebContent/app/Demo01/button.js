Ext.onReady(function() {
	var buttonDemo = Ext.create('Ext.button.Button', {
		text: 'Click me',
		renderTo: Ext.getBody(),
		handler: function() {
			alert('You clicked the button!');
		}
	})
});