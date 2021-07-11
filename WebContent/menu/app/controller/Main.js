/**
 * 
 */
Ext.define('menu.controller.Main', {
	extend: 'Ext.app.Controller',
	//将view视图添加到控制器
	views: ['Viewport', 'MenuTree'],
	//将数据集添加到控制器
	stores: ['MenuStore'],
	
	//初始化方法，在launch函数之前执行
	init: function() {
		this.control({
			'menutree': {
				itemdblclick: this.changePage
			}
		});
	},
	
	//changePage 方法
	changePage: function(view, rec, item, index, e) {
		var title = rec.get('text');
		var leaf = rec.get('leaf');
		var tabPanel = Ext.getCmp('mainContent');
		//子节点才能打开，父节点不设置响应
		if (leaf == false) {
			return;
		}
		//以title值设置tab的id，打开时，就有 使tab active，无则新建tab
		var newTab = tabPanel.getChildByElement(tilte);
		if (newTab == null) {
			tabPanel.add({
				id: title,
				title: title,
				html: '当前页面是 ' + title + '<br/><br/>',
				closable: true
			});
		}
		tabPanel.setActiveTab(title);
	}
})