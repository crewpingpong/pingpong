<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>PingPong</title>

    <%-- <link rel="stylesheet" href="/resources/css/style.css"> <!-- 메인 헤더, 네브 css --> --%>
    <link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
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
                <form name="myPageFrm" id="updateInfo" action="/mypage/myPageModi" method="POST" enctype= multipart/form-data>
                    <div class="myInfo-modi">

                        <!-- 프로필 사진 -->
                        <div class="profile-change-area"> 
                            <span class="profile-picture removeBGC" id="profile-picture">

                                <%-- 프로필 이미지가 없으면 기본 이미지 --%>
                                <c:if test="${empty mypage.profileImage}" >
                                    <img src="/resources/images/pingpong.ico" id="profileImage">
                                </c:if>

                                <%-- 프로필 이미지가 있으면 프로필 이미지 --%>
                                <c:if test="${not empty mypage.profileImage}" >
                                    <img src="${mypage.profileImage}" id="profileImage">
                                </c:if>

                            </span>

                            <div class="edit-profile-picture">
                                <img src="/resources/images/mypage/pencil.png"> <%-- 연필 --%>
                                <div class="profile-change-Btn">
                                    <label for="file">프로필 사진 편집</label> 
                                    <input type="file" name="profileImage" class="profileUpload" id="file" accept="image/*" required multiple>
                                </div>
                                <img src="/resources/images/message/messageDeleteImg.png" id="deleteProfile"> <%-- X버튼 --%>
                            </div>
                        </div>
                        
                        <!-- 사용자 이름 -->
                        <div class="userName-change"> 
                            <p>사용자 이름</p>
                            <input type="text" name="memberNickname" minlength="2" maxlength="20" placeholder="사용자 이름을 입력해주세요." 
                                value="${loginMember.memberNickname}" id="memberNickname">
                            <br><span class="user-name-change-message" id="nickMessage"> </span>
                        </div>

                        <!-- url -->
                        <div class="URL-change">
                            <p>PingPong URL(영문)</p>
                            <div>
                                <p>pingpong.net/</p>
                                <input type="text" name="memberUrl" id="memberUrl"
                                    value="${loginMember.memberUrl}" required>
                            </div>
                                <span class="URL-change-check-message" id="URLCheckMessage"></span>
                        </div>

                        <!-- 관심분야 변경 -->
                        <div class="interest-field-container">
                            <p>작업 & 관심 분야(선택)</p>
                            <div class="interest-field">
                            
                            	<%-- <c:forEach var="interest" items="${interestList}">
	                                <div> 
	                                    <label for="${interest.interestsNo}">
	                                    	<input type="checkbox" value="${interest.interestsNo}" id="${interest.interestsNo}" name="interest"> ${interest.interestsName}
	                                    </label>
	                                </div>
                                </c:forEach> --%>
                                

                                    <label for="IT-SW"><input type="checkbox" value="IT/SW" id="IT-SW" name="interest"> IT/SW</label> 
                                    <label for="game"><input type="checkbox" value="게임" id="game" name="interest"> 게임</label> 
                                    <label for="engineering"><input type="checkbox" value="공학" id="engineering" name="interest"> 공학</label>
                                    <label for="education"><input type="checkbox" value="교육" id="education" name="interest"> 교육</label> 
                                    <label for="marketing"><input type="checkbox" value="마케팅" id="marketing" name="interest"> 마케팅</label> 
                                    <label for="finance"><input type="checkbox" value="금융" id="finance" name="interest"> 금융</label>  
                                <div>
                                    <label for="animal"><input type="checkbox" value="동물" id="animal" name="interest"> 동물</label>
                                    <label for="design"><input type="checkbox" value="디자인" id="design" name="interest"> 디자인</label> 
                                    <label for="beauty-fashion"><input type="checkbox" value="미용/패션" id="beauty-fashion" name="interest"> 미용/패션</label> 
                                    <label for="boardcast"><input type="checkbox" value="방송" id="boardcast" name="interest"> 방송</label> 
                                    <label for="law"><input type="checkbox" value="법/수사" id="law" name="interest"> 법/수사</label> 
                                    <label for="welfare"><input type="checkbox" value="사회복지" id="welfare" name="interest"> 사회복지</label> 
                                    <label for="sports"><input type="checkbox" value="스포츠" id="sports" name="interest"> 스포츠</label> 
                                </div> 
                                <div>
                                    <label for="travel"><input type="checkbox" value="여행" id="travel" name="interest"> 여행</label> 
                                    <label for="b-m-d"><input type="checkbox" value="책/영화/드라마" id="b-m-d" name="interest"> 책/영화/드라마</label> 
                                    <label for="universe"><input type="checkbox" value="우주/항공" id="universe" name="interest"> 우주/항공</label> 
                                    <label for="food"><input type="checkbox" value="음식" id="food" name="interest"> 음식</label> 
                                    <label for="music"><input type="checkbox" value="음악" id="music" name="interest"> 음악</label> 
                                    <label for="medical-bio"><input type="checkbox" value="의료/바이오" id="medical-bio" name="interest"> 의료/바이오</label> 
                                    <label for="environment"><input type="checkbox" value="환경/생태" id="environment" name="interest"> 환경/생태</label> 
                                </div> 
                                                             
                            </div>
                        </div>
                    </div>

                    <div class="myPage-save">
                        <button id="editCompleteBtn" type="button">편집 완료</button>
                    </div>
                </form>
            </div>   


            <!-- *** 프로필 편집 *** -->
            <div id="myPageModiTab2" class="myPage-content-main">
                <form name="myPageFrm" id="updateProfileInfo" action="/mypage/profile" method="POST">
                    <div class="profile-modi">

                        <!-- 소개 -->
                        <div class="introduce-change"> 
                            <p>소개</p>
                            <input type="text" name="memberInfo" maxlength="40" placeholder="자기 소개를 입력해주세요."
                            	value="${mypage.memberInfo}" id="memberInfo">
                        </div>

                        <!-- 커리어 -->
                        <div class="career-change"> 
                            <p>커리어</p>
                            <input type="text" name="memberCareer" maxlength="40" placeholder="경력 / 수상 내역을 입력해주세요."
                            	value="${mypage.memberCareer}" id="memberCareer">
                        </div>

                        <!-- 자격증 -->
                        <div class="certificate-change"> 
                            <p>자격증</p>
                            <input type="text" name="memberCertificate" maxlength="40" placeholder="보유중인 자격증을 입력해주세요."
                            	value="${mypage.memberCertificate}" id="memberCertificate">
                        </div>                        

                        <!-- 지식 / 기술 -->
                        <div class="tech-field-container">
                            <p>지식 / 기술</p>
                            <div class="tech-field">

                            	<c:forEach var="tech" items="${techList}">
	                                <div>
	                                    <label for="${tech.techNo}">
	                                    	<input type="checkbox" value="${tech.techNo}" id="${tech.techNo}" name="tech"> ${tech.techName}
	                                    </label>
	                                </div>
                                </c:forEach>

                            
                                <!-- 
                                <label for="Ai"><input type="checkbox" value="일러스트" id="Ai" name="tech"> 일러스트</label> 
                                <label for="Xd"><input type="checkbox" value="인디자인" id="Xd" name="tech"> 인디자인</label> 
                                <label for="Pr"><input type="checkbox" value="그래픽 디자인" id="Pr" name="tech"> 그래픽 디자인</label>
                                <label for="java"><input type="checkbox" value="자바" id="java" name="tech"> 자바</label>  
                                -->
                                <!-- 
                                <div>
                                    <label for="python"><input type="checkbox" value="파이썬" id="python" name="tech"> 파이썬</label> 
                                    <label for="c"><input type="checkbox" value="씨언어" id="c" name="tech"> 씨언어</label> 
                                    <label for="sql"><input type="checkbox" value="SQL" id="sql" name="tech"> SQL</label>
                                    <label for="html"><input type="checkbox" value="HTML" id="html" name="tech"> HTML</label> 
                                    <label for="css"><input type="checkbox" value="CSS" id="css" name="tech"> CSS</label> 
                                </div> 
                                <div>
                                    <label for="js"><input type="checkbox" value="JavaScript" id="js" name="tech"> JavaScript</label> 
                                    <label for="unity"><input type="checkbox" value="Unity" id="unity" name="tech"> Unity</label> 
                                    <label for="exel"><input type="checkbox" value="엑셀" id="exel" name="tech"> 엑셀</label> 
                                    <label for="access"><input type="checkbox" value="엑세스" id="access" name="tech"> 엑세스</label> 
                                    <label for="powerpoint"><input type="checkbox" value="파워포인트" id="powerpoint" name="tech"> 파워포인트</label> 
                                </div> 
                                <div>  
                                    <label for="word"><input type="checkbox" value="워드" id="word" name="tech"> 워드</label> 
                                    <label for="hancom"><input type="checkbox" value="한글" id="hancom" name="tech"> 한글</label> 
                                    <label for="chatGPT"><input type="checkbox" value="chat GPT" id="chatGPT" name="tech"> chat GPT</label> 
                                    <label for="cubase"><input type="checkbox" value="큐베이스" id="cubase" name="tech"> 큐베이스</label> 
                                    <label for="vegas"><input type="checkbox" value="베가스" id="vegas" name="tech"> 베가스</label> 
                                </div>   
                                -->                              
                            </div>
                        </div>

                        <!-- SNS -->
                        <div class="SNS-container">
                            <p>SNS</p>
                            <div class="SNS-field">
                                <div>
                                    <label for="instagram"><input type="checkbox" value="인스타그램" id="instagram" name="SNS"> 인스타그램</label>
                                    <input type="text" value="www." id="" name="address">
                                </div>           
                                <div>
                                    <label for="facebook"><input type="checkbox" value="페이스북" id="facebook" name="SNS"> 페이스북</label>
                                    <input type="text" value="www." id="" name="address"> 
                                </div>
                                <div>
                                    <label for="twitter"><input type="checkbox" value="트위터" id="twitter" name="SNS"> 트위터</label> 
                                    <input type="text" value="www." id="" name="address">
                                </div>                  
                                <div>
                                    <label for="github"><input type="checkbox" value="깃허브" id="github" name="SNS"> 깃허브</label>
                                    <input type="text" value="www." id="" name="address">
                                </div>
                                <div>
                                    <label for="notion"><input type="checkbox" value="노션" id="notion" name="SNS"> 노션</label> 
                                    <input type="text" value="www." id="" name="address">
                                </div>
                                <div>
                                    <label for="blog"><input type="checkbox" value="네이버 블로그" id="blog" name="SNS"> 네이버 블로그</label>
                                    <input type="text" value="www." id="" name="address"> 
                                </div>
                            </div>
                        </div>

                        <div class="myPage-save">
                            <button id="ProfileEditCompleteBtn" onclick="techListEvent()">편집 완료</button>
                        </div>
                    </div>
                </form>
            </div>   


            <!-- *** 비밀번호 변경 화면 구현 & 회원 탈퇴 *** -->
            <div id="myPageModiTab3" class="myPage-content-main">

                <form name="myPageFrm" id="changePwFrm" action="/mypage/changePw" method="POST">
                    <div class="password-modi">

                        <p>비밀번호 변경</p>

                        <!-- 현재 비밀번호 -->
                        <div class="current-password"> 
                            <p>현재 비밀번호</p>
                            <input type="password" name="currentPw" id="currentPw" minlength="6" placeholder="6자 이상">
                        </div>

                        <!-- 새 비밀번호 -->
                        <div class="new-password"> 
                            <p>새 비밀번호</p>
                            <input type="password" name="newPw" id="newPw" minlength="6" placeholder="6자 이상">
                        </div>

                        <!-- 새 비밀번호 확인 -->
                        <div class="new-password-check"> 
                            <p>새 비밀번호 확인</p>
                            <input type="password" name="newPwConfirm" id="newPwConfirm" minlength="6" placeholder="6자 이상" autocomplete="off" required>
                            <button class="password-change" id="changePwBtn" type="button">비밀번호 변경</button>
                        </div> 
                    </div>     
                </form>

                <form name="myPageFrm" id="secessionFrm" action="/mypage/secession" method="POST"> 
                    <div class="secession">       
                        <p>회원 탈퇴</p>
                        
                        <!-- 현재 비밀번호 -->
                        <div class="password-for-secession"> 
                            <p>현재 비밀번호</p>
                            <input type="password" name="memberPw" id="memberPw" minlength="6" placeholder="6자 이상">
                        </div>
                        
                        <!-- 회원 탈퇴 약관 -->
                        <div class="terms-for-secession"> 
                            <p>회원 탈퇴 약관</p>
                            <textarea name="" class="terms-content" cols="30" rows="10">
제1조 이 약관은 샘플 약관입니다. 
① 약관 내용 1 ② 약관 내용 2 ③ 약관 내용 3 ④ 약관 내용 4 
제2조 이 약관은 샘플 약관입니다. 
① 약관 내용 1 ② 약관 내용 2 ③ 약관 내용 3 ④ 약관 내용 4
                            </textarea>
                            <div class="termsCheckBox">
                                <input type="checkbox" name="agree" id="agree">회원 탈퇴 약관에 동의합니다.
                            </div>
                            <button class="secessionBtn" id="secessionBtn" type="button">회원 탈퇴</button>
                        </div>
                    </div>
                </form>
            </div> 
            
            
            <!-- *** 문의 내역 화면 구현 *** -->
            <div id="myPageModiTab4" class="myPage-content-main">
                <form name="myPageFrm" action="/mypage/inquiry" method="POST">
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