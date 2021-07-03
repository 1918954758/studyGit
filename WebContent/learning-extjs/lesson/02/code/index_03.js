/**
 *
 */
(function() {
	Ext.onReady(function() {//灏辩华鏂规硶锛岄〉闈㈠姞杞藉嵆鍔犺浇
		var win = new Ext.window.Window({//瀹炰緥Window
			width: 400,
			height: 300,
			title: 'zichen'
		});
		//得到按钮对象
		//为按钮对象添加单击事件
		//单击的时候调用win的show方法
		Ext.get('zi').on('click', function() {
			win.show();
		})
	});
})();