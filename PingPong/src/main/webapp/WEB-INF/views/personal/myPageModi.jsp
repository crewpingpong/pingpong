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
                                <c:forEach var="interest" items="${interestList}">
                                    <div> 
                                        <label for="${interest.interestsNo}">
                                            <input type="checkbox" value="${interest.interestsNo}" id="${interest.interestsNo}" name="interest"> ${interest.interestsName}
                                        </label>
                                    </div>
                                </c:forEach> 
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
                            <input type="text" name="memberInfo" maxlength="50" placeholder="자기 소개를 입력해주세요."
                                value="${mypage.memberInfo}" id="memberInfo">
                        </div>

                        <!-- 커리어 -->
                        <div class="career-change"> 
                            <p>커리어</p>
                            <input type="text" name="memberCareer" maxlength="50" placeholder="경력 / 수상 내역을 입력해주세요."
                                value="${mypage.memberCareer}" id="memberCareer">
                        </div>

                        <!-- 자격증 -->
                        <div class="certificate-change"> 
                            <p>자격증</p>
                            <input type="text" name="memberCertificate" maxlength="50" placeholder="보유중인 자격증을 입력해주세요."
                                value="${mypage.memberCertificate}" id="memberCertificate">
                        </div>                        


                        <!-- 지식 / 기술 -->
                        <div class="tech-field-container">
                            <p>지식 / 기술</p>
                            <div class="tech-field">
                                <c:forEach var="tech" items="${techList}">
                                    <c:forEach var="ch" items="${checkTechList}">
                                    
                                        <c:if test="${tech.techNo == ch.techNo}">
                                            <c:set var="checked" value="checked"/>
                                        </c:if>
                                        
                                        
                                    </c:forEach>
                                    
                                    
                                    <div>
                                        <label for="${tech.techNo}">
                                            <input type="checkbox" value="${tech.techNo}" id="${tech.techNo}" name="tech" ${checked}> ${tech.techName}
                                        </label>
                                    </div>
                                    
                                    <c:remove var="checked"/>
                                </c:forEach>
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
                            <input type="password" name="currentPw" id="currentPw" placeholder="8자 이상">
                        </div>

                        <!-- 새 비밀번호 -->
                        <div class="new-password"> 
                            <p>새 비밀번호</p>
                            <input type="password" name="newPw" id="newPw" placeholder="8자 이상">
                        </div>

                        <!-- 새 비밀번호 확인 -->
                        <div class="new-password-check"> 
                            <p>새 비밀번호 확인</p>
                            <input type="password" name="newPwConfirm" id="newPwConfirm" placeholder="8자 이상" autocomplete="off" required>
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
                        <div>
                            안녕하세요. 문의 드려요. 문희눈~~꽃무늬가요~~~좋아요~~
                            <div class="inquiry-date">2023년 5월 22일</div> 
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