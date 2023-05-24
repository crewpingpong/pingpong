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
        <div class="login-box customChk">
            <a href="/"><img src="/resources/images/logo_X1.png"></a>

            <form action="/member/login" method="post">
                <div class="login-input-email">
                    <p>이메일</p>
                    <input type="email" name="memberEmail" value="${cookie.saveId.value}" required>
                </div>
    
                <div class="login-input-password">
                    <p>비밀번호</p>
                    <input type="password" name="memberPw" autocomplete="off" required> <br>
                </div>
    
                <button class="login-button">로그인</button>
    
                <div class="login-check">
                    <div>
                        <c:if test="${ !empty cookie.saveId.value}">
                            <c:set var="chk" value="checked"/>
                        </c:if>
                        <input type="checkbox" id="saveId" name="saveId" ${chk}>
                        <label for="saveId"><span></span>아이디 저장</label>
                    </div>
                    <a href="/member/pwSearch">비밀번호 찾기</a>
                </div>
    
                <div class="login-signUp">
                    <p>아직 PingPong 회원이 아니세요?</p>
                    <a href="/member/signup">회원가입 하기</a>
                </div>
            </form>
        </div>
    </div>


    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
    <script src="/resources/js/member/login.js"></script>
</body>
</html>