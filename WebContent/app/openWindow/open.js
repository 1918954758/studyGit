(function() {
	Ext.onReady(function(){    
	    Ext.create('Ext.Button', {
	    	text: 'click me',
	    	renderTo: Ext.getBody(),
	    	handler: function() {
	    		alert(basePath);
	    		window.open(basePath + "/app/openWindow/newOpen.jsp", "_blank", "scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");
	    		//alert(win);
	    	}
//	    	  window.open 弹出新窗口的命令； 
//			　　'page.html' 弹出窗口的文件名； 
//			　　'newwindow' 弹出窗口的名字（不是文件名），非必须，可用空''代替； 
//			　　height=100 窗口高度； 
//			　　width=400 窗口宽度； 
//			　　top=0 窗口距离屏幕上方的象素值； 
//			　　left=0 窗口距离屏幕左侧的象素值； 
//			　　toolbar=no 是否显示工具栏，yes为显示； 
//			　　menubar，scrollbars 表示菜单栏和滚动栏。 
//			　　resizable=no 是否允许改变窗口大小，yes为允许； 
//			　　location=no 是否显示地址栏，yes为允许； 
//			　　status=no 是否显示状态栏内的信息（通常是文件已经打开），yes为允许；
	    })
	}); 
	
})();