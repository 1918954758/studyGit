/**
 * 定义一个视图
 * 视图就是一个组件
 * 这里创建一个 Users grid 定义在文件 app/view/user/List.js中
 */
Ext.define('AM.view.user.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	title: 'All Users',
	initComponent: function() {
		this.store = {//定义store中有哪些字段
			fields: ['name', 'email', 'age', 'sex', 'hobby', 'area'],
			data: [{
				name: 'Ed', 
				email: 'zichen@lemon.com',
				age: '28',
				sex: 'boy',
				hobby: 'lemon',
				area: 'NMG'
			}, {
				name: 'Lemon', 
				email: 'lemon@zichen.com',
				age: '23',
				sex: 'girl',
				hobby: 'zichen',
				area: 'JSWX'
			}, {
				name: 'Dog',
				email: 'dog@cat.com',
				age: '3',
				sex: 'girl',
				hobby: 'dog',
				area: 'no'
			}]
		};
		this.columns = [{//定义表头
			header: 'Name',
			dataIndex: 'name',
			flex: 1
		}, {
			header: 'Email',
			dataIndex: 'email',
			flex: 1
		}, {
			header: 'Age',
			dataIndex: 'age',
			flex: 1
		}, {
			header: 'Sex',
			dataIndex: 'sex',
			flex: 1
		}, {
			header: 'Hobby',
			dataIndex: 'hobby',
			flex: 1
		}, {
			header: 'Area',
			dataIndex: 'area',
			flex: 1
		}];
		this.callParent(arguments);
	}
})