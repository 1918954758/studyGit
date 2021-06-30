/**
 * 声明说句实体
 */
var graphDataStore=Ext.create('Ext.store.GraphData',{
	extends: 'Ext.data.Store',
	model:'data.GraphData',
	data:[
		{graphName:"1月",graphData:700},
		{graphName:"2月",graphData:800},
		{graphName:"3月",graphData:600},
		{graphName:"4月",graphData:500}	
	]
});