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
</head>
<body>
	    <div class="login-container">
        <div class="login-box pwseachbox">
            <a href="index.html"><img src="/resources/images/logo_X1.png"></a>

            <p>비밀번호 찾기</p>
            <form action="" method="get">
                <div class="login-input-email">
                    <p>이메일</p>
                    <input type="email" name="serchEmail" required>
                    <p class="email-pw-reset">비밀번호 재설정을 위한 이메일이 발송 되었습니다.</p>
                </div>
    
    
                <button class="login-button email-reset-button" type="button">전송</button>
    

    
                <div class="login-signUp">
                    <p>비밀번호가 생각 나셨나요?</p>
                    <a href="login.html">로그인 하기</a>
                </div>
            </form>
        </div>
    </div>
    
	<script src="/resources/js/member/pwSearch.js"></script>
</body>
</html>