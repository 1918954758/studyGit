/**
 * 
 */
//要先定义一个数据实体。
Ext.application({
	name: 'fld',
	autoCreateViewport: true,
	stores: ['GraphData'],
	controllers: ['Fld']
	
	
	
//	Ext.define('graphData',{
//		extend:'Ext.data.Model',
//		fields:[
//			{name:'graphName',type:'string'},
//			{name:'graphData',type:'int'}
//		]
//	});
//
//	//然后，声明这个数据实体中的数据：
//	var graphDataStore=Ext.create('Ext.data.Store',{
//		model:'graphData',
//		data:[
//			{graphName:"1月",graphData:700},
//			{graphName:"2月",graphData:800},
//			{graphName:"3月",graphData:600},
//			{graphName:"4月",graphData:500}	
//		]
//	});
	
//	如果数据由后端页面提供则这样写：
//	var graphDataStore=Ext.create('Ext.data.Store',{
//		model:'graphData',
//		proxy:{
//			type:'ajax',
//			url:'showData.php',//提供Json字符串的页面
//			reader:{
//				type:'json',
//				root:'data',
//			}
//		},
//		autoLoad:true
//	});
	
	//其中showData.php这个页面打印出如下字符串即可：
	
	//最后绘制折线图即可：
//	var chart = new Ext.chart.Chart({
//		//以下四项必须指定。否则无法显示。
//		width: 480,
//		height: 320,
//		store: graphDataStore,
//		renderTo: Ext.getBody(),
//		axes: [{//声明左轴与底轴分别是什么
//			type: 'Numeric',
//			position: 'left',
//			fields: 'graphData'
//		}, {
//			type: 'Category',
//			position: 'bottom',
//			fields: 'graphName'
//		}],
//		series: [{//声明填充x与y轴的数据分别是什么
//			type: 'line',
//			axis: 'left',
//			xField: 'graphName',
//			yField: 'graphData'
//		}]
//	});
	
});