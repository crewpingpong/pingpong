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
        <div class="login-box customChk">
            <a href="index.html"><img src="/resources/images/logo_X1.png"></a>

            <form action="" method="get">
                <div class="login-input-email">
                    <p>이메일</p>
                    <input type="email" name="userEmail" required>
                </div>
    
                <div class="login-input-password">
                    <p>비밀번호</p>
                    <input type="password" name="userPassword" autocomplete="off" required> <br>
                    <p class="passwordwrong">* 가입되어 있지 않은 계정입니다.</p>
                </div>
    
                <button class="login-button" type="button">로그인</button>
    
                <div class="login-check">
                    <div>
                        <input type="checkbox" id="checkLogin">
                        <label for="checkLogin">
                            <span></span>
                            로그인 유지
                        </label>
                    </div>
                    <a href="pwSearch.html">비밀번호 찾기 ></a>
                </div>
    
                <div class="login-signUp">
                    <p>아직 PingPong 회원이 아니세요?</p>
                    <a href="signup.html">회원가입 하기</a>
                </div>
            </form>
        </div>
    </div>


    <script src="/resources/js/member/login.js"></script>
</body>
</html>