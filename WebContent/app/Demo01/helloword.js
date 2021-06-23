Ext.application({
	name: 'mmm',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				title: 'Hello ExtJS',
				html: 'to ExtJS'
			}]
		});
	}
});
Ext.onReady(function() {
	alert('onReady()')
	//给按钮添加点击事件
	/*Ext.get('myButton').on('click', function() {
		alert('You clicked the button!');
	})*/
	//给一组标签添加点击事件
	/*Ext.select('p').on('click', function() {
		alert('You clicked a paragraph!');
	})*/
});