/**
 * 
 */
(function() {
	Ext.data.validations.lengthMessage = "长度错误！";
	Ext.onReady(function() {
		//扩展，自定义验证机制
		Ext.apply(Ext.data.validations, {
			age: function(config, value) {
				if (value == undefined) {
					return false;
				}
				var min = config.min;
				var max = config.max;
				if (value <= min && value >= max) {
					return true;
				} else {
					return false;
				}
			},
			ageMessage: '  is not pass with validate\n it is include with [1 ~ 149]',
		});
		Ext.define('person', {
			extend: 'Ext.data.Model',
			fields: [//相当于 DB 中有一个 table 叫person
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			],
			//校验年龄只能是数字
			validations: [
				//type 校验类型
				//field 校验的某个字段
				//min 校验规则
				//max 校验规则
				{type: 'length', field: 'name', min: 2, max: 50},
				//校验 age 不能小于0，也不能大于200
				//自定义
				{type: 'age', field: 'age', min: 0, max: 150}
			]
		});
		
		var p2 = Ext.create('person', {
			name: 'zichen.com',
			age: 1126,
			email: 'zichen@163.com'
		});
		
		var errors = p2.validate();
		var errorInfo = [];
		errors.each(function(v) {//v = {field: "name", message: "is the wrong length"} [object Object]
			errorInfo.push(v.field + "[field] " + v.message);
		});
		alert(errorInfo);
	})
})();