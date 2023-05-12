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
</head>
<body>
	<div class="login-container customChk">

        <form class="signup-box" method="post" action="/member/signup">
            <a href="/"><img src="/resources/images/logo_X1.png"></a>
        
            <p>이메일로 가입하기</p>
    
            <div class="signup-input-email">
                <p>이메일 주소</p>
                <input type="email" name="memberEmail">
                <button type="button" class="certi-send">전송</button>
                <button type="button" class="certi-resend">재전송</button>
                <p class="email-send">인증 번호가 발송 되었습니다.</p>
            </div>
            <div class="signup-input-CertNum">
                <p>인증번호 입력</p>
                <input type="text">
                <button type="button">인증</button>
            </div> 
    
            <div class="signup-input-password">
                <p>비밀번호</p>
                <input type="password" placeholder="6자 이상" name="memberPw" autocomplete="off"> <br>
            </div>
    
            
            <div class="signup-password-check">
                <p>비밀번호 확인</p>
                <input type="password" placeholder="6자 이상"  autocomplete="off"> <br>
                <p class="pwInconsistency">두 비밀번호가 일치 하지 않습니다.</p>
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
                <button type="button" onclick="location.href='login.html'">이전</button>
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