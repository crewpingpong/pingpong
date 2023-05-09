<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>
    <link rel="stylesheet" href="/resources/css/style.css"> <!-- 메인 헤더, 네브 css -->
    <link rel="stylesheet" href="/resources/css/personal/myPageModi.css">
</head>
<body>

	<jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <!-- 내 정보 수정 Tab Menu -->

    <div class="myPage-content-container">

        <div class="myPage-left-side-menu-group"> 
            <div class="myPage-left-side-menu">   
                <ul>                             
                    <li class="myPage_modi_is_on">        
                        <a href="#myPageModiTab1">내 정보 편집</a> 
                    </li>
                    <li>                          
                        <a href="#myPageModiTab2">프로필 편집</a>  
                    </li>
                    <li>                          
                        <a href="#myPageModiTab3">비밀번호 변경</a>  
                    </li>
                    <li>                          
                        <a href="#myPageModiTab4">문의 내역</a>  
                    </li>
                </ul>
            </div>
        </div>

        <div class="myPage-content-main-area"> 

            <!-- *** 내 정보 편집 *** -->
            <div id="myPageModiTab1" class="myPage-content-main">
                <form name="" action="" method="">
                    <div class="myIfo-modi">

                        <!-- 프로필 사진 -->
                        <div class="profile-change-area"> 
                            <span class="profile-picture removeBGC" id="profile-picture">
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3636 23.405C27.0118 23.405 28.6229 22.9162 29.9934 22.0005C31.3638 21.0849 32.4319 19.7834 33.0626 18.2606C33.6933 16.7379 33.8584 15.0624 33.5368 13.4459C33.2153 11.8294 32.4216 10.3445 31.2562 9.17906C30.0907 8.01362 28.6059 7.21995 26.9894 6.89841C25.3729 6.57686 23.6973 6.74189 22.1746 7.37262C20.6519 8.00335 19.3504 9.07146 18.4347 10.4419C17.519 11.8123 17.0303 13.4234 17.0303 15.0716C17.0303 17.2818 17.9082 19.4014 19.471 20.9642C21.0339 22.527 23.1535 23.405 25.3636 23.405ZM25.3636 10.905C26.1877 10.905 26.9933 11.1493 27.6785 11.6072C28.3637 12.065 28.8977 12.7157 29.2131 13.4771C29.5285 14.2385 29.611 15.0762 29.4502 15.8845C29.2894 16.6927 28.8926 17.4352 28.3099 18.0179C27.7272 18.6006 26.9847 18.9975 26.1765 19.1582C25.3682 19.319 24.5305 19.2365 23.7691 18.9211C23.0077 18.6058 22.357 18.0717 21.8992 17.3865C21.4413 16.7013 21.1969 15.8957 21.1969 15.0716C21.1969 13.9665 21.6359 12.9067 22.4173 12.1253C23.1987 11.3439 24.2585 10.905 25.3636 10.905Z" fill="#231F20"/>
                                    <path d="M25.3636 27.5723C21.4959 27.5723 17.7865 29.1087 15.0516 31.8436C12.3167 34.5785 10.7803 38.2879 10.7803 42.1556C10.7803 42.7081 10.9998 43.238 11.3905 43.6287C11.7812 44.0194 12.3111 44.2389 12.8636 44.2389C13.4161 44.2389 13.946 44.0194 14.3367 43.6287C14.7274 43.238 14.9469 42.7081 14.9469 42.1556C14.9469 39.3929 16.0444 36.7434 17.9979 34.7899C19.9514 32.8364 22.6009 31.7389 25.3636 31.7389C28.1263 31.7389 30.7758 32.8364 32.7293 34.7899C34.6828 36.7434 35.7803 39.3929 35.7803 42.1556C35.7803 42.7081 35.9998 43.238 36.3905 43.6287C36.7812 44.0194 37.3111 44.2389 37.8636 44.2389C38.4161 44.2389 38.946 44.0194 39.3367 43.6287C39.7274 43.238 39.9469 42.7081 39.9469 42.1556C39.9469 38.2879 38.4105 34.5785 35.6756 31.8436C32.9407 29.1087 29.2313 27.5723 25.3636 27.5723Z" fill="#231F20"/>
                                </svg>
                            </span>
                            <div class="edit-profile-picture">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="50" height="50" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlink:href="#image0_814_339" transform="scale(0.00195312)"/>
                                        </pattern>
                                        <image id="image0_814_339" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                프로필 사진 편집
                            </div>
                            <form action="/upload" method="post" enctype="multipart/form-data">
                                <div>
                                    <label for="file"></label>
                                    <input type="file" class="profileUpload" accept="image/*" required multiple>
                                </div>
                            </form>
                        </div>
                        
                        <!-- 사용자 이름 -->
                        <div class="userName-change"> 
                            <p>사용자 이름</p>
                            <input type="text" maxlength="40" placeholder="사용자 이름을 입력해주세요.">
                        </div>

                        <!-- url -->
                        <div class="URL-change">
                            <p>PingPong URL(영문)</p>
                            <div>
                                <p>pingpong.net/</p>
                                <input type="text" name="userurl" required> <br>
                            </div>
                            <button class="url-double-check" type="button">중복 확인</button>
                        </div>

                        <!-- 관심분야 변경 -->
                        <div class="interest-field-container">
                            <p>작업 & 관심 분야(선택)</p>
                            <div class="interest-field">
                                <div>
                                    <label for=""><input type="checkbox" value="AI/로봇" name="interest"> AI/로봇</label>
                                    <label for=""><input type="checkbox" value="IT/SW" name="interest"> IT/SW</label> 
                                    <label for=""><input type="checkbox" value="게임" name="interest"> 게임</label> 
                                    <label for=""><input type="checkbox" value="공학" name="interest"> 공학</label>
                                    <label for=""><input type="checkbox" value="교육" name="interest"> 교육</label> 
                                    <label for=""><input type="checkbox" value="마케팅" name="interest"> 마케팅</label> 
                                    <label for=""><input type="checkbox" value="금융" name="interest"> 금융</label> 
                                </div>
                                <div>
                                    <label for=""><input type="checkbox" value="동물" name="interest"> 동물</label>
                                    <label for=""><input type="checkbox" value="디자인" name="interest"> 디자인</label> 
                                    <label for=""><input type="checkbox" value="미용/패션" name="interest"> 미용/패션</label> 
                                    <label for=""><input type="checkbox" value="방송" name="interest"> 방송</label> 
                                    <label for=""><input type="checkbox" value="법/수사" name="interest"> 법/수사</label> 
                                    <label for=""><input type="checkbox" value="사회복지" name="interest"> 사회복지</label> 
                                    <label for=""><input type="checkbox" value="스포츠" name="interest"> 스포츠</label> 
                                </div> 
                                <div>
                                    <label for=""><input type="checkbox" value="여행" name="interest"> 여행</label> 
                                    <label for=""><input type="checkbox" value="책/영화/드라마" name="interest"> 책/영화/드라마</label> 
                                    <label for=""><input type="checkbox" value="우주/항공" name="interest"> 우주/항공</label> 
                                    <label for=""><input type="checkbox" value="음식" name="interest"> 음식</label> 
                                    <label for=""><input type="checkbox" value="음악" name="interest"> 음악</label> 
                                    <label for=""><input type="checkbox" value="의료/바이오" name="interest"> 의료/바이오</label> 
                                    <label for=""><input type="checkbox" value="환경/생태" name="interest"> 환경/생태</label> 
                                </div>                                
                            </div>
                        </div>
                    </div>

                    <div class="myPage-save">
                        <button>편집 완료</button>
                        <button>취소</button>
                    </div>
                </form>
            </div>   


            <!-- *** 프로필 편집 *** -->
            <div id="myPageModiTab2" class="myPage-content-main">
                <form name="" action="" method="">
                    <div class="profile-modi">

                        <!-- 소개 -->
                        <div class="introduce-change"> 
                            <p>소개</p>
                            <input type="text" maxlength="40" placeholder="자기 소개를 입력해주세요.">
                        </div>

                        <!-- 커리어 -->
                        <div class="career-change"> 
                            <p>커리어</p>
                            <input type="text" maxlength="40" placeholder="경력 / 수상 내역을 입력해주세요.">
                        </div>

                        <!-- 자격증 -->
                        <div class="certificate-change"> 
                            <p>자격증</p>
                            <input type="text" maxlength="40" placeholder="보유중인 자격증을 입력해주세요.">
                        </div>                        

                        <!-- 지식 / 기술 -->
                        <div class="tech-field-container">
                            <p>지식 / 기술</p>
                            <div class="tech-field">
                                <div>
                                    <label for=""><input type="checkbox" value="Java" name="tech"> 자바</label>
                                    <label for=""><input type="checkbox" value="Python" name="tech"> 파이썬</label> 
                                    <label for=""><input type="checkbox" value="C" name="tech"> C언어</label> 
                                    <label for=""><input type="checkbox" value="SQL" name="tech"> SQL</label>
                                    <label for=""><input type="checkbox" value="HTML" name="tech"> HTML</label> 
                                </div>
                                <div>
                                    <label for=""><input type="checkbox" value="CSS" name="tech"> CSS</label> 
                                    <label for=""><input type="checkbox" value="JavaScript" name="tech"> JavaScript</label> 
                                    <label for=""><input type="checkbox" value="Unity" name="tech"> Unity</label>
                                    <label for=""><input type="checkbox" value="chatGPT" name="tech"> chat GPT</label> 
                                    <label for=""><input type="checkbox" value="Exel" name="tech"> 엑셀</label> 
                                </div> 
                                <div>
                                    <label for=""><input type="checkbox" value="Access" name="tech"> 엑세스</label> 
                                    <label for=""><input type="checkbox" value="PPT" name="tech"> 파워포인트</label> 
                                    <label for=""><input type="checkbox" value="Word" name="tech"> 워드</label> 
                                    <label for=""><input type="checkbox" value="한글" name="tech"> 한글</label> 
                                    <label for=""><input type="checkbox" value="Cubase" name="tech"> 큐베이스</label> 
                                </div> 
                                <div>  
                                    <label for=""><input type="checkbox" value="Vegas" name="tech"> 베가스</label> 
                                    <label for=""><input type="checkbox" value="포토샵" name="tech"> 포토샵</label> 
                                    <label for=""><input type="checkbox" value="일러스트" name="tech"> 일러스트</label> 
                                    <label for=""><input type="checkbox" value="인디자인" name="tech"> 인디자인</label> 
                                    <label for=""><input type="checkbox" value="그래픽 디자인" name="tech"> 그래픽 디자인</label> 
                                </div>                                
                            </div>
                        </div>

                        <!-- SNS -->
                        <div class="SNS-container">
                            <p>SNS</p>
                            <div class="SNS-field">
                                <div>
                                    <label for=""><input type="checkbox"> 인스타그램</label>
                                    <input type="text" value="www." name="SNS">
                                </div>           
                                <div>
                                    <label for=""><input type="checkbox"> 페이스북</label>
                                    <input type="text" value="www." name="SNS"> 
                                </div>
                                <div>
                                    <label for=""><input type="checkbox"> 트위터</label> 
                                    <input type="text" value="www." name="SNS">
                                </div>                  
                                <div>
                                    <label for=""><input type="checkbox"> 깃허브</label>
                                    <input type="text" value="www." name="SNS">
                                </div>
                                <div>
                                    <label for=""><input type="checkbox"> 노션</label> 
                                    <input type="text" value="www." name="SNS">
                                </div>
                                <div>
                                    <label for=""><input type="checkbox"> 네이버 블로그</label>
                                    <input type="text" value="www." name="SNS"> 
                                </div>
                            </div>
                        </div>

                        <div class="myPage-save">
                            <button>편집 완료</button>
                            <button> <a href="#">취소</a> </button>
                        </div>
                    </div>
                </form>
            </div>   


            <!-- *** 비밀번호 변경 화면 구현 & 회원 탈퇴 *** -->
            <div id="myPageModiTab3" class="myPage-content-main">
                <form name="" action="" method="">
                    <div class="password-modi">

                        <p>비밀번호 변경</p>

                        <!-- 현재 비밀번호 -->
                        <div class="current-password"> 
                            <p>현재 비밀번호</p>
                            <input type="password" minlength="6" placeholder="6자 이상">
                        </div>

                        <!-- 새 비밀번호 -->
                        <div class="new-password"> 
                            <p>새 비밀번호</p>
                            <input type="password" minlength="6" placeholder="6자 이상">
                        </div>

                        <!-- 새 비밀번호 확인 -->
                        <div class="new-password-check"> 
                            <p>새 비밀번호 확인</p>
                            <input type="password" minlength="6" placeholder="6자 이상" autocomplete="off" required>
                            <button class="password-change" type="button">비밀번호 변경</button>
                        </div> 
                    </div>     
                </form>

                <form name="" action="" method=""> 
                    <div class="secession">       
                        <p>회원 탈퇴</p>
                        
                        <!-- 현재 비밀번호 -->
                        <div class="password-for-secession"> 
                            <p>현재 비밀번호</p>
                            <input type="password" minlength="6" placeholder="6자 이상">
                        </div>
                        
                        <!-- 회원 탈퇴 약관 -->
                        <div class="terms-for-secession"> 
                            <p>회원 탈퇴 약관</p>
                            <textarea name="" class="terms-content" cols="30" rows="10">
제1조 이 약관은 샘플 약관입니다. 
① 약관 내용 1 ② 약관 내용 2 ③ 약관 내용 3 ④ 약관 내용 4 제2조 
이 약관은 샘플 약관입니다. 
① 약관 내용 1 ② 약관 내용 2 ③ 약관 내용 3 ④ 약관 내용 4
                            </textarea>
                            <div class="termsCheckBox"><input type="checkbox">회원 탈퇴 약관에 동의합니다.</div>
                            <button class="secessionBtn" type="button">회원 탈퇴</button>
                        </div>
                    </div>
                </form>
            </div> 
            
            
            <!-- *** 문의 내역 화면 구현 *** -->
            <div id="myPageModiTab4" class="myPage-content-main">
                <form name="" action="" method="">
                    <div class="inquiry-area">
                        <p>문의 내역</p> 
                        <div>
                            안녕하세요. 문의 드려요. 어쩌구 저쩌구 문제가 생겨서요....
                            <div class="inquiry-date">2023년 5월 4일</div> 
                        </div>
                        <div>
                            안녕하세요. 문의 드려요. 어쩌구 저쩌구 문제가 생겨서요....
                            <div class="inquiry-date">2023년 5월 9일</div> 
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    </div>

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/personal/myPageModi.js"></script> <!-- 게시글 상세 -->
</body>
</html>