//Ext.onReady(function() {
	//定义一个类
	Ext.define('ux.myWin', {//myWin - 类名   myWin一定要和文件名匹配
		extend: 'Ext.window.Window',
		width: 400,
		height: 300,
		config: {//类的配置项，类加载之后，会自动为配置项中的属性生成对应的get和set方法
			price: 500
		},
		newtitle: 'new zichen',
		mySetTitle: function() {
			this.title = this.newtitle;
		},
		title: 'zichen',
		initComponent: function() {
			this.mySetTitle();
			this.callParent(arguments);
		}
	});
//});