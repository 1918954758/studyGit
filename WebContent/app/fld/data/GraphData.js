/**
 * 定义数据实体
 */
Ext.define('graphData',{
	extend:'Ext.data.Model',
	fields:[
		{name:'graphName',type:'string'},
		{name:'graphData',type:'int'}
	]
});