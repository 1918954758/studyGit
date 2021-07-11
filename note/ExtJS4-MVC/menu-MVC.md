# 一、定义一个viewport组件
## 1. 自定义的视图组件，继承 Ext.container.Viewport，且采用的布局是border
## 2. border布局的中间部分（region: 'center'）为tabpanel
## 3. border布局的左边部分（region: 'west'）里面放着的是树形面板（xtype: 'menutree', menutree继承treepanel， 下一步介绍menutree）
```js
Ext.define('menu.view.Viewport', {
	extend: 'Ext.container.Viewport',
	//布局方式
	layout: 'border',
	alias: 'widget.viewport',
	items: [{
		title: 'ExtJS案例',
		collapisble: true,
		region: 'north',
		height: 100,
		html: '<br><center><font size=5>MVC模式，实现ExtJS案例</font><br><font size=2>原码来源：ITLee博客</font></center>'
	}, {
		title: '功能菜单',
		region: 'west',
		split: true,
		collapisble: true,
		items: [{
			xtype: 'menutree'
		}]
	}, {
		region: 'center',
		id: 'mainContent',
		xtype: 'tabpanel',
		layout: 'fit',
		collapisble: true
	}]
})
```

# 二、定义一个treepanel组件
## 1. 自定义的MenuTree菜单组件，该组件继承treepanel
## 2. store: 'MenuStore'指定了菜单面板数据集，下一步会定义 这个 MenuStore 数据集
```js
Ext.define('menu.view.MenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.menutree',
	border: false,
	//规定锚链接地址的显示区域
	hrefTarget: 'mainContent',
	//是否显示根节点
	rootVisible: false,
	//数据集
	store: 'MenuStore'
})
```

# 三、定义一个store组件（数据集）
## 1. 定义的store组件，继承 Ext.data.TreeStore
## 2. 配置 autoLoad: true， 以便自动加载数据
## 3. 配置 proxy 加载远程数据， 请求地址为 data/data.json, 下一步就创建这个文件
```js
Ext.define('menu.store.MenuStore', {
	extend: 'Ext.data.TreeStore',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'menu/data/data.json',
		reader: {
			type: 'json',
			root: 'children'
		}
	}
})
```

# 四、定义 json 数据 用于创建 树型结构

# 五、定义 Main控制器，用于管理这些对象
## 1. 将之前步骤中的组件注册到Main控制器中
## 2. 在Main控制器中，给这些组件添加相应的监听器以及方法
```js
Ext.define('menu.controller.Main', {
	extend: 'Ext.app.Controller',
	//将view视图添加到控制器
	views: ['Viewport', 'MenuTree'],
	//将数据集添加到控制器
	stores: ['MenuStore'],
	
	//初始化方法，在launch函数之前执行
	init: function() {
		this.control({
			'menutree': {
				itemdblclick: this.changePage
			}
		});
	},
	
	//changePage 方法
	changePage: function(view, rec, item, index, e) {
		var title = rec.get('text');
		var leaf = rec.get('leaf');
		var tabPanel = Ext.getCmp('mainContent');
		//子节点才能打开，父节点不设置响应
		if (leaf == false) {
			return;
		}
		//以title值设置tab的id，打开时，就有 使tab active，无则新建tab
		var newTab = tabPanel.getChildByElement(tilte);
		if (newTab == null) {
			tabPanel.add({
				id: title,
				title: title,
				html: '当前页面是 ' + title + '<br/><br/>',
				closable: true
			});
		}
		tabPanel.setActiveTab(title);
	}
})
```

# 六、创建app.js文件
## 1. 将Main控制器注册到应用程序中
## 2. autoCreateViewport: true 自动创建 定义的viewport组件
```js
Ext.application({
	name: 'menu',
	appFolder: 'menu/app',
	/*launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				xtype: 'viewport'
			}, {
				xtype: 'menutree'
			}]
		})
	},*/
	controllers: ['Main'],
	autoCreateViewport: true
})
```

# 七、创建index.jsp
```js
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/menu/ext-4.0/resources/css/ext-all.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/menu/ext-4.0/ext-all-debug.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/menu/app.js"></script>
</head>
<body>
	<%-- <button id="zi" value="Show" onclick="threeFn()">按钮</button>
	<script type="text/javascript">
		function threeFn() {
			var a = '<%=request.getContextPath()%>';
			alert('a'+a);
		}
	</script> --%>
</body>
</html>
```
