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
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext-4.2.1.883/resources/ext-theme-classic/ext-theme-classic-all.css">
	<script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/ext-all-dev.js"></script>
	
	<script type="text/javascript">
		Ext.onReady(function() {
			Ext.create('Ext.panel.Panel', {
				renderTo: 'helloWorldPanel',
				height: 200,
				width: 600,
				title: 'Hello World',
				html: 'First Ext JS Hello World Program'
			})
		})
	</script>
</head>
<body>
	<div id="helloWorldPanel"></div>
</body>
</html>