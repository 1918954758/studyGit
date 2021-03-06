/**
 * 定义一个菜单组件
 * 给菜单组件起个别名，在viewport中用到
 */
Ext.define('menu.view.MenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.menutree',
	border: false,
	//规定锚链接地址的显示区域
	hrefTarget: 'mainContent',
	//是否显示根节点
	rootVisible: false,
	//数据集
	store: 'MenuStore'
})