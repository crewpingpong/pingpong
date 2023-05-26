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
                                    <img src="/resources/images/profileImage/basicUserProfile.png" id="profileImage">
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
                                    <input type="file" name="updateProfile" class="profileUpload" id="file" accept="image/*" required multiple>
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
                            		<c:forEach var="chIn" items="${checkInterestList}">
	                            	
	                            		<c:if test="${interest.interestsNo == chIn.interestsNo}">
	                            			<c:set var="checked" value="checked"/>
	                            		</c:if>
		                                
	                                </c:forEach>
	                                <div> 
	                                    <label for="${interest.interestsNo}">
	                                    	<input type="checkbox" value="${interest.interestsNo}" id="${interest.interestsNo}" name="interest" ${checked} }> ${interest.interestsName}
	                                    </label>
	                                </div>
	                                
	                                <c:remove var="checked"/>
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
                            	<c:forEach var="SNS" items="${SNSList}">
	                            	<c:forEach var="chSNS" items="${checkSNSList}">
	                            	
	                            		<c:if test="${SNS.snsNo == chSNS.snsNo}">
	                            			<c:set var="checked" value="checked"/>
	                            			<c:set var="address" value="${chSNS.snsAddress}"/>
	                            		</c:if>
		                                
	                                </c:forEach>
                            
                                <div>
                                    <label for="${SNS.snsNo}">
                                    	<input type="checkbox" value="${SNS.snsNo}" id="${SNS.snsNo}" name="SNS" ${checked}> ${SNS.snsName}
                                    </label>
                                    <input type="text" value="${address}" id="${SNS.snsNo}" name="address">
                                </div>    
                                
                                 <c:remove var="checked"/>
                                 <c:remove var="address"/>
                                </c:forEach>
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
                            <p class="pwResetP">현재 비밀번호</p>
                            <input type="password" name="currentPw" id="currentPw" placeholder="현재 비밀번호">
                        </div>

                        <!-- 새 비밀번호 -->
                        <div class="signup-input-password">
                            <p class="pwResetP">새 비밀번호</p>
                            <input type="password" placeholder="8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호" name="newPw" autocomplete="off" id="memberPw"> <br>
                            <span class="pwInconsistency signUp-message" id="pwMessage1">
                                8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호를 입력해 주세요.
                            </span>
                        </div>
                        
                        <div class="signup-password-check">
                            <p class="pwResetP">새 비밀번호 확인</p>
                            <input type="password" placeholder="비밀번호 재입력"  autocomplete="off" id="memberPwConfirm"> <br>
                            <span class="pwInconsistency signUp-message" id="pwMessage2"></span>
                        </div>
                        <button class="password-change">비밀번호 변경</button>
                    </div>     
                </form>

                <form name="myPageFrm" id="secessionFrm" action="/mypage/secession" method="POST"> 
                    <div class="secession">       
                        <p>회원 탈퇴</p>
                        
                        <!-- 현재 비밀번호 -->
                        <div class="password-for-secession"> 
                            <p>현재 비밀번호</p>
                            <input type="password" name="memberPw" id="secessionMemberPw" minlength="8" placeholder="8자 이상">
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
                            <div class="admin-content-main-area"> 
            <div id="adminModiTab5" class="admin-content-main">
                <!-- ★★★★★★★★★★★★★★ 1:1문의 ★★★★★★★★★★★★★★ -->
                <div class="admin-left-side-menu">

                    <div>
            <form action="/manager/1To1inquiry" method="get" id="boardSearch">

                    <select name="key" id="searchKey">
                        <option value="i">ID</option>
                        <option value="c">내용</option>
                        <option value="e">EMAIL</option>
                    </select>

                    <input type="text" name="query"  id="searchQuery" placeholder="검색어를 입력해주세요.">

                    <button>검색</button>
            </form>
                    </div>
                    <div>
                        <table id="oneToOneTable">
                            <colgroup>
                                <col class="col1">
                                <col class="col2">
                                <col class="col3">
                                <col class="col4">
                                <col class="col5">
                                <col class="col6">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" name="choiceBox" value="selectAll" id="chkSelectAll">
                                    </th>
                                    <th>No.</th>
                                    <th>ID(URL)</th>
                                    <th>내용</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            <c:choose>
                                <c:when test="${empty Inquiry}">
                                    <tr>
                                        <th colspan="6">등록된 문의가 없습니다.</th>
                                    </tr>
                                </c:when>
                            
                                <c:otherwise>
                                    <c:forEach items="${InquiryList.inquiryList}" var="Inquiry">
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="choicebox" value="1">
                                            </td>
                                            <td>${Inquiry.inquiryNo}</td>
                                            <td>
                                                <a href="/mypage/${Inquiry.memberNo}">${Inquiry.memberUrl}</a>
                                            </td>
                                            <td><a onclick="location.href='/manager/1to1Content?inquiryNo=${Inquiry.inquiryNo}'">${Inquiry.inquiryContent}</a></td>
                                            <td>${Inquiry.memberEmail}</td>
                                        </tr>
                                    </c:forEach>
                                </c:otherwise>

                            </c:choose>
                            
                            </tbody>
                        </table>
                    </div>
                    <!-- 페이지 네이션 -->
                    <div class="pagination">
                        <i class="fa-solid fa-arrow-left"></i>
                        <ol id="paginationNumbers">
                            <!-- <li><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li> -->
                        </ol>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <!-- ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ -->
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
