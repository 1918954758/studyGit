/**
 *
 */
(function() {
	Ext.onReady(function() {
//		var win = new Ext.window.Window({
//			width: 400,
//			height: 300,
//			title: 'zichen'
//		});
//		
//		Ext.get('zi').on('click', function() {
//			win.show();
//		})
		
		
//		var o = {
//			say: function() {
//				alert(1111);
//			}
//		}
//		var fn = Ext.Function.alias(o, 'say');
//		fn();
		
//		var win = Ext.create('Ext.window.Window', {
//			width: 400,
//			height: 300,
//			title: 'zichen'
//		});
//		win.show();
		
		//实例化定义的类
		Ext.create('myWin', {
			title: 'ZICHEN'
		}).show();
	});
})();