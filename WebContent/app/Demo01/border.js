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