<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<html>
<head>

	<title>Home</title>
	<link href="<c:url value="/resources/reset.css"/>" rel="stylesheet">
	<link href="<c:url value="/resources/structure.css"/>" rel="stylesheet">

</head>
<body>
<form class="box login">
	<fieldset class="boxBody">
	  <label>Username</label>
	  <input type="text" tabindex="1" placeholder="PremiumPixel" required>
	  <label><a href="#" class="rLink" tabindex="5">Forget your password?</a>Password</label>
	  <input type="password" tabindex="2" required>
	</fieldset>
	<footer>
	  <label><input type="checkbox" tabindex="3">Keep me logged in</label>
	  <input type="submit" class="btnLogin" value="Login" tabindex="4">
	</footer>
</form>
<P>  The time on the server is ${serverTime}. </P>
</body>
</html>
