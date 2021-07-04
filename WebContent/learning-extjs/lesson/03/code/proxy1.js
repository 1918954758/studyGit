/**
 * 
 */
(function() {
	//onReady就绪事件，需要一个函数作为参数
	Ext.onReady(function() {
		Ext.create('proxy1', {
			extend: 'Ext.data.Model',
			fields: [
				{name: 'name', type: 'auto'},
				{name: 'age', type: 'int'},
				{name: 'email', type: 'auto'}
			],
			proxy: {
				type: 'ajax',
				url: 'person.jsp'//加载不了 person.jsp，目前还不知道原因，，，，，，，
			}
		})
		var p = Ext.ModelManager.getModel('proxy1');
		p.load(1, {
			scope: this,
			failure: function(record, operation) {
				
			},
			success: function(record, operation) {
				alert(record);
			},
			callback: function(record, operation) {
				
			}
		});
	});
})();