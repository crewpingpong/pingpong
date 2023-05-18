<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:if test="${not empty message}" >
    <script>
        // EL/JSTL 구문이 먼저 해석되는데
        // 문자열의 경우 따옴표가 없는 상태이니 붙여줘야한다
        alert("${message}");
        
    </script>
</c:if>