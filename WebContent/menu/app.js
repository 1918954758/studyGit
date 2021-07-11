Ext.application({
	name: 'menu',
	appFolder: 'menu/app',
	/*launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				xtype: 'viewport'
			}, {
				xtype: 'menutree'
			}]
		})
	},*/
	controllers: ['Main'],
	autoCreateViewport: true
})