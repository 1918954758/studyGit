## 1. Ext的事件机制:
- 和事件相关的类
	- Ext.util.Observable
	- Ext.lib.Event
	- Ext.EventManager
	- Ext.EventObject
- 以下两个方法，在DOM加载完毕执行，保证页面内所有元素都能被script所引用
	- Ext.application(); 
	- Ext.onReady();
- 根据ID获取页面上的元素：
	- Ext.get('myDiv');
- 获取页面上标签p集合
	- var ps = Ext.select('p');
	- 使用ps.each(function(el){el.highlight();});进行遍历每一个p标签
	- 或者
	- Ext.select('p').highlight();
```js
Ext.application({
	name: 'demo01',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				title: 'Hello ExtJS',
				html: 'Welcome to ExtJS'
			}]
		});
	}
});
Ext.onReady(function() {
	alert('onReady()')
	//给按钮添加点击事件
	/*Ext.get('myButton').on('click', function() {
		alert('You clicked the button!');
	})*/
	//给一组标签添加点击事件
	/*Ext.select('p').on('click', function() {
		alert('You clicked a paragraph!');
	})*/
});
```

- Ext使用Ext.lib.Event、Ext.EventManager和Ext.EventObject对原生浏览器事件进行了封装，最后给我们用的是一套统一的跨浏览器的通用事件接口

#### 1. Ext.util.Observable



## 2. 











## 3. 布局

#### 1. ExtJS 布局
- Fit布局
	- Fit布局中，子元素自动填充整个父容器。
	- 在Fit布局下，对子元素设置宽度是无效的
	- 在Fit不居中放置了多个组件，则只会显示第一个子元素
	- 案例：一个Window或panel中放置一个GRID组件，grid组件的大小会随着父容器的改变而改变。
```js
Ext.application({
	name: 'mmm',
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				title: 'Hello ExtJS',
				html: 'Welcome to ExtJS'
			}]
		});
	}
});
```

[ExtJS框架基础：事件模型及其常用功能
](https://www.cnblogs.com/willick/p/3169881.html)

#### 2. Border 布局
- Border 布局
	- 也成边界布局，将页面分成east,west,north,south,center 这五个部分，我们需要在器items中指定使用region参数为其子元素指定具体位置。
	- south和north智能设置高度(height)
	- west和east只能设置宽度(width)
	- north、south、west、east区域变大，center区域就会变小
	- 参数split:true可以调整，除了center之外的四个区域
	- 参数collapsible:true将激活折叠功能，title必须设置，因为折叠需要出现标题
	- center区域是必须使用的，而且center不允许折叠
	- center区域会自动填充到其他区域的剩余空间
```js
Ext.onReady(function() {
	var viewport = new Ext.Viewport({
        layout: 'border',//表示使用BorderLayout的布局方式，边界布局，页面分成东西南北中5部分
        items: [{
            region: 'north',//指定组建具体位置，上方
            height: 40,
            html:'<h1>顶栏</h1><br/><br/>'
        }, {
            region: 'west',//左方
            width: 80,
            html: '<p>菜单1</p><p>菜单2</p>'
        }, {
            region: 'center',
            html: '显示内容'
        }]
    });
});
```
![image-border布局](../image/border布局.png)

#### 3. Accordion布局
- Accordion布局
	- 也称手风琴布局，在accordion布局下，任何时间里，只有一个面板处于激活状态，其中每个面边都支持展开和折叠。
```js
Ext.application({
	name: 'hello-accordion',
	launch: function() {
		Ext.create('Ext.panel.Panel', {
		    title: 'Accordion Layout',
		    width: 300,
		    height: 300,
		    defaults: {
		        // applied to each contained panel
		        bodyStyle: 'padding:15px'
		    },
		    layout: {
		        // layout-specific configs go here
		        type: 'accordion',
		        titleCollapse: false,
		        animate: true,
		        activeOnTop: true
		    },
		    items: [{
		        title: 'Panel 1',
		        html: 'Panel content!'
		    },{
		        title: 'Panel 2',
		        html: 'Panel content!'
		    },{
		        title: 'Panel 3',
		        html: 'Panel content!'
		    }],
		    renderTo: Ext.getBody()
		});
	}
});
```

![image-accordion布局](../image/accordion布局.png)

#### 4. card 布局
```js
Ext.onReady(function() {
	var panel = Ext.create('Ext.Window', {
		autoShow: true,
		title: 'window',
		width: 420,
		height: 400,
		layout: 'card',
		activeItem: 0,
		bbar: [
			'->',
			{
				id: 'card-prev',
				text: '«上一页',
				handler: function() {
					navigate('prev')
				}
			},
			{
				id: 'card-next',
				text: '下一页»',
				handler: function() {
					navigate('next')
				}
			}
		],
		items: [{
			id: 'card1',
			html: '第一页'
		}, {
			id: 'card2',
			html: '第二页'
		}, {
			id: 'card3',
			html: '第三页'
		}]
	});

	function navigate(direction) {
		var layout = panel.getLayout();
		if(!(direction === 'prev' && layout.layoutCount === 1)) {
			layout[direction]();
			Ext.getCmp('card-prev').setDisabled(!layout.getPrev());
			Ext.getCmp('card-next').setDisabled(!layout.getNext());
		}
	};
});
```
![image-card布局](../image/card布局.png)






















































