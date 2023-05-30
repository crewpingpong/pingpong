<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>문제</title>
</head>
<body>
	<h1>게시글 조회 (제목으로 검색)</h1>
	<form action="selectBoard" method="get">
		<input type="text" name="title" required placeholder="게시글 제목 입력">
		<button>조회</button>
	</form>
</body>
</html>