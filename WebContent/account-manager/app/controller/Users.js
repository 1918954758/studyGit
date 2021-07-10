/**
 * 定义一个控制器
 * 控制器是把应用程序连接在一起的胶水
 * 它们监听事件（从视图中过来）并执行一些操作。
 */
Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',
	//接下来，将定义好的视图，添加到控制器中
	views: ['user.List'],
	/**
	 * init 函数用来设置和视图交互的控制器，以及和其它的控制器的关联。
	 * control 函数可以很容易的监听事件并执行相应的动作处理函数
	 */
	init: function() {
		console.log('Initialized Users! This happens before the Application launch function is called');
		/**
		 * 这里，在init函数里使用了 this.control 来监听视图的事件。
		 * control函数使用了最新的ComponentQuery引擎来快速找到引用的组件。
		 * 关于ComponentQuery可以参考 https://docs.sencha.com/#/api/Ext.ComponentQuery
		 */
		this.control({
			'viewport > panel': {
				render: this.onPanelRendered
			},
			'userlist': {
				itemdblclick: this.editUser
			}
		});
	},
	onPanelRendered: function() {
		console.log('The panel was rendered');
	},
	editUser: function(grid, record) {
		console.log('Double clicked on' + record.get('name'));
		Ext.MessageBox.alert('Double clicked on ' + record.get('name'));
	}
})