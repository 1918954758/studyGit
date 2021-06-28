Ext.onReady(function(){    
    var panel = new Ext.Panel({   
       renderTo: Ext.getBody(),   
       //title:'容器组件',   
       layout:'table',
       width:1000,   
       height:500,   
       //layoutConfig:{columns: 2},//将父容器分成3列   
       items:[
    	   {
    		   //title:'元素1',
    		   html:'a',
    		   rowspan: 1,
    		   colspan: 1,
    		   width: 500,
    		   height: 500,
    		   layout: 'column',
    		   items: [
    			   {
    				   width: 500,    
        			   height: 250,     
        			   title: "上",
        			   items: [gridPanel_11]
    			   },{
    				   width: 500,    
        			   height: 250,     
        			   title: "下",
        			   items: [gridChart_21]
    			   }]
    	   }, {
    		   //title:'元素2',
    		   html:'b',
    		   rowspan: 1,
    		   colspan: 1,
    		   width: 500,
    		   height: 500,
    		   layout: 'column',
    		   items: [
    			   {
    				   width: 500,    
        			   height: 250,    
        			   title: "上",
        			   items: [gridChart_12]
    			   },{
    				   width: 500,    
        			   height: 250,    
        			   title: "下",
        			   items: [gridChart_22]
    			   }]
    	   }]   
      }); 
    
    //左上角展示内容
    var gridPanel_11 = Ext.create('Ext.grid.Panel', {
    	width: '100%',
    	height: '100%',
    	viewConfig: {
    		loadingText: '查询中...'
    	},
    	store: myStore,
    	sortableColumns: false,
    	enableColumnMove: false,
    	enableColumnHide: false,
    	disableSelection: true,
    	columns: [
    		{
    			text: '序号', dataIndex: 'nbr', sortable: true, hidden: true, width: 0
    		},
    		{
    			text: '存量债券余额', dataIndex: 'merg_type', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '上市公司代码', dataIndex: 'pty_name', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '上市公司简称', dataIndex: 'lxcb_days', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '第几名股东', dataIndex: 'ljcb_days', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '业务渠道', dataIndex: 'indc_value', align: 'center', sortable: false, width: '20%'
    		}
    	],
    	forceFit: false,
    	bbar: Ext.create('Ext.PagingToolbar', {
    		id: 'tool',
    		store: myStore,
    		displayInfo: true,
//    		plugins: new Ext.ux.PageSize({
//    			params: {
//    				
//    			}
//    		}),
    		displayMsg: '显示第{0} - {1} 条，总共 {2} 条',
    		emptyMsg: '没有数据'
    	})
    });
    //左下角展示内容
    var gridChart_21 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //动画效果
    	store: store,
    	//配置轴
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//业务渠道
    		title: '指标值-a',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store中
    		title: '月份'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    //右上角展示内容
    var gridChart_12 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //动画效果
    	store: store,
    	//配置轴
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//业务渠道
    		title: '指标值-b',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store中
    		title: '月份'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    //右下角展示内容
	var gridChart_22 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //动画效果
    	store: store,
    	//配置轴
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//业务渠道
    		title: '指标值-c',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store中
    		title: '月份'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    
    //View
    var viewport = Ext.create('Ext.Viewport', {
    	autoScroll: false,
    	layout: {
    		type: 'border',
    		padding: '0 1 0 1'
    	},
    	items: [panel]
    });
    
    //store
    var store = Ext.create('Ext.data.Store', {
    	fields: ['data_month', 'indc_value'],
    	proxy: {
    		type: 'ajax',
    		timeout: 300000,
    		url: '',
    		reader: {
    			type: 'json',
    			root: 'datas'
    		},
    		actionMethods: {
    			read: 'POST'
    		},
    		extraParams: {
    			'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
    			'indexValue': '', //Ext.getCmp('indexValue').getRawValue(),
    			'contentValue': '' //Ext.getCmp('contentValue').getRawValue(),
    		},
    		writer: {
    			type: 'json'
    		}
    	},
    	autoLoad: true,
    	listeners: {
    		beforeLoad: function(store) {
    			msgTip = new Ext.LoadMask(gridChart.getEl(), {
    				msg: '查询中...'
    			});
    			msgTip.show();
    			var params = {
    					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
    	    			'indexValue': '', //Ext.getCmp('indexValue').getRawValue(),
    	    			'contentValue': '' //Ext.getCmp('contentValue').getRawValue(),
    			};
    			Ext.apply(store.proxy.extraParams, params);
    		},
    		load: function(store, records, successful, operation, opts) {
    			if (successful) {
    				
    			} else {
    				Ext.MessageBox.alert('提示', '数据加载失败！');
    			}
    			msgTip.hide();
    		}
    	}
    });
    
    //myStore
    var myStore = Ext.create('Ext.data.Store', {
    	model: 'FinEntityMonVO',
    	pageSize: 25,
    	autoLoad: true,
    	proxy: {
    		type: 'ajax',
    		timeout: 300000,
    		url: '',
    		reader: {
    			type: 'json',
    			root: 'datas',
    			totalProperty: 'totalSize'
    		},
    		actionMethods: {
    			read: 'POST'
    		},
    		extraParams: {
    			'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
    			'zbCheckValue': '', //Ext.getCmp('indexValue').getRawValue(),
    			'textValue': '' //Ext.getCmp('contentValue').getRawValue(),
    		},
    		writer: {
    			type: 'json'
    		}
    	},
    	listeners: {
    		beforeLoad: function(store) {
    			var params = {
					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
	    			'zbCheckValue': '1, 1, 1', //Ext.getCmp('indexValue').getRawValue(),
	    			'textValue': '' //Ext.getCmp('contentValue').getRawValue(),
    			};
    			Ext.apply(store.proxy.extraParams, params);
    		},
    		load: function(store, records, successful, operation, opts) {
    			if (successful) {
    				
    			} else {
    				Ext.MessageBox.alert('提示', '数据加载失败！');
    			}
    		}
    	}
    });
}); 