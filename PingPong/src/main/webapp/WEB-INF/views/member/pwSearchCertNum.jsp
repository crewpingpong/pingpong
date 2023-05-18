<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>
    <link rel="stylesheet" href="/resources/css/style.css">
    <link rel="stylesheet" href="/resources/css/member/loginSignup.css">
    <link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
    
</head>
<body>
	<div class="login-container">
        <div class="login-box pwseachbox">
            <a href="/"><img src="/resources/images/logo_X1.png"></a>
            <p>인증키를 인증해 주세요.</p>

            <form action="/member/pwSearchCertNum" method="POST" id="pwSearchCertNumFrm">
                <div class="search-input-email input-CertNum">
                    <input type="text" name="authKey" id="authKey" placeholder="인증키 입력" 
                    maxlength="7" autocomplete="off" required>
                    <button type="button" class="click-btn" id="sendAuthKeyBtn">인증키 받기</button>
                    <input type="hidden" name="checkCertNum" value="false" id="checkCertNum">
                </div>
                <button type="button" class="login-button email-reset-button" id="checkAuthKeyBtn">인증키 입력</button><%-- 인증 && 다음 --%>
            </form>
            
            <div class="login-signUp">
                <p>비밀번호가 생각 나셨나요?</p>
                <a href="/member/login">로그인 하기</a>
            </div>
        </div>
    </div>

    <script>
        const memberEmail = "${memberEmail}";
        console.log("pwSearchCertNum : " + memberEmail);
    </script>

    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	<script src="/resources/js/member/pwSearchCertNum.js"></script>
</body>
</html>