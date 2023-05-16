<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

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
	<div class="login-container customChk">

        <form class="signup-box" method="post" action="/member/signup" name="signUpFrm" id="signUpFrm">
            <a href="/"><img src="/resources/images/logo_X1.png"></a>
        
            <p>이메일로 가입하기</p>
    
            <div class="signup-input-email">
                <p>이메일 주소</p>
                <input type="text" name="memberEmail" id="memberEmail" placeholder="Email" maxlength="30" autocomplete="off">
                <button type="button" class="certi-send" id="sendAuthKeyBtn">전송</button>
                <%-- <button type="button" class="certi-resend" id="reSendAuthKeyBtn">재전송</button> --%>
                <span class="email-message" id="emailMessage">메일을 받을 수 있는 이메일을 입력해주세요.</span>
                
            </div>

            <div class="signup-input-CertNum">
                <p>인증번호 입력</p>
                <input type="text" name="authKey" id="authKey" placeholder="인증번호 입력" maxlength="6" autocomplete="off">
                <button type="button" id="checkAuthKeyBtn">인증</button>
                <span class="email-message" id="authKeyMessage"></span>
            </div> 
    
            <div class="signup-input-password">
                <p>비밀번호</p>
                <input type="password" placeholder="8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호" name="memberPw" autocomplete="off" id="memberPw"> <br>
                <span class="pwInconsistency signUp-message" id="pwMessage1">
                    6글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호를 입력해 주세요.
                </span>
            </div>
    
            
            <div class="signup-password-check">
                <p>비밀번호 확인</p>
                <input type="password" placeholder="비밀번호 재입력"  autocomplete="off" id="memberPwConfirm"> <br>
                <span class="pwInconsistency signUp-message" id="pwMessage2"></span>
            </div>
            
            <div class="signup-check">
                <div>
                    <input type="checkbox" id="checkTerms">
                    <label for="checkTerms">
                        <span></span>
                        핑퐁 가입 약관에 모두 동의 합니다.
                    </label>
                </div>

                <a href="#" class="open-termsBtn">확인하기</a>
            </div>
    
            <div>
                <button type="button" onclick="history.back()">이전</button>
                <button class="signup-next">다음</button>
            </div>
        </form>
    
    
    
        <div class="signup-box termsbackground customChk">
            <div>
                <p>약관 확인하기</p>
    
                <div class="check-all">
                    <input type="checkbox" id="checkTermsAll">
                    <label for="checkTermsAll">
                        <p>전체 동의</p>
                    </label>
                </div>
    
                <div class="check-must1">        
                    <input type="checkbox" id="checkTerms1">
                    <label for="checkTerms1">
                        <span></span>
                        <a href="#">[필수] 통합 서비스 약관</a>
                    </label>
                </div>
    
                <div class="check-must2">
                    <input type="checkbox" id="checkTerms2">
                    <label for="checkTerms2">
                        <span></span>
                        <a href="#">[필수] 개인정보 수집 및 이용동의</a>
                    </label>
                </div>
    
                <div class="check-select">
                    <input type="checkbox" id="checkTerms3">
                    <label for="checkTerms3">
                        <span></span>
                        <a href="#">[선택] 마케팅 정보 수신</a>
                    </label>
                </div>
                
                <button class="close-signup-terms">확인 완료</button>
            </div>
        </div>
    </div>

	<script src="/resources/js/member/signup.js"></script>
</body>
</html>