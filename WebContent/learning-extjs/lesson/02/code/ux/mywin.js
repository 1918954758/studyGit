Ext.onReady(function() {
	//定义一个类
	Ext.define('myWin', {//myWin - 类名
		extend: 'Ext.window.Window',
		width: 400,
		height: 300,
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
});