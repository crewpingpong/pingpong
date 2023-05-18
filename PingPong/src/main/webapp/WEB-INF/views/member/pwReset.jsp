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

            <p>변경하실 비밀번호를 입력해 주세요.</p>

            <form action="/member/pwReset" method="POST" id="pwReset">
                <div class="signup-input-password">
                    <p class="reset-pw-text">비밀번호</p>
                    <input type="password" placeholder="8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호" name="newMemberPw" autocomplete="off" id="newMemberPw"> <br>
                    <span class="pwInconsistency signUp-message" id="pwMessage1">
                        8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호를 입력해 주세요.
                    </span>
                </div>
    
            
                <div class="signup-password-check">
                    <p class="reset-pw-text">비밀번호 확인</p>
                    <input type="password" placeholder="비밀번호 재입력"  autocomplete="off" id="newMemberPwConfirm"> <br>
                    <span class="pwInconsistency signUp-message" id="pwMessage2"></span>
                </div>
                <button class="login-button email-reset-button" id="pwResetBtn">완료</button><%-- 변경 비밀번호 제출 --%>
            </form>

            <div class="login-signUp">
                <p>비밀번호가 생각 나셨나요?</p>
                <a href="/member/login">로그인 하기</a>
            </div>
        </div>
    </div>
    
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
	<script src="/resources/js/member/pwReset.js"></script>
</body>
</html>