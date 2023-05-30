<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <h3>게시글 검색 결과</h3>

    <table border="1">
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
            <th>조회수</th>
            <th>작성날짜</th>
        </tr>

        <c:forEach items="${boardList}" var="b">
            <tr>
                <td>${b.boardNo}</td>
                <td>${b.boardTitle}</td>
                <td>${b.userId}</td>
                <td>${b.boardContent}</td>
                <td>${b.boardReadCount}</td>
                <td>${b.boardDate}</td>
            </tr>
        </c:forEach>
    </table>

</body>
</html>