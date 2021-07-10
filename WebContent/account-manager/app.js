/**
 * 每个ExtJS4都是从创建一个Application类的实例开始的。
 * 这个Application实例里面配置了一些全局的设置（比如应用的名字）和模型，视图和控制器的设置。
 * 一个Application也包含了一个启动的函数。这里以一个简单的账号管理系统为例。
 * 
 * 首先，定义一个全局命名空间。
 * 所有的ExtJS应用都应该使用一个全局命名空间，所有的应用的类都位于这个之下。这里以AM为例。
 */
Ext.application({
	name: 'AM',
	appFolder: 'account-manager/app',
	launch: function() {
		/*Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				xtype: 'panel',
				title: 'Users',
				html: 'List of users will go here'
			}]
		});*/
		//将定义好的视图先放到视图中，在将其放在app.js中的viewport中
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: {
				xtype: 'userlist'//这里使用 xtype 指定那个视图（userlist），动态导入
			}
		});
	},
	/**
	 * 创建完控制器，我们将这个控制器添加到引用中
	 * 当在浏览器中访问index.html的时候，Users这个控制器会自动被夹在，
	 * 它的init函数会在应用的launch函数执行之前被调用。
	 */
	controllers: [
		'Users'
	]
});