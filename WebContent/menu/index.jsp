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