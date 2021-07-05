<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=utf8">
	<title>Insert title here</title>

	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext-4.2.1.883/resources/css/ext-all.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/bootstrap.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/locale/ext-lang-zh_CN.js"></script>
    
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/examples/shared/options-toolbar.js"></script>
    <!-- </x-bootstrap> -->
    <script type="text/javascript" src="<%=request.getContextPath()%>/app/openWindow/open.js"></script>
    
</head>
<body>
	<!-- <button id="zi" value="Show">°´Å¥</button> -->
	<script>
		var basePath = "<%=basePath%>";
		/* Ext.onReady(function(){
		    Ext.create('Ext.Button', {
		    	text: 'click me',
		    	renderTo: Ext.getBody(),
		    	handler: function() {
		    		alert(basePath);
		    		window.open(basePath + "/app/openWindow/newOpen.jsp", "_blank", "scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");
		    		//alert(win);
		    	}
		    })
		}) */
	</script>
</body>
</html>