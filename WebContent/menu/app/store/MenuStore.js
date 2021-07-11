/**
 * 
 */
Ext.define('menu.store.MenuStore', {
	extend: 'Ext.data.TreeStore',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'menu/data/data.json',
		reader: {
			type: 'json',
			root: 'children'
		}
	}
})