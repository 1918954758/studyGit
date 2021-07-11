/**
 * 
 */
Ext.define('menu.view.Viewport', {
	extend: 'Ext.container.Viewport',
	//布局方式
	layout: 'border',
	alias: 'widget.viewport',
	items: [{
		title: 'ExtJS案例',
		collapisble: true,
		region: 'north',
		height: 100,
		html: '<br><center><font size=5>MVC模式，实现ExtJS案例</font><br><font size=2>原码来源：ITLee博客</font></center>'
	}, {
		title: '功能菜单',
		region: 'west',
		split: true,
		collapisble: true,
		items: [{
			xtype: 'menutree'
		}]
	}, {
		region: 'center',
		id: 'mainContent',
		xtype: 'tabpanel',
		layout: 'fit',
		collapisble: true
	}]
})