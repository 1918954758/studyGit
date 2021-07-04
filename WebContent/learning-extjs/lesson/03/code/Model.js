/**
 * 
 */
(function() {
	Ext.onReady(function() {
		//1. 使用 Ext.define 来创建
		// 在MVC模式中，model一定是M层
		Ext.define('person', {
			extend: 'Ext.data.Model',
			fields: [//相当于 DB 中有一个 table 叫person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			]
		});
		
		//2. 使用 create 来创建
		// 该方法创建的返回值就是 Ext.data.Model
		Ext.regModel('user', {
			fields: [//相当于 DB 中有一个 table 叫person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			]
		})
		
		
		//实例化person类
		//1. new 关键字
		var p1 = new person({
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		});
		//alert(p1.get('name'));获取类中的属性 c.get('xxx');
		
		//2. Ext.create 来创建
		var p2 = Ext.create('person', {
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		});
		//alert(p2.get('age'))
		
		//3. 通过ModelManager来创建
		//var p3 = Ext.ModelMgr.create({//ModelMgr是ModelManager的别称，使用别称可行
		var p3 = Ext.ModelManager.create({//ModelMgr是ModelManager的别称
			name: 'zichen.com',
			age: 26,
			email: 'zichen@163.com'
		}, 'person');
		//alert(p3.get('email'));
		//alert(p3.getName());//相当于 java 中 object.getName，这样是不对的； object.getClass.getName;
		alert(person.getName()); // -> person
		
	})
})();