Ext.application({
	name: 'HelloExt',
	launch: function() {
		Ext.create('Ext.panel.Panel', {
			width: 1024,
			height: 720,
			layout: 'border',
			items: [
				{
					region: 'south',//上
					xtype: 'panel',
					height: 20,//south只能设置高度
					split: false,
					html: '欢迎登陆',
					margins: '5 0 0 5'
				},
				{
					title: 'West Region is collapsible',
					region: 'west',//上
					xtype: 'panel',
					margins: '5 0 0 5',
					width: 200,//west只能设置宽度
					collapsible: true,
					id: 'west-region-container',
					layout: 'fit'
				},
				{
					title: 'Center Region',
					region: 'center',
					xtype: 'panel',
					layout: 'fit',
					margins: '5 5 0 0',
					html: '在ExtJS4中，center区域必须指定，否则会报错。'
				}
			],
			renderTo: Ext.getBody()//将border布局渲染到border2.html的body中
		});
	}
});