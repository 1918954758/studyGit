/**
 *
 */
(function() {
	//预加载 ux下面的文件，当我们创建 'ux.myWin' 时，才加载
	Ext.Loader.setConfig({
		enabled: true,//启用Loader机制
		paths: {
			myApp: 'ux'
		}
	});
	Ext.onReady(function() {
		//实例化定义的类
		var mywin = Ext.create('ux.myWin', {
			title: 'ZICHEN',
			price: 600,
			requires: ['ux.myWin']//会去找 myWin.js  myWin一定要和文件名匹配
		});
		
		Ext.get('zi').on('click', function() {
			//mywin.show();
			//alert(mywin.getPrice());
			mywin.setPrice(700);
			alert(mywin.getPrice());
		})
		
		Ext.define('say', {
			cansay: function() {
				alert('hello');
			}
		})
		
		Ext.define('sing', {
			sing: function() {
				alert('sing');
			}
		})
		Ext.define('user', {
			//extend: 'say',//也可以达到将say类引入进来
			//extend: ['say', 'sing'], 如果有两个类要引入进来，使用这种方法就不可以，单继承，不可以多个方法继承
			mixins: {//混合，可以将其他定义的方法混合进来
				say: 'say',
				sing: 'sing'
			}
		})
		
		var u = Ext.create('user', {
			
		});
		
		u.cansay();
		u.sing();
	});
})();