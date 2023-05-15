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
        <form class="signup-info-box" method="post" action="/member/signupInfo" name="signupInfoFrm" id="signupInfoFrm">
            <a href="/"><img src="/resources/images/logo_X1.png"></a>
    
            <p>회원 정보 입력하기</p>
    
            <div class="signup-info-member-name">
                <p>사용자 이름(닉네임)</p>
                <input type="text" placeholder="닉네임을 입력해주세요." name="memberNickname" required>
            </div>
    
            <div class="signup-info-memberURL">
                <p>PingPong URL(영문)</p>
                <div>
                    <p>pingpong.net/</p>
                    <input type="text" name="memberUrl" id="memberUrl" placeholder="영어, 숫자, - 로만 이루어진 3 ~ 16 글자의 URL" required> <br>
                </div>
                <span class="URL-check-message " id="URLCheckMessage"></span>
            </div>
    
            <div class="job-checkbox-container">
                <p>작업 & 관심 분야(선택)</p>
                <div class="job-checkbox">
                    <div>

                        <label for=""><input type="checkbox"> 그래픽 디자인</label>
                        <label for=""><input type="checkbox"> 영상/모션그래픽</label> 
                        <label for=""><input type="checkbox"> 캐릭터 디자인</label> 
                        <label for=""><input type="checkbox"> 디자인 아트</label> 
                        <label for=""><input type="checkbox"> 일러스트레이션</label> 
                        <label for=""><input type="checkbox"> 파인아트</label> 
                    </div>
                    <div>
                        <label for=""><input type="checkbox"> 브랜딩/편집</label> 
                        <label for=""><input type="checkbox"> UI/UX</label> 
                        <label for=""><input type="checkbox"> 제품/패키지 디자인</label> 
                        <label for=""><input type="checkbox"> 타이포그래피</label> 
                        <label for=""><input type="checkbox"> 포토그래피</label> 
                        <label for=""><input type="checkbox"> 공예</label> 
                    </div>
                </div>
            </div>
    
            <button>완료</button>
    
        </form>
    </div>
    
	<script src="/resources/js/member/signup.js"></script>
</body>
</html>