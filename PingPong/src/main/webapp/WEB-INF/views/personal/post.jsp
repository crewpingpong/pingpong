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
    <link rel="stylesheet" href="/resources/css/personal/post.css">
    <link rel="stylesheet" href="/resources/css/personal/post2.css">
    <link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
    <script>
        let techImgList = "${techImgList}";
        let snsImgList = "${snsImgList}";
        let tempBoardNo;
    </script>
</head>
<body>
    
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <!-- 개인 홈 프로필 -->
    <div class="personalHome">
    
        <div class="profileBackground">  <!-- 프로필 배경 사진 -->

            <c:if test="${mypage.memberNo == loginMember.memberNo}" >  <%-- 나의 프로필일 때  --%>
                <div>
                    <label for="background" id="selectBackground">배경화면 선택</label> <!-- 파일 첨부 버튼 위임 -->
                    <span id="afterChoice">
                        <p id="deleteBackground">돌아가기</p>
                        <form action="/mypage/background/insert" method="post" enctype="multipart/form-data">
                            <input type="file" name="backgroundImage" id="background" class="profileBgupload" accept="image/*">
                            <button id="updateBackground">변경하기</button>
                        </form>
                    </span>
                </div>
            </c:if>

            <c:choose>
                <c:when test="${not empty mypage.backgroundImage}">
                    <div class="bgimageBox"> <!-- 이미지 들어오는 구역 -->
                        <img class="preview" src="${mypage.backgroundImage}">
                    </div>
                </c:when>
            
                <c:otherwise>
                    <div class="bgimageBox"> <!-- 이미지 들어오는 구역 -->
                        <img class="preview" src="${mypage.backgroundImage}">
                    </div>
                </c:otherwise>
            </c:choose>

        </div>

        <div class="forSNSIcon-main">
        	<c:if test="${fn:length(snsURL) > 0}">
	            <c:forEach var="i" begin="0" end="${fn:length(snsURL) - 1}" step="1">
	                <div class="forSNSIcon-sub">
	                
	                    <a href="${snsURL[i].snsAddress}">
	                        <img class="sns-img-list" src="${snsImgList[i]}" alt="">
	                    </a> 
	                </div>
	
	            </c:forEach>
            </c:if>
        </div>
        
        <div class="profilebox"> <!-- 프로필 박스 -->
            <div class="profileLeft"> <!-- 프로필 사진 있는 구역 -->
                <div class="profileCircle">
                    <img src="${mypage.profileImage}">
                </div>

                <p class="profileName">${mypage.memberNickname}</p>
                <p class="profileIntroduce">pingpong.net/${mypage.memberUrl}</p>
                <%-- <p class="profileIntroduce">${mypage.oneLiner}</p> --%>
                <div class="profileBtn">
                    <!-- 팔로워 버튼 --> <!-- c:choose/c:when -->
                    <div class="followBtn" follow="${mypage.memberNo}"> <!-- followshow 클래스 있으면 보임 -->
                        <c:if test="${mypage.memberNo == loginMember.memberNo}" >
                            <svg class="followList" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8444 18.7591C22.1629 18.7591 23.4519 18.3681 24.5482 17.6356C25.6445 16.903 26.499 15.8618 27.0036 14.6437C27.5082 13.4255 27.6402 12.0851 27.383 10.7918C27.1257 9.49864 26.4908 8.31076 25.5584 7.37841C24.6261 6.44606 23.4382 5.81112 22.145 5.55388C20.8518 5.29665 19.5114 5.42867 18.2932 5.93325C17.075 6.43784 16.0338 7.29232 15.3013 8.38865C14.5687 9.48498 14.1777 10.7739 14.1777 12.0925C14.1777 13.8606 14.8801 15.5563 16.1304 16.8065C17.3806 18.0567 19.0763 18.7591 20.8444 18.7591Z" fill="#FFE69A"/>
                            <path d="M30.8444 35.4251C31.2864 35.4251 31.7104 35.2495 32.0229 34.937C32.3355 34.6244 32.5111 34.2005 32.5111 33.7585C32.5111 30.6643 31.2819 27.6968 29.094 25.5089C26.9061 23.321 23.9386 22.0918 20.8444 22.0918C17.7502 22.0918 14.7827 23.321 12.5948 25.5089C10.4069 27.6968 9.17773 30.6643 9.17773 33.7585C9.17773 34.2005 9.35333 34.6244 9.66589 34.937C9.97845 35.2495 10.4024 35.4251 10.8444 35.4251H30.8444Z" fill="#FFE69A"/>
                            </svg>
                        </c:if>
                        <c:if test="${mypage.memberNo != loginMember.memberNo}" >
                        <svg class="followUser fb" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.7308 10.8021H34.0641V9.13542C34.0641 8.69339 33.8885 8.26947 33.576 7.95691C33.2634 7.64435 32.8395 7.46875 32.3975 7.46875C31.9554 7.46875 31.5315 7.64435 31.2189 7.95691C30.9064 8.26947 30.7308 8.69339 30.7308 9.13542V10.8021H29.0641C28.6221 10.8021 28.1982 10.9777 27.8856 11.2902C27.5731 11.6028 27.3975 12.0267 27.3975 12.4688C27.3975 12.9108 27.5731 13.3347 27.8856 13.6473C28.1982 13.9598 28.6221 14.1354 29.0641 14.1354H30.7308V15.8021C30.7308 16.2441 30.9064 16.668 31.2189 16.9806C31.5315 17.2932 31.9554 17.4688 32.3975 17.4688C32.8395 17.4688 33.2634 17.2932 33.576 16.9806C33.8885 16.668 34.0641 16.2441 34.0641 15.8021V14.1354H35.7308C36.1728 14.1354 36.5967 13.9598 36.9093 13.6473C37.2219 13.3347 37.3975 12.9108 37.3975 12.4688C37.3975 12.0267 37.2219 11.6028 36.9093 11.2902C36.5967 10.9777 36.1728 10.8021 35.7308 10.8021Z" fill="#FFD24C"/>
                        <path d="M17.3971 19.1361C18.7157 19.1361 20.0046 18.7451 21.1009 18.0125C22.1973 17.28 23.0517 16.2388 23.5563 15.0206C24.0609 13.8025 24.1929 12.462 23.9357 11.1688C23.6785 9.8756 23.0435 8.68771 22.1112 7.75536C21.1788 6.82301 19.9909 6.18807 18.6977 5.93084C17.4045 5.6736 16.0641 5.80562 14.8459 6.31021C13.6277 6.81479 12.5865 7.66927 11.854 8.7656C11.1215 9.86193 10.7305 11.1509 10.7305 12.4694C10.7305 14.2375 11.4328 15.9332 12.6831 17.1834C13.9333 18.4337 15.629 19.1361 17.3971 19.1361Z" fill="#FFD24C"/>
                        <path d="M27.3971 35.8021C27.8392 35.8021 28.2631 35.6265 28.5756 35.3139C28.8882 35.0014 29.0638 34.5774 29.0638 34.1354C29.0638 31.0412 27.8346 28.0738 25.6467 25.8858C23.4588 23.6979 20.4913 22.4688 17.3971 22.4688C14.3029 22.4688 11.3355 23.6979 9.14756 25.8858C6.95963 28.0738 5.73047 31.0412 5.73047 34.1354C5.73047 34.5774 5.90606 35.0014 6.21862 35.3139C6.53118 35.6265 6.95511 35.8021 7.39714 35.8021" fill="#FFD24C"/>
                        </svg> <!-- 팔로우 (안했을 때 보이는 추가 버튼) -->
                        
                        <svg class="nufollow fb" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.1155 12.5L35.3321 11.2834C35.657 10.9585 35.8396 10.5178 35.8396 10.0584C35.8396 9.59892 35.657 9.15827 35.3321 8.83338C35.0073 8.50849 34.5666 8.32597 34.1071 8.32597C33.6477 8.32597 33.207 8.50849 32.8821 8.83338L31.6655 10L30.4488 8.78338C30.1173 8.45849 29.6703 8.2786 29.2061 8.28329C28.742 8.28798 28.2987 8.47686 27.9738 8.80838C27.6489 9.1399 27.469 9.58691 27.4737 10.0511C27.4784 10.5152 27.6673 10.9585 27.9988 11.2834L29.2155 12.5L27.9988 13.7167C27.6739 14.0416 27.4914 14.4823 27.4914 14.9417C27.4914 15.4012 27.6739 15.8418 27.9988 16.1667C28.3237 16.4916 28.7643 16.6741 29.2238 16.6741C29.6833 16.6741 30.1239 16.4916 30.4488 16.1667L31.6655 15L32.8821 16.2167C33.2137 16.5416 33.6607 16.7215 34.1248 16.7168C34.589 16.7121 35.0323 16.5232 35.3571 16.1917C35.682 15.8602 35.8619 15.4132 35.8572 14.949C35.8525 14.4849 35.6637 14.0416 35.3321 13.7167L34.1155 12.5Z" fill="#92B4EC"/>
                        <path d="M16.6667 18.3333C17.9852 18.3333 19.2741 17.9423 20.3705 17.2098C21.4668 16.4773 22.3213 15.4361 22.8259 14.2179C23.3304 12.9997 23.4625 11.6593 23.2052 10.3661C22.948 9.07286 22.3131 7.88497 21.3807 6.95262C20.4484 6.02027 19.2605 5.38534 17.9673 5.1281C16.6741 4.87087 15.3336 5.00289 14.1154 5.50747C12.8973 6.01206 11.8561 6.86654 11.1235 7.96287C10.391 9.0592 10 10.3481 10 11.6667C10 13.4348 10.7024 15.1305 11.9526 16.3807C13.2029 17.631 14.8986 18.3333 16.6667 18.3333Z" fill="#92B4EC"/>
                        <path d="M26.6667 34.9993C27.1087 34.9993 27.5326 34.8238 27.8452 34.5112C28.1577 34.1986 28.3333 33.7747 28.3333 33.3327C28.3333 30.2385 27.1042 27.271 24.9162 25.0831C22.7283 22.8952 19.7609 21.666 16.6667 21.666C13.5725 21.666 10.605 22.8952 8.41709 25.0831C6.22916 27.271 5 30.2385 5 33.3327C5 33.7747 5.17559 34.1986 5.48816 34.5112C5.80072 34.8238 6.22464 34.9993 6.66667 34.9993H26.6667Z" fill="#92B4EC"/>
                        </svg> <!-- 팔로우 취소 (했을 떄 보이는 취소 버튼)--> <!-- c:otherwise -->
                        </c:if>
                        
                        <c:if test="${mypage.memberNo != loginMember.memberNo}" >
                        <!-- 메세지 보내기 버튼 -->
                        <svg class="messageSend" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.9985 6.66599C34.9811 6.51288 34.9476 6.36204 34.8985 6.21599V6.06599C34.8186 5.88051 34.7056 5.71109 34.5651 5.56599C34.4237 5.4331 34.2601 5.32593 34.0818 5.24933H33.9318C33.7782 5.13201 33.6025 5.04697 33.4151 4.99933H33.3318C33.1661 4.97418 32.9975 4.97418 32.8318 4.99933L2.8318 14.9993C2.49835 15.1089 2.20802 15.321 2.00219 15.6053C1.79636 15.8896 1.68555 16.2317 1.68555 16.5827C1.68555 16.9337 1.79636 17.2757 2.00219 17.56C2.20802 17.8443 2.49835 18.0564 2.8318 18.166L17.0485 22.8993L21.7818 37.116C21.8914 37.4494 22.1035 37.7398 22.3878 37.9456C22.6721 38.1514 23.0141 38.2622 23.3651 38.2622C23.7161 38.2622 24.0582 38.1514 24.3425 37.9456C24.6268 37.7398 24.8389 37.4494 24.9485 37.116L34.9485 7.11599C34.9855 6.96896 35.0023 6.81757 34.9985 6.66599ZM27.1651 10.4827L17.8818 19.766L8.59846 16.666L27.1651 10.4827ZM23.3318 31.3993L20.2318 22.116L29.5151 12.8327L23.3318 31.3993Z" fill="#92B4EC"/>
                        </svg>
                        </c:if>
                        
                        <c:if test="${mypage.memberNo == loginMember.memberNo}" >
                            <!-- 메세지 함 버튼 내 프로필 일 경우 메세지 전달 버튼 대신 메세지 함-->
                            <svg class="messageBox" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6668 6.66699H8.3335C7.00741 6.66699 5.73564 7.19378 4.79796 8.13146C3.86028 9.06914 3.3335 10.3409 3.3335 11.667V28.3337C3.3335 29.6597 3.86028 30.9315 4.79796 31.8692C5.73564 32.8069 7.00741 33.3337 8.3335 33.3337H31.6668C32.9929 33.3337 34.2647 32.8069 35.2024 31.8692C36.14 30.9315 36.6668 29.6597 36.6668 28.3337V11.667C36.6668 10.3409 36.14 9.06914 35.2024 8.13146C34.2647 7.19378 32.9929 6.66699 31.6668 6.66699ZM30.5502 10.0003L20.0002 17.917L9.45016 10.0003H30.5502ZM31.6668 30.0003H8.3335C7.89147 30.0003 7.46755 29.8247 7.15498 29.5122C6.84242 29.1996 6.66683 28.7757 6.66683 28.3337V12.0837L19.0002 21.3337C19.2887 21.55 19.6395 21.667 20.0002 21.667C20.3608 21.667 20.7117 21.55 21.0002 21.3337L33.3335 12.0837V28.3337C33.3335 28.7757 33.1579 29.1996 32.8453 29.5122C32.5328 29.8247 32.1089 30.0003 31.6668 30.0003Z" fill="#92B4EC"/>
                            </svg>
                        </c:if>
                    </div>
                </div>
            </div> <!-- // profileLeft -->

            <div class="profileRight"> <!-- 소개글 있는 구역 -->

                <div class="profiletab_menu" id="lnhtab1">
                    <ul class="profilelist">
                        <li class="is_on"> <!-- CERTIFICATE -->
                            <a href="#profiletab1" class="btn">INFO</a>
                        </li>
                        <li>
                            <a href="#profiletab2" class="btn">CERT</a>
                        </li>
                    </ul>
                
                    <div class="cont_area">
                        <div id="profiletab1" class="cont" style="display:block;">
                            <h4>소개</h4>
                            <div>
${mypage.memberInfo}
                            </div>
                            <h4 id="certificate">지식 / 기술</h4>
                            <!-- 아이콘 추가 기능 구현 -->
                            
                            <div class="certificate-main-con">
                                <c:if test="${empty techImgList}">
                                    없음
                                </c:if>

                                    <%--
                                    <div class="certificate-sub-con">
                                        <img class="tech-img-list" src="" alt="">
                                    </div> 
                                    --%>
                            </div>
                        </div>
                        <div id="profiletab2" class="cont">
                            <h4>자격증</h4>
                            <div>
${mypage.memberCertificate}
                            </div>
                            <h4>커리어</h4>
                            <div>
${mypage.memberCareer}
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- // profileRight -->
            
            <!-- 내정보 수정으로 가는 링크 -->
            <c:if test="${mypage.memberNo == loginMember.memberNo}" > 
                <div class="poroflieEdit" onclick="location.href='/mypage/myPageModi'">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="20" height="20" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_839_3863" transform="scale(0.00195312)"/>
                    </pattern>
                    <image id="image0_839_3863" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                    </defs>
                    </svg>
                    <p>내 정보 수정</p>
                </div>
            </c:if>
                
        </div> <!-- // profilebox -->
    </div> <!-- // personalHome -->

    <!-- 아래 게시글 구역  -->
    <div class="profileContent">
        <div class="posttab_menu">
            <ul class="postlist">
                <li class="is_on">
                    <a href="#posttab1" class="btn">게시글  <span>${fn:length(boardList)}</span></a>
                </li>
                <li>
                    <a href="#posttab2" class="btn">좋아요  <span>${fn:length(likeList)}</span></a>
                </li>
                <li>
                    <a href="#posttab3" class="btn">컬렉션  <span>${fn:length(markList)}</span></a>
                </li>
                <c:choose>
                    <c:when test="${mypage.memberNo == loginMember.memberNo}">
                        <li>
                            <button class="newContent">새 게시글</button>
                        </li>
                    </c:when>
                
                    <c:otherwise>
                        <li></li>
                    </c:otherwise>
                </c:choose>

            </ul>
        
            <div class="postcont_area">
                <div id="posttab1" class="postcont" style="display:block;">
                    <div class="contentBox">
                        <c:choose>
                            <c:when test="${empty boardList}">
                                <%-- 조회된 게시글 목록이 비어있거나 null인 경우 --%>
                                <div>게시글이 존재하지 않습니다.</div>
                            </c:when>
                        
                            <c:otherwise>
                                <!-- 게시글 목록 조회 결과가 있다면 -->
                                <c:forEach items="${boardList}" var="board">
                                    <div>
                                        <!-- <a href="/board/${board.boardNo}"> -->
                                        <a onclick="selectBoardList(${board.boardNo})">
                                            <img class="list-thumbnail" src="${board.thumbnail}">
                                        </a>   
                                    </div>
                                </c:forEach>
                            </c:otherwise>
                        </c:choose>
                    </div>
                </div>
                <div id="posttab2" class="postcont">
                    <div class="contentBox">
                        <c:choose>
                            <c:when test="${empty likeList}">
                                <%-- 조회된 게시글 목록이 비어있거나 null인 경우 --%>
                                <div>게시글이 존재하지 않습니다.</div>
                            </c:when>
                        
                            <c:otherwise>
                                <!-- 게시글 목록 조회 결과가 있다면 -->
                                <c:forEach items="${likeList}" var="like">
                                    <div>
                                        <a onclick="selectBoardList(${like.boardNo})">
                                            <img class="list-thumbnail" src="${like.thumbnail}">
                                        </a>   
                                    </div>
                                </c:forEach>
                            </c:otherwise>
                        </c:choose>
                    </div>
                </div>
                <div id="posttab3" class="postcont">
                    <div class="contentBox">
                        <c:choose>
                            <c:when test="${empty markList}">
                                <%-- 조회된 게시글 목록이 비어있거나 null인 경우 --%>
                                <div>게시글이 존재하지 않습니다.</div> 
                            </c:when>
                        
                            <c:otherwise>
                                <!-- 게시글 목록 조회 결과가 있다면 -->
                                <c:forEach items="${markList}" var="mark">
                                    <div>
                                        <a onclick="selectBoardList(${mark.boardNo})">
                                            <img class="list-thumbnail" src="${mark.thumbnail}">
                                        </a>   
                                    </div>
                                </c:forEach>
                            </c:otherwise>
                        </c:choose>
                    </div>
                </div>
            </div>
        
        </div>
    </div>

    <!-- 내가 팔로우한 사람들 리스트 -->
    <div class="myFollowList"> <!-- 불투명 배경 -->
        <div> <!-- 하얀배경 -->
            <div> <!-- 메세지함 상단 -->
                <div class="followerLink"> <!-- 팔로워 페이지로 가기 -->
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8438 14.1758C16.8327 14.1758 17.7994 13.8825 18.6216 13.3331C19.4438 12.7837 20.0847 12.0028 20.4631 11.0892C20.8416 10.1756 20.9406 9.17024 20.7477 8.20033C20.5548 7.23043 20.0785 6.33951 19.3793 5.64025C18.68 4.94099 17.7891 4.46478 16.8192 4.27186C15.8493 4.07893 14.844 4.17795 13.9303 4.55639C13.0167 4.93482 12.2358 5.57569 11.6864 6.39793C11.137 7.22018 10.8438 8.18688 10.8438 9.17578C10.8438 10.5019 11.3705 11.7736 12.3082 12.7113C13.2459 13.649 14.5177 14.1758 15.8438 14.1758Z" fill="#FFE69A"/>
                    <path d="M23.3438 26.6758C23.6753 26.6758 23.9932 26.5441 24.2276 26.3097C24.4621 26.0752 24.5938 25.7573 24.5938 25.4258C24.5938 23.1051 23.6719 20.8795 22.0309 19.2386C20.39 17.5977 18.1644 16.6758 15.8438 16.6758C13.5231 16.6758 11.2975 17.5977 9.65657 19.2386C8.01562 20.8795 7.09375 23.1051 7.09375 25.4258C7.09375 25.7573 7.22545 26.0752 7.45987 26.3097C7.69429 26.5441 8.01223 26.6758 8.34375 26.6758H23.3438Z" fill="#FFE69A"/>
                    </svg>
                    <p class="goto-follower">FOLLOWER</p>
                </div>
                <h2>FOLLOW</h2>   
                <svg class="follow-Box-X" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4379 13.0007L25.3962 4.06321C25.7885 3.67091 26.0089 3.13884 26.0089 2.58405C26.0089 2.02925 25.7885 1.49718 25.3962 1.10488C25.0039 0.712579 24.4718 0.492187 23.917 0.492188C23.3622 0.492188 22.8302 0.712579 22.4379 1.10488L13.5004 10.0632L4.56286 1.10488C4.17056 0.712579 3.63849 0.492187 3.08369 0.492188C2.5289 0.492188 1.99683 0.712579 1.60453 1.10488C1.21223 1.49718 0.991837 2.02925 0.991837 2.58405C0.991837 3.13884 1.21223 3.67091 1.60453 4.06321L10.5629 13.0007L1.60453 21.9382C1.40926 22.1319 1.25427 22.3623 1.1485 22.6162C1.04274 22.87 0.988281 23.1424 0.988281 23.4174C0.988281 23.6924 1.04274 23.9647 1.1485 24.2186C1.25427 24.4725 1.40926 24.7029 1.60453 24.8965C1.7982 25.0918 2.02862 25.2468 2.28249 25.3526C2.53637 25.4583 2.80867 25.5128 3.08369 25.5128C3.35872 25.5128 3.63102 25.4583 3.8849 25.3526C4.13877 25.2468 4.36919 25.0918 4.56286 24.8965L13.5004 15.9382L22.4379 24.8965C22.6315 25.0918 22.862 25.2468 23.1158 25.3526C23.3697 25.4583 23.642 25.5128 23.917 25.5128C24.1921 25.5128 24.4644 25.4583 24.7182 25.3526C24.9721 25.2468 25.2025 25.0918 25.3962 24.8965C25.5915 24.7029 25.7465 24.4725 25.8522 24.2186C25.958 23.9647 26.0124 23.6924 26.0124 23.4174C26.0124 23.1424 25.958 22.87 25.8522 22.6162C25.7465 22.3623 25.5915 22.1319 25.3962 21.9382L16.4379 13.0007Z" fill="#231F20"/>
                </svg>
            </div>
            <div class="h4"></div>
            <%-- <h4 class="h4">팔로우 ()</h4> --%>
            <div class="followList"> <!-- 메세지 목록 -->
                <div class="followExample">
                    <%-- <div class=userProfile>
                        <a href=""><div class="probox"><img src="" alt=""></div></a>
                        <a href=""><p>김핑퐁</p></a>
                    </div>
                    <div class="followManage">
                        <button class="unfollow">UNFOLLOW</button>
                    </div> --%>
                </div>
            </div>
        </div>
    </div>

        <!-- 나를 팔로우한 사람들 리스트 -->
    <div class="meFollowList"> <!-- 불투명 배경 -->
        <div> <!-- 하얀배경 -->
            <div> <!-- 메세지함 상단 -->
                <div class="followerLink"> <!-- 팔로워 페이지로 가기 -->
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8438 14.1758C16.8327 14.1758 17.7994 13.8825 18.6216 13.3331C19.4438 12.7837 20.0847 12.0028 20.4631 11.0892C20.8416 10.1756 20.9406 9.17024 20.7477 8.20033C20.5548 7.23043 20.0785 6.33951 19.3793 5.64025C18.68 4.94099 17.7891 4.46478 16.8192 4.27186C15.8493 4.07893 14.844 4.17795 13.9303 4.55639C13.0167 4.93482 12.2358 5.57569 11.6864 6.39793C11.137 7.22018 10.8438 8.18688 10.8438 9.17578C10.8438 10.5019 11.3705 11.7736 12.3082 12.7113C13.2459 13.649 14.5177 14.1758 15.8438 14.1758Z" fill="#FFE69A"/>
                    <path d="M23.3438 26.6758C23.6753 26.6758 23.9932 26.5441 24.2276 26.3097C24.4621 26.0752 24.5938 25.7573 24.5938 25.4258C24.5938 23.1051 23.6719 20.8795 22.0309 19.2386C20.39 17.5977 18.1644 16.6758 15.8438 16.6758C13.5231 16.6758 11.2975 17.5977 9.65657 19.2386C8.01562 20.8795 7.09375 23.1051 7.09375 25.4258C7.09375 25.7573 7.22545 26.0752 7.45987 26.3097C7.69429 26.5441 8.01223 26.6758 8.34375 26.6758H23.3438Z" fill="#FFE69A"/>
                    </svg>
                    <p class="goto-follow">FOLLOW</p>
                </div>
                <h2>FOLLOWER</h2>   
                <svg class="follower-Box-X" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4379 13.0007L25.3962 4.06321C25.7885 3.67091 26.0089 3.13884 26.0089 2.58405C26.0089 2.02925 25.7885 1.49718 25.3962 1.10488C25.0039 0.712579 24.4718 0.492187 23.917 0.492188C23.3622 0.492188 22.8302 0.712579 22.4379 1.10488L13.5004 10.0632L4.56286 1.10488C4.17056 0.712579 3.63849 0.492187 3.08369 0.492188C2.5289 0.492188 1.99683 0.712579 1.60453 1.10488C1.21223 1.49718 0.991837 2.02925 0.991837 2.58405C0.991837 3.13884 1.21223 3.67091 1.60453 4.06321L10.5629 13.0007L1.60453 21.9382C1.40926 22.1319 1.25427 22.3623 1.1485 22.6162C1.04274 22.87 0.988281 23.1424 0.988281 23.4174C0.988281 23.6924 1.04274 23.9647 1.1485 24.2186C1.25427 24.4725 1.40926 24.7029 1.60453 24.8965C1.7982 25.0918 2.02862 25.2468 2.28249 25.3526C2.53637 25.4583 2.80867 25.5128 3.08369 25.5128C3.35872 25.5128 3.63102 25.4583 3.8849 25.3526C4.13877 25.2468 4.36919 25.0918 4.56286 24.8965L13.5004 15.9382L22.4379 24.8965C22.6315 25.0918 22.862 25.2468 23.1158 25.3526C23.3697 25.4583 23.642 25.5128 23.917 25.5128C24.1921 25.5128 24.4644 25.4583 24.7182 25.3526C24.9721 25.2468 25.2025 25.0918 25.3962 24.8965C25.5915 24.7029 25.7465 24.4725 25.8522 24.2186C25.958 23.9647 26.0124 23.6924 26.0124 23.4174C26.0124 23.1424 25.958 22.87 25.8522 22.6162C25.7465 22.3623 25.5915 22.1319 25.3962 21.9382L16.4379 13.0007Z" fill="#231F20"/>
                </svg>
            </div>
            <div class="h4"></div>
            <%-- <h4 class="h4">팔로우 ()</h4> --%>
            <div class="followList"> <!-- 메세지 목록 -->
                <%--<div class="followExample">
                    <div class=userProfile>
                        <a href=""><div class="probox"><img src="" alt=""></div></a>
                        <a href=""><p>김핑퐁</p></a>
                    </div>
                    <div class="followManage">
                        <button class="unfollow">UNFOLLOW</button>
                    </div> 
                </div>--%>
            </div>
        </div>
    </div>
        

    <!-- 상세페이지 구역!!!! -->
    <!-- !!!!!!!!!!!!!여기까지가 상세페이지 입니다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 전부 옮겨주세요!!!!!!!!!!!!!!!! -->


    <!-- 게시글 클릭 했을 때 상세페이지 -->
    <div id="boardModal" class="BoardBackground BoardBackground-close"> <!-- 게시글 불투명 배경 -->
    
        <div class="BoardMainContainer"> <!-- 게시글 하얀 배경 -->
    
            <div class="BoardContainerleft">
                <div class="BoardPicture slide">
                    <!-- 게시글 이미지 슬라이드 들어가는 곳 -->
                    <div class="slide_prev_button slide_button">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.8121 39.5833C28.5008 39.5844 28.1933 39.5157 27.9121 39.3823C27.6309 39.2489 27.3831 39.0542 27.1871 38.8125L17.1246 26.3125C16.8181 25.9397 16.6506 25.4721 16.6506 24.9896C16.6506 24.507 16.8181 24.0394 17.1246 23.6667L27.5412 11.1667C27.8949 10.7412 28.403 10.4737 28.9539 10.4229C29.5048 10.3721 30.0533 10.5422 30.4787 10.8958C30.9042 11.2495 31.1717 11.7576 31.2225 12.3085C31.2733 12.8594 31.1032 13.4079 30.7496 13.8333L21.4371 25L30.4371 36.1667C30.6918 36.4725 30.8537 36.8449 30.9034 37.2397C30.9531 37.6346 30.8887 38.0355 30.7178 38.395C30.5468 38.7544 30.2765 39.0573 29.9388 39.2679C29.601 39.4785 29.2101 39.588 28.8121 39.5833Z" fill="#231F20"/>
                        </svg>
                    </div>
                    <div class="slide_next_button slide_button">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8324 39.583C20.3456 39.584 19.8738 39.4145 19.499 39.1039C19.2881 38.929 19.1137 38.7142 18.9859 38.4718C18.8581 38.2294 18.7793 37.9642 18.7542 37.6913C18.729 37.4185 18.7579 37.1433 18.8393 36.8816C18.9206 36.62 19.0528 36.3769 19.2282 36.1664L28.5615 24.9997L19.5615 13.8122C19.3885 13.5991 19.2592 13.3539 19.1813 13.0907C19.1033 12.8275 19.0781 12.5515 19.1071 12.2785C19.1362 12.0055 19.2189 11.741 19.3505 11.5001C19.4821 11.2592 19.66 11.0466 19.874 10.8747C20.0896 10.6851 20.342 10.542 20.6155 10.4545C20.8889 10.367 21.1775 10.337 21.4631 10.3664C21.7488 10.3957 22.0252 10.4838 22.2752 10.625C22.5251 10.7663 22.7432 10.9577 22.9157 11.1872L32.9782 23.6872C33.2846 24.06 33.4521 24.5276 33.4521 25.0101C33.4521 25.4927 33.2846 25.9603 32.9782 26.333L22.5615 38.833C22.3525 39.0852 22.087 39.2845 21.7866 39.4148C21.4862 39.5451 21.1592 39.6027 20.8324 39.583Z" fill="#231F20"/>
                        </svg>
                    </div>
                </div>
                <ul class="slide_pagination"></ul>
            </div>

            <!-- **************************************************************************************************** -->
            <div class="BoardContainerright"> <!-- 오른쪽 게시글 영역 -->
                <div> <!-- 프사 + 이름 + 소개 -->
                    <div class="porfileRac">
                        <!-- 프로필 이미지 들어가는 곳 -->
                    </div>
                    <div class="boardMemberInfo">
                        <!-- 닉네임, 한줄 소개 들어가는 곳 -->
                    </div>
                </div>
                    <!-- 게시글 중단 -->
                <div class="Boardcontent"> <!-- 게시글 내용 + 좋아요 수 -->
                    <div class="postcontent"> <!-- 게시글 내용 박스 -->
                        <div class="BoardPost">
                            <!-- 게시글 내용 들어가는 곳 -->
                        </div>
                        <div class="Boardcontent1"> <!-- 게시글 내용 + 좋아요 수 -->
                    
                        </div> 
                        <!-- 게시글  좋아요 -->
                        
                    </div>
                    
                </div>

                <!-- 이전 버튼 클릭시 전환 화면 -->
                    
                    
                <!-- 댓글 예시 -->
                <!--<div class="postcontent1"> 
                        <div class="BoardPost1">
                            <a href="#" class="Boardprofile1"></a>
                        </div>
                        <div>
                            <a href="#">김핑퐁</a>
                            <p>게시글 정보 입니다. (회원 소개글 들어가도 됨)</p>
                        </div>
                    </div> -->

                <!-- 하단 영역 -->
                <!-- 댓글 영역 -->
                <!-- <c:if test="${not empty loginMember}"> -->
                    <div>
                        <div class="BoardHeartBox"> 
                                
                            <svg class="BoardHeart boardLike" id="boardLike" width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 21.2466C12.3355 21.2475 12.1725 21.216 12.0202 21.1538C11.8679 21.0916 11.7294 21 11.6126 20.8841L1.90142 11.1604C0.683282 9.92955 0 8.26776 0 6.53604C0 4.80431 0.683282 3.14252 1.90142 1.91166C3.12908 0.687457 4.79207 0 6.5258 0C8.25953 0 9.92252 0.687457 11.1502 1.91166L12.5 3.26147L13.8498 1.91166C15.0775 0.687457 16.7405 0 18.4742 0C20.2079 0 21.8709 0.687457 23.0986 1.91166C24.3167 3.14252 25 4.80431 25 6.53604C25 8.26776 24.3167 9.92955 23.0986 11.1604L13.3874 20.8841C13.2706 21 13.1321 21.0916 12.9798 21.1538C12.8275 21.216 12.6645 21.2475 12.5 21.2466ZM6.5258 2.49908C5.99671 2.49668 5.47241 2.59929 4.98327 2.80095C4.49412 3.00262 4.04984 3.29934 3.67618 3.67392C2.92136 4.43272 2.49763 5.45949 2.49763 6.52979C2.49763 7.60008 2.92136 8.62685 3.67618 9.38565L12.5 18.222L21.3238 9.38565C22.0786 8.62685 22.5024 7.60008 22.5024 6.52979C22.5024 5.45949 22.0786 4.43272 21.3238 3.67392C20.5535 2.94615 19.5339 2.54069 18.4742 2.54069C17.4145 2.54069 16.3949 2.94615 15.6246 3.67392L13.3874 5.92362C13.2712 6.04076 13.133 6.13374 12.9807 6.1972C12.8284 6.26065 12.665 6.29332 12.5 6.29332C12.335 6.29332 12.1716 6.26065 12.0193 6.1972C11.867 6.13374 11.7288 6.04076 11.6126 5.92362L9.37542 3.67392C9.00175 3.29934 8.55748 3.00262 8.06833 2.80095C7.57918 2.59929 7.05488 2.49668 6.5258 2.49908Z" fill="#231F20"/>
                            </svg>

                            <svg class="BoardRedHeart boardLike" id="boardLike" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5017 21.2494C12.3372 21.2504 12.1741 21.2188 12.0218 21.1566C11.8695 21.0944 11.731 21.0028 11.6142 20.8869L1.90167 11.1619C0.683373 9.93088 0 8.26887 0 6.53691C0 4.80495 0.683373 3.14294 1.90167 1.91191C3.1295 0.687549 4.79271 0 6.52667 0C8.26063 0 9.92384 0.687549 11.1517 1.91191L12.5017 3.26191L13.8517 1.91191C15.0795 0.687549 16.7427 0 18.4767 0C20.2106 0 21.8738 0.687549 23.1017 1.91191C24.32 3.14294 25.0033 4.80495 25.0033 6.53691C25.0033 8.26887 24.32 9.93088 23.1017 11.1619L13.3892 20.8869C13.2724 21.0028 13.1339 21.0944 12.9816 21.1566C12.8293 21.2188 12.6662 21.2504 12.5017 21.2494Z" fill="#FF2F2F"/>
                            </svg>

                            <span class="likeCount">
                                <!-- 좋아요 수 들어가는 곳 --> 
                            <span>
                        </div>
                        <div class="BoardCommentBox">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.002 16.25C15.6923 16.25 16.252 15.6904 16.252 15C16.252 14.3096 15.6923 13.75 15.002 13.75C14.3116 13.75 13.752 14.3096 13.752 15C13.752 15.6904 14.3116 16.25 15.002 16.25Z" fill="#231F20"/>
                            <path d="M20.0039 16.25C20.6943 16.25 21.2539 15.6904 21.2539 15C21.2539 14.3096 20.6943 13.75 20.0039 13.75C19.3136 13.75 18.7539 14.3096 18.7539 15C18.7539 15.6904 19.3136 16.25 20.0039 16.25Z" fill="#231F20"/>
                            <path d="M10.002 16.25C10.6923 16.25 11.252 15.6904 11.252 15C11.252 14.3096 10.6923 13.75 10.002 13.75C9.3116 13.75 8.75195 14.3096 8.75195 15C8.75195 15.6904 9.3116 16.25 10.002 16.25Z" fill="#231F20"/>
                            <path d="M23.8402 6.16265C21.7892 4.09828 19.0823 2.81417 16.186 2.5317C13.2897 2.24924 10.3856 2.98612 7.97444 4.61531C5.56324 6.24451 3.79601 8.66391 2.97742 11.4564C2.15883 14.2489 2.34018 17.2395 3.49021 19.9126C3.61007 20.1611 3.6494 20.4408 3.60271 20.7126L2.50271 26.0001C2.46033 26.2029 2.46899 26.4129 2.5279 26.6115C2.58681 26.81 2.69413 26.9908 2.84021 27.1376C2.95997 27.2565 3.10255 27.3499 3.25938 27.4122C3.4162 27.4745 3.58402 27.5044 3.75271 27.5001H4.00271L9.35271 26.4251C9.62462 26.3925 9.90036 26.4312 10.1527 26.5376C12.8258 27.6877 15.8164 27.869 18.6089 27.0504C21.4015 26.2319 23.8209 24.4646 25.45 22.0534C27.0792 19.6422 27.8161 16.7381 27.5337 13.8419C27.2512 10.9456 25.9671 8.23863 23.9027 6.18765L23.8402 6.16265ZM24.8777 16.6126C24.6333 18.1051 24.0536 19.5227 23.1821 20.7588C22.3107 21.9948 21.1703 23.0171 19.8466 23.7487C18.523 24.4803 17.0507 24.9022 15.5405 24.9825C14.0303 25.0629 12.5215 24.7997 11.1277 24.2126C10.6334 24.0024 10.1024 23.8919 9.56521 23.8876C9.33056 23.8893 9.09644 23.9102 8.86521 23.9501L5.34021 24.6626L6.05271 21.1376C6.19462 20.3742 6.10314 19.5858 5.79021 18.8751C5.2032 17.4814 4.93997 15.9726 5.02033 14.4624C5.10068 12.9522 5.52254 11.4798 6.25414 10.1562C6.98574 8.83259 8.00803 7.69215 9.24408 6.82071C10.4801 5.94928 11.8977 5.36954 13.3902 5.12515C14.9568 4.86804 16.5621 4.98762 18.0733 5.47398C19.5845 5.96033 20.9582 6.7995 22.0808 7.92207C23.2034 9.04464 24.0425 10.4183 24.5289 11.9296C25.0152 13.4408 25.1348 15.0461 24.8777 16.6126Z" fill="#231F20"/>
                            </svg>
                            <textarea name="commentContent" id="commentContentArea" placeholder="댓글 달기..." autocomplete="off" autocorrect="off"></textarea>
                            <p id="insertComment">게시</p>
                        </div>
                    </div>
                    <!-- <div class="BoardCommentBox1">
                        <div class="BoardCommentProfile1">
                            <a href="#" class="Boardprofile1"></a>
                        </div>    
                        
                        <textarea class="BoardCommentText1" cols="30" rows="10"></textarea>
                        
                        <div class="BoardCommentBtn1">
                            <button>확인</button>
                            <button>이전</button>
                        </div>
                    </div> -->
                <!-- </c:if> -->
            </div>
            <!-- **************************************************************************************************** -->

            <button class="BoardClose">
                <svg width="32" height="32" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9379 25.4997L36.8962 16.5622C37.2885 16.1699 37.5089 15.6379 37.5089 15.0831C37.5089 14.5283 37.2885 13.9962 36.8962 13.6039C36.5039 13.2116 35.9718 12.9912 35.417 12.9912C34.8622 12.9912 34.3302 13.2116 33.9379 13.6039L25.0004 22.5622L16.0629 13.6039C15.6706 13.2116 15.1385 12.9912 14.5837 12.9912C14.0289 12.9912 13.4968 13.2116 13.1045 13.6039C12.7122 13.9962 12.4918 14.5283 12.4918 15.0831C12.4918 15.6379 12.7122 16.1699 13.1045 16.5622L22.0629 25.4997L13.1045 34.4372C12.9093 34.6309 12.7543 34.8613 12.6485 35.1152C12.5427 35.3691 12.4883 35.6414 12.4883 35.9164C12.4883 36.1914 12.5427 36.4637 12.6485 36.7176C12.7543 36.9715 12.9093 37.2019 13.1045 37.3956C13.2982 37.5908 13.5286 37.7458 13.7825 37.8516C14.0364 37.9574 14.3087 38.0118 14.5837 38.0118C14.8587 38.0118 15.131 37.9574 15.3849 37.8516C15.6388 37.7458 15.8692 37.5908 16.0629 37.3956L25.0004 28.4372L33.9379 37.3956C34.1315 37.5908 34.362 37.7458 34.6158 37.8516C34.8697 37.9574 35.142 38.0118 35.417 38.0118C35.6921 38.0118 35.9644 37.9574 36.2182 37.8516C36.4721 37.7458 36.7025 37.5908 36.8962 37.3956C37.0915 37.2019 37.2465 36.9715 37.3522 36.7176C37.458 36.4637 37.5124 36.1914 37.5124 35.9164C37.5124 35.6414 37.458 35.3691 37.3522 35.1152C37.2465 34.8613 37.0915 34.6309 36.8962 34.4372L27.9379 25.4997Z" fill="#231F20"/>
                </svg>
            </button>
    
        </div>
        <div class="BoardIconBox">

            <div class = "BoardIcon"><!-- 저장 -->
                    <svg class = "markOff boardMark" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class = "markOff boardMark" cx="30" cy="30" r="30" fill="white"/>
                        <path class = "markOff boardMark" d="M20.1502 45.1C19.7082 45.1 19.2843 44.9244 18.9717 44.6118C18.6591 44.2993 18.4835 43.8754 18.4835 43.4333L18.2335 19C18.2135 18.5039 18.2917 18.0087 18.4637 17.543C18.6357 17.0772 18.898 16.6501 19.2357 16.2861C19.5734 15.9221 19.9797 15.6284 20.4312 15.422C20.8828 15.2156 21.3707 15.1005 21.8669 15.0833L37.8502 15C38.3471 15.0087 38.8374 15.1152 39.2931 15.3133C39.7488 15.5115 40.1609 15.7976 40.5061 16.1551C40.8512 16.5126 41.1225 16.9346 41.3046 17.397C41.4866 17.8594 41.5757 18.3531 41.5669 18.85L41.8002 43.2833C41.8031 43.5754 41.7291 43.8631 41.5858 44.1176C41.4425 44.372 41.2348 44.5844 40.9835 44.7333C40.7302 44.8796 40.4428 44.9566 40.1502 44.9566C39.8577 44.9566 39.5702 44.8796 39.3169 44.7333L29.8169 39.4667L21.0002 44.85C20.7391 44.9958 20.4487 45.0813 20.1502 45.1ZM29.7502 35.85C30.0398 35.8505 30.3253 35.919 30.5835 36.05L38.4335 40.4L38.2335 18.8167C38.2335 18.4833 38.0169 18.25 37.8835 18.2667L21.8835 18.4167C21.7502 18.4167 21.5669 18.6333 21.5669 18.9667L21.7669 40.4667L28.9002 36.0833C29.1593 35.935 29.4517 35.8547 29.7502 35.85Z" fill="#231F20"/>
                    </svg>
            
                    <svg class = "markOn boardMark" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class = "markOn boardMark" cx="30" cy="30" r="30" fill="#5286DC"/>
                        <path class = "markOn boardMark" d="M20.1502 45.1C19.7082 45.1 19.2843 44.9244 18.9717 44.6118C18.6591 44.2993 18.4835 43.8754 18.4835 43.4333L18.2335 19C18.2135 18.5039 18.2917 18.0087 18.4637 17.543C18.6357 17.0772 18.898 16.6501 19.2357 16.2861C19.5734 15.9221 19.9797 15.6284 20.4312 15.422C20.8828 15.2156 21.3707 15.1005 21.8669 15.0833L37.8502 15C38.3471 15.0087 38.8374 15.1152 39.2931 15.3133C39.7488 15.5115 40.1609 15.7976 40.5061 16.1551C40.8512 16.5126 41.1225 16.9346 41.3046 17.397C41.4866 17.8594 41.5757 18.3531 41.5669 18.85L41.8002 43.2833C41.8031 43.5754 41.7291 43.8631 41.5858 44.1176C41.4425 44.372 41.2348 44.5844 40.9835 44.7333C40.7302 44.8796 40.4428 44.9566 40.1502 44.9566C39.8577 44.9566 39.5702 44.8796 39.3169 44.7333L29.8169 39.4667L21.0002 44.85C20.7391 44.9958 20.4487 45.0813 20.1502 45.1ZM29.7502 35.85C30.0398 35.8505 30.3253 35.919 30.5835 36.05L38.4335 40.4L38.2335 18.8167C38.2335 18.4833 38.0169 18.25 37.8835 18.2667L21.8835 18.4167C21.7502 18.4167 21.5669 18.6333 21.5669 18.9667L21.7669 40.4667L28.9002 36.0833C29.1593 35.935 29.4517 35.8547 29.7502 35.85Z" fill="white"/>
                    </svg>
                
                <p class="BoardIconInfo">저장</p>
            </div>

            <div class="BoardIcon"><!-- 공유 -->
                <a href="#">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white"/>
                    <path d="M40.0009 35.0001C38.6915 35.0012 37.4349 35.5159 36.5009 36.4335L23.3342 30.5668C23.3342 30.3668 23.3342 30.2001 23.3342 30.0001C23.3342 29.8001 23.3342 29.6335 23.3342 29.4501L36.5009 23.5668C37.3256 24.3752 38.4046 24.8732 39.5548 24.9762C40.705 25.0792 41.8554 24.7809 42.8107 24.1319C43.7659 23.483 44.467 22.5234 44.795 21.4161C45.1229 20.3089 45.0575 19.1222 44.6099 18.0577C44.1622 16.9932 43.3598 16.1165 42.3391 15.5765C41.3183 15.0365 40.1421 14.8664 39.0102 15.0952C37.8783 15.324 36.8605 15.9376 36.1296 16.8317C35.3988 17.7258 34.9999 18.8453 35.0009 20.0002V20.5668L21.8342 26.4335C21.1315 25.7431 20.2404 25.2756 19.273 25.0899C18.3055 24.9041 17.3047 25.0082 16.3963 25.3893C15.4878 25.7703 14.7121 26.4112 14.1666 27.2315C13.6211 28.0518 13.3301 29.015 13.3301 30.0001C13.3301 30.9853 13.6211 31.9485 14.1666 32.7688C14.7121 33.5891 15.4878 34.23 16.3963 34.611C17.3047 34.9921 18.3055 35.0962 19.273 34.9104C20.2404 34.7247 21.1315 34.2572 21.8342 33.5668L35.0009 39.4501V40.0001C35.0009 40.9891 35.2941 41.9558 35.8435 42.778C36.3929 43.6002 37.1738 44.2411 38.0875 44.6195C39.0011 44.998 40.0064 45.097 40.9763 44.9041C41.9462 44.7111 42.8371 44.2349 43.5364 43.5357C44.2357 42.8364 44.7119 41.9455 44.9048 40.9756C45.0977 40.0057 44.9987 39.0004 44.6203 38.0867C44.2418 37.1731 43.601 36.3922 42.7787 35.8428C41.9565 35.2934 40.9898 35.0001 40.0009 35.0001ZM40.0009 18.3335C40.3305 18.3335 40.6527 18.4312 40.9268 18.6144C41.2009 18.7975 41.4145 19.0578 41.5407 19.3623C41.6668 19.6669 41.6998 20.002 41.6355 20.3253C41.5712 20.6486 41.4125 20.9456 41.1794 21.1787C40.9463 21.4117 40.6493 21.5705 40.326 21.6348C40.0027 21.6991 39.6676 21.6661 39.3631 21.5399C39.0585 21.4138 38.7982 21.2002 38.6151 20.9261C38.4319 20.652 38.3342 20.3298 38.3342 20.0002C38.3342 19.5581 38.5098 19.1342 38.8224 18.8216C39.1349 18.5091 39.5588 18.3335 40.0009 18.3335ZM18.3342 31.6668C18.0046 31.6668 17.6823 31.5691 17.4083 31.3859C17.1342 31.2028 16.9205 30.9425 16.7944 30.638C16.6683 30.3334 16.6353 29.9983 16.6996 29.675C16.7639 29.3517 16.9226 29.0547 17.1557 28.8216C17.3888 28.5886 17.6858 28.4298 18.0091 28.3655C18.3324 28.3012 18.6675 28.3342 18.972 28.4604C19.2766 28.5865 19.5368 28.8001 19.72 29.0742C19.9031 29.3483 20.0009 29.6705 20.0009 30.0001C20.0009 30.4422 19.8253 30.8661 19.5127 31.1787C19.2002 31.4912 18.7762 31.6668 18.3342 31.6668ZM40.0009 41.6668C39.6712 41.6668 39.349 41.5691 39.0749 41.3859C38.8008 41.2028 38.5872 40.9425 38.4611 40.638C38.3349 40.3334 38.3019 39.9983 38.3662 39.675C38.4305 39.3517 38.5893 39.0547 38.8224 38.8216C39.0554 38.5885 39.3524 38.4298 39.6757 38.3655C39.999 38.3012 40.3341 38.3342 40.6387 38.4604C40.9432 38.5865 41.2035 38.8001 41.3867 39.0742C41.5698 39.3483 41.6675 39.6705 41.6675 40.0001C41.6675 40.4422 41.4919 40.8661 41.1794 41.1787C40.8668 41.4912 40.4429 41.6668 40.0009 41.6668Z" fill="#231F20"/>
                    </svg>
                </a>
                <p class="BoardIconInfo">공유</p>
            </div>

            <%-- <div class = "BoardIcon"> <!-- 메세지 -->
                <a href="#" class="BoardIconMessage">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white"/>
                    <path d="M44.9985 16.666C44.9811 16.5129 44.9476 16.362 44.8985 16.216V16.066C44.8186 15.8805 44.7056 15.7111 44.5651 15.566C44.4237 15.4331 44.2601 15.3259 44.0818 15.2493H43.9318C43.7782 15.132 43.6024 15.047 43.4151 14.9993H43.3318C43.1661 14.9742 42.9975 14.9742 42.8318 14.9993L12.8318 24.9993C12.4983 25.1089 12.208 25.321 12.0022 25.6053C11.7964 25.8896 11.6855 26.2317 11.6855 26.5827C11.6855 26.9337 11.7964 27.2757 12.0022 27.56C12.208 27.8443 12.4983 28.0564 12.8318 28.166L27.0485 32.8993L31.7818 47.116C31.8914 47.4494 32.1035 47.7398 32.3878 47.9456C32.6721 48.1514 33.0141 48.2622 33.3651 48.2622C33.7161 48.2622 34.0582 48.1514 34.3425 47.9456C34.6268 47.7398 34.8389 47.4494 34.9485 47.116L44.9485 17.116C44.9855 16.969 45.0023 16.8176 44.9985 16.666ZM37.1651 20.4827L27.8818 29.766L18.5985 26.666L37.1651 20.4827ZM33.3318 41.3993L30.2318 32.116L39.5151 22.8327L33.3318 41.3993Z" fill="#231F20"/>
                    </svg>
                </a>
                <p class="BoardIconInfo">메세지</p>
            </div> --%>

            <!-- 신고 눌렀을 때 신고할 수 있는 창 출력 -->
            <form action=""></form>
            <%-- <c:if test="${mypage.memberNo != loginMember.memberNo}" > --%>
            <div class="BoardIcon"> <!-- 신고 -->
                <a href="#" class="BoardIconReport">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="30" fill="white"/>
                        <path d="M47.5998 35.6678L34.8165 14.4678C34.2996 13.6591 33.5874 12.9937 32.7456 12.5327C31.9039 12.0717 30.9596 11.8301 29.9998 11.8301C29.0401 11.8301 28.0958 12.0717 27.254 12.5327C26.4123 12.9937 25.7001 13.6591 25.1832 14.4678L12.3998 35.6678C11.9483 36.4205 11.7028 37.2789 11.6882 38.1566C11.6736 39.0343 11.8903 39.9004 12.3165 40.6678C12.8093 41.5316 13.5226 42.249 14.3835 42.7468C15.2444 43.2446 16.2221 43.5049 17.2165 43.5011H42.7832C43.7711 43.5117 44.7443 43.2614 45.6046 42.7757C46.4649 42.2899 47.1819 41.5858 47.6832 40.7345C48.1219 39.9591 48.3456 39.0806 48.3309 38.1898C48.3163 37.299 48.0639 36.4283 47.5998 35.6678ZM44.7665 39.0845C44.5662 39.4288 44.2755 39.7117 43.9259 39.9027C43.5763 40.0937 43.1811 40.1853 42.7832 40.1678H17.2165C16.8185 40.1853 16.4234 40.0937 16.0738 39.9027C15.7242 39.7117 15.4335 39.4288 15.2332 39.0845C15.0869 38.8311 15.0099 38.5437 15.0099 38.2511C15.0099 37.9586 15.0869 37.6712 15.2332 37.4178L28.0332 16.2011C28.2632 15.8973 28.5605 15.6509 28.9017 15.4812C29.2429 15.3116 29.6188 15.2233 29.9998 15.2233C30.3809 15.2233 30.7568 15.3116 31.098 15.4812C31.4392 15.6509 31.7365 15.8973 31.9665 16.2011L44.7498 37.4011C44.9018 37.655 44.9834 37.9447 44.9863 38.2405C44.9893 38.5364 44.9134 38.8276 44.7665 39.0845Z" fill="#231F20"/>
                        <path d="M29.9987 36.8333C30.9192 36.8333 31.6654 36.0871 31.6654 35.1667C31.6654 34.2462 30.9192 33.5 29.9987 33.5C29.0782 33.5 28.332 34.2462 28.332 35.1667C28.332 36.0871 29.0782 36.8333 29.9987 36.8333Z" fill="#231F20"/>
                        <path d="M29.9987 21.834C29.5567 21.834 29.1327 22.0096 28.8202 22.3221C28.5076 22.6347 28.332 23.0586 28.332 23.5007V30.1673C28.332 30.6093 28.5076 31.0333 28.8202 31.3458C29.1327 31.6584 29.5567 31.834 29.9987 31.834C30.4407 31.834 30.8646 31.6584 31.1772 31.3458C31.4898 31.0333 31.6654 30.6093 31.6654 30.1673V23.5007C31.6654 23.0586 31.4898 22.6347 31.1772 22.3221C30.8646 22.0096 30.4407 21.834 29.9987 21.834Z" fill="#231F20"/>
                    </svg>
                </a>
                <p class="BoardIconInfo">신고</p>
            </div>
            <%-- </c:if> --%>
            <%-- <c:if test="${mypage.memberNo == loginMember.memberNo}" > --%>
            <div class="BoardIcon editing"> <!-- 게시글 편집 -->
                <input type="checkbox" id="editIcon">
                    <label for="editIcon">
                        <a href="#">
                            <svg class="boardEditing" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="boardEditing" cx="30" cy="30" r="30" fill="white"/>
                                <path class="boardEditing" d="M31.9201 19.12L37.0401 14L46 22.96L40.88 28.08M31.9201 19.12L14.5302 36.5099C14.1907 36.8493 14 37.3098 14 37.7899V46H22.2102C22.6903 46 23.1507 45.8094 23.4902 45.4698L40.88 28.08M31.9201 19.12L40.88 28.08" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> 
                        </a>
                    </label>    
                <p class="BoardIconInfo">편집</p>
            </div>
            <%-- </c:if> --%>
            <%-- <c:if test="${mypage.memberNo == loginMember.memberNo}" > --%>
            <div class="BoardIcon boardDeleteBtn editing"> <%-- 게시글 삭제 --%>
                <a href="#">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="white"/>
                    <path d="M44.9948 19.9971H36.6615V17.2138C36.6224 16.1468 36.1618 15.1389 35.3807 14.4109C34.5997 13.683 33.5619 13.2944 32.4948 13.3304H27.4948C26.4277 13.2944 25.3899 13.683 24.6088 14.4109C23.8278 15.1389 23.3672 16.1468 23.3281 17.2138V19.9971H14.9948C14.5528 19.9971 14.1288 20.1727 13.8163 20.4852C13.5037 20.7978 13.3281 21.2217 13.3281 21.6638C13.3281 22.1058 13.5037 22.5297 13.8163 22.8423C14.1288 23.1548 14.5528 23.3304 14.9948 23.3304H16.6615V41.6638C16.6615 42.9898 17.1882 44.2616 18.1259 45.1993C19.0636 46.137 20.3354 46.6638 21.6615 46.6638H38.3281C39.6542 46.6638 40.926 46.137 41.8637 45.1993C42.8013 44.2616 43.3281 42.9898 43.3281 41.6638V23.3304H44.9948C45.4368 23.3304 45.8607 23.1548 46.1733 22.8423C46.4859 22.5297 46.6615 22.1058 46.6615 21.6638C46.6615 21.2217 46.4859 20.7978 46.1733 20.4852C45.8607 20.1727 45.4368 19.9971 44.9948 19.9971ZM26.6615 17.2138C26.6615 16.9471 27.0115 16.6638 27.4948 16.6638H32.4948C32.9781 16.6638 33.3281 16.9471 33.3281 17.2138V19.9971H26.6615V17.2138ZM39.9948 41.6638C39.9948 42.1058 39.8192 42.5297 39.5066 42.8423C39.1941 43.1548 38.7702 43.3304 38.3281 43.3304H21.6615C21.2194 43.3304 20.7955 43.1548 20.4829 42.8423C20.1704 42.5297 19.9948 42.1058 19.9948 41.6638V23.3304H39.9948V41.6638Z" fill="#231F20"/>
                    <path d="M24.9948 38.332C25.4368 38.332 25.8607 38.1564 26.1733 37.8439C26.4859 37.5313 26.6615 37.1074 26.6615 36.6654V29.9987C26.6615 29.5567 26.4859 29.1327 26.1733 28.8202C25.8607 28.5076 25.4368 28.332 24.9948 28.332C24.5528 28.332 24.1288 28.5076 23.8163 28.8202C23.5037 29.1327 23.3281 29.5567 23.3281 29.9987V36.6654C23.3281 37.1074 23.5037 37.5313 23.8163 37.8439C24.1288 38.1564 24.5528 38.332 24.9948 38.332Z" fill="#231F20"/>
                    <path d="M34.9948 38.332C35.4368 38.332 35.8607 38.1564 36.1733 37.8439C36.4859 37.5313 36.6615 37.1074 36.6615 36.6654V29.9987C36.6615 29.5567 36.4859 29.1327 36.1733 28.8202C35.8607 28.5076 35.4368 28.332 34.9948 28.332C34.5528 28.332 34.1288 28.5076 33.8163 28.8202C33.5037 29.1327 33.3281 29.5567 33.3281 29.9987V36.6654C33.3281 37.1074 33.5037 37.5313 33.8163 37.8439C34.1288 38.1564 34.5528 38.332 34.9948 38.332Z" fill="#231F20"/>
                    </svg>
                </a>
                <p class="BoardIconInfo">삭제</p>
            </div>
            <%-- </c:if> --%>

        </div> 

        <!-- 신고 메세지 -->
        <section class="BoardIconReportMod"> <!-- 1:1 문의 창 -->
            <div id="grayBackground">
                <div id="oneToOne">
                    <!-- 로고, X버튼 -->
                    <div>                
                        <svg width="150" height="31" viewBox="0 0 150 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M18.6834 4.28677C18.6834 6.44287 16.9355 8.19073 14.7794 8.19073C12.6234 8.19073 10.8755 6.44287 10.8755 4.28677C10.8755 2.13068 12.6234 0.382812 14.7794 0.382812C16.9355 0.382812 18.6834 2.13068 18.6834 4.28677Z" fill="#A8C3F0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5871 24.7553C26.4056 23.9802 29.2796 20.6043 29.2796 16.557C29.2796 11.9368 25.5342 8.19141 20.914 8.19141C16.2938 8.19141 12.5483 11.9368 12.5483 16.557C12.5483 20.6043 15.4224 23.9802 19.2409 24.7553V28.8266C19.2409 29.7507 19.9899 30.4998 20.914 30.4998C21.838 30.4998 22.5871 29.7507 22.5871 28.8266V24.7553Z" fill="#92B4EC" fill-opacity="0.8"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0388 24.7553C13.8573 23.9802 16.7313 20.6042 16.7313 16.557C16.7313 11.9368 12.9858 8.19141 8.36563 8.19141C3.74542 8.19141 0 11.9368 0 16.557C0 20.6043 2.87408 23.9803 6.6926 24.7553V28.8266C6.6926 29.7507 7.44168 30.4998 8.36572 30.4998C9.28977 30.4998 10.0388 29.7507 10.0388 28.8266V24.7553Z" fill="#F5DA8A" fill-opacity="0.8"/>
                            <path d="M44.0563 12.3575C43.7635 12.2404 43.5293 12.1819 43.3536 12.1819C43.1975 12.1819 42.9047 12.2599 42.4752 12.4161C42.1629 12.5137 41.9482 12.6894 41.8311 12.9431C41.7335 13.1774 41.6847 13.6166 41.6847 14.2607C41.6847 14.6511 41.6944 14.9634 41.714 15.1977L41.8018 16.8959L42.3874 16.8666C43.1292 16.8081 43.8221 16.4762 44.4663 15.8711C45.1299 15.266 45.4618 14.6609 45.4618 14.0558C45.4618 13.7239 45.3251 13.3921 45.0519 13.0603C44.7786 12.7284 44.4467 12.4942 44.0563 12.3575ZM41.6847 9.57597C42.1727 9.34173 42.8168 9.22461 43.6171 9.22461C44.2223 9.22461 44.7883 9.30269 45.3154 9.45885C45.8424 9.59549 46.467 9.98588 47.1893 10.63C48.2824 11.6255 48.8289 12.787 48.8289 14.1143C48.8289 14.251 48.8094 14.4559 48.7704 14.7292C48.5557 16.0956 47.8529 17.3156 46.6622 18.3892C45.4715 19.4627 44.2223 20.0093 42.9144 20.0288H41.8896V24.2744C41.8896 26.3044 41.8701 27.5439 41.8311 27.9929C41.792 28.4419 41.6749 28.7639 41.4797 28.9591C41.1089 29.3495 40.6892 29.5447 40.2207 29.5447C39.8693 29.5447 39.5473 29.4178 39.2545 29.1641C38.9812 28.9298 38.786 28.598 38.6689 28.1686C38.5908 27.7391 38.5518 25.592 38.5518 21.727V19.4139C38.5713 15.6271 38.6103 13.314 38.6689 12.4747C38.7274 11.6353 38.8641 11.0595 39.0788 10.7472C39.2545 10.5129 39.4789 10.3372 39.7522 10.2201C40.0255 10.0835 40.3573 9.96636 40.7477 9.86876C41.1577 9.77116 41.47 9.67357 41.6847 9.57597Z" fill="black"/>
                            <path d="M53.3723 11.7427C53.9384 11.6451 54.9144 11.5767 56.3003 11.5377H56.8566C57.8131 11.5377 58.4279 11.6743 58.7012 11.9476C58.9355 12.2014 59.0526 12.5039 59.0526 12.8553C59.0526 13.1871 58.9452 13.4994 58.7305 13.7922C58.5158 14.085 58.2328 14.2705 57.8814 14.3486C57.5496 14.4462 57.3348 14.778 57.2372 15.3441C57.1592 15.9101 57.1201 17.1789 57.1201 19.1504V22.2541L57.735 22.4005C58.5939 22.6152 59.0233 23.1032 59.0233 23.8645C59.0233 24.411 58.8086 24.7819 58.3792 24.9771C57.9497 25.1723 57.0811 25.2992 55.7733 25.3577C55.5 25.3772 55.1486 25.387 54.7192 25.387C53.9579 25.387 53.4114 25.3187 53.0795 25.182C52.7477 25.0259 52.5232 24.7526 52.4061 24.3622C52.3866 24.3232 52.3768 24.2451 52.3768 24.128C52.3768 23.8742 52.4842 23.6009 52.6989 23.3081C52.9136 23.0154 53.1576 22.8104 53.4309 22.6933C53.6456 22.6152 53.7822 22.4786 53.8408 22.2834C53.9189 22.0686 53.9872 21.5611 54.0458 20.7608C54.1434 19.7263 54.1922 18.3794 54.1922 16.7202V14.4657H53.548C53.099 14.4657 52.7184 14.29 52.4061 13.9386C52.0547 13.5873 51.8791 13.2554 51.8791 12.9431C51.8791 12.6503 52.0059 12.3966 52.2597 12.1819C52.533 11.9671 52.9038 11.8207 53.3723 11.7427Z" fill="black"/>
                            <path d="M62.7576 12.3283C62.8747 11.5475 63.109 10.9814 63.4603 10.63C63.8117 10.2787 64.0947 10.103 64.3094 10.103C64.5437 10.103 64.9633 10.3275 65.5685 10.7764C65.9784 11.0888 66.4566 11.6451 67.0032 12.4454C67.5497 13.2262 68.3988 14.5828 69.5505 16.5153C69.8043 16.9837 70.0092 17.218 70.1654 17.218C70.302 17.218 70.3703 16.2127 70.3703 14.2022C70.3703 12.2111 70.4875 11.0497 70.7217 10.7179C70.9364 10.4056 71.2682 10.2494 71.7172 10.2494C72.1466 10.2494 72.5175 10.4056 72.8298 10.7179C73.025 10.9131 73.1421 11.3523 73.1812 12.0355C73.2202 12.7187 73.2593 14.5535 73.2983 17.54C73.3178 18.6527 73.3276 19.9312 73.3276 21.3757C73.3276 22.6054 73.2983 23.3765 73.2397 23.6888C73.2007 23.9816 73.0836 24.2061 72.8884 24.3622C72.537 24.6745 72.215 24.8307 71.9222 24.8307C71.4537 24.8307 70.9169 24.4696 70.3118 23.7473C69.7067 23.0056 68.8966 21.7563 67.8816 19.9995C66.5542 17.7157 65.832 16.5738 65.7149 16.5738C65.6173 16.5738 65.5294 17.745 65.4513 20.0874C65.3537 22.0394 65.2464 23.2984 65.1293 23.8645C65.0121 24.4305 64.7584 24.8014 64.368 24.9771C64.0752 25.1137 63.8214 25.182 63.6067 25.182C63.353 25.182 63.0406 25.0259 62.6698 24.7136L62.0842 24.2158L62.3477 18.7698C62.5234 15.2367 62.66 13.0895 62.7576 12.3283Z" fill="black"/>
                            <path d="M81.1562 9.60525C81.5076 9.48813 81.8785 9.42957 82.2689 9.42957C82.9911 9.42957 83.6841 9.61501 84.3477 9.98588C85.0309 10.3372 85.5775 10.8252 85.9874 11.4499C86.3973 12.0745 86.6023 12.6113 86.6023 13.0603C86.6023 13.3726 86.4949 13.6849 86.2802 13.9972C86.085 14.3095 85.8117 14.4657 85.4604 14.4657C84.9724 14.4657 84.377 14.1534 83.6743 13.5287C82.9716 12.9041 82.5812 12.5918 82.5031 12.5918C82.2689 12.5918 81.9175 12.7382 81.449 13.031C81.0001 13.3042 80.6682 13.5775 80.4535 13.8508C79.7899 14.7292 79.458 15.998 79.458 17.6572C79.458 19.6091 79.8875 20.9658 80.7463 21.727C81.1758 22.0784 81.6345 22.2541 82.1225 22.2541C82.1615 22.2541 82.2298 22.2541 82.3274 22.2541C82.4445 22.2346 82.5324 22.2248 82.5909 22.2248L83.7914 22.1662L83.85 21.405C83.85 21.3659 83.85 21.3074 83.85 21.2293C83.8695 21.1512 83.8793 21.1024 83.8793 21.0829C83.8793 20.8682 83.8305 20.7315 83.7329 20.673C83.6353 20.5949 83.4303 20.5363 83.118 20.4973C82.7081 20.3997 82.3079 20.1947 81.9175 19.8824C81.5466 19.5701 81.3612 19.2773 81.3612 19.004C81.3612 18.7503 81.5369 18.4672 81.8882 18.1549C82.2396 17.8036 82.7861 17.6279 83.5279 17.6279C84.1525 17.6279 84.7772 17.7548 85.4018 18.0085C86.046 18.2623 86.4559 18.5551 86.6315 18.8869C86.7877 19.1992 86.8658 19.8434 86.8658 20.8194C86.8658 22.459 86.7291 23.5717 86.4559 24.1573C86.2412 24.5672 85.9191 24.8405 85.4896 24.9771C85.0797 25.0942 84.1037 25.2211 82.5617 25.3577C82.425 25.3772 82.2396 25.387 82.0054 25.387C80.8537 25.387 79.8289 25.0747 78.931 24.4501C78.0526 23.8059 77.3889 22.8982 76.94 21.727C76.53 20.6535 76.3251 19.1407 76.3251 17.1887C76.3251 16.3493 76.3837 15.6661 76.5008 15.1391C76.774 13.7922 77.3304 12.6211 78.1697 11.6255C79.0091 10.63 80.0046 9.9566 81.1562 9.60525Z" fill="black"/>
                            <path d="M102.616 12.3575C102.323 12.2404 102.089 12.1819 101.913 12.1819C101.757 12.1819 101.464 12.2599 101.035 12.4161C100.722 12.5137 100.508 12.6894 100.39 12.9431C100.293 13.1774 100.244 13.6166 100.244 14.2607C100.244 14.6511 100.254 14.9634 100.273 15.1977L100.361 16.8959L100.947 16.8666C101.689 16.8081 102.382 16.4762 103.026 15.8711C103.689 15.266 104.021 14.6609 104.021 14.0558C104.021 13.7239 103.885 13.3921 103.611 13.0603C103.338 12.7284 103.006 12.4942 102.616 12.3575ZM100.244 9.57597C100.732 9.34173 101.376 9.22461 102.177 9.22461C102.782 9.22461 103.348 9.30269 103.875 9.45885C104.402 9.59549 105.026 9.98588 105.749 10.63C106.842 11.6255 107.388 12.787 107.388 14.1143C107.388 14.251 107.369 14.4559 107.33 14.7292C107.115 16.0956 106.412 17.3156 105.222 18.3892C104.031 19.4627 102.782 20.0093 101.474 20.0288H100.449V24.2744C100.449 26.3044 100.43 27.5439 100.39 27.9929C100.351 28.4419 100.234 28.7639 100.039 28.9591C99.6683 29.3495 99.2486 29.5447 98.7801 29.5447C98.4287 29.5447 98.1067 29.4178 97.8139 29.1641C97.5406 28.9298 97.3454 28.598 97.2283 28.1686C97.1502 27.7391 97.1112 25.592 97.1112 21.727V19.4139C97.1307 15.6271 97.1697 13.314 97.2283 12.4747C97.2868 11.6353 97.4235 11.0595 97.6382 10.7472C97.8139 10.5129 98.0384 10.3372 98.3116 10.2201C98.5849 10.0835 98.9167 9.96636 99.3071 9.86876C99.7171 9.77116 100.029 9.67357 100.244 9.57597Z" fill="black"/>
                            <path d="M117.173 13.1188C116.665 12.787 116.255 12.6211 115.943 12.6211C115.553 12.6211 115.104 12.8748 114.596 13.3823C113.796 14.1826 113.396 15.2855 113.396 16.6909C113.396 18.3501 113.913 19.6677 114.948 20.6437C115.455 21.1122 115.992 21.3464 116.558 21.3464C116.929 21.3464 117.28 21.2293 117.612 20.9951C118.588 20.2143 119.076 19.004 119.076 17.3644C119.076 16.486 118.91 15.6661 118.578 14.9049C118.246 14.1241 117.778 13.5287 117.173 13.1188ZM113.747 10.1908C114.45 9.83948 115.045 9.66381 115.533 9.66381C115.65 9.66381 116.002 9.68333 116.587 9.72237C117.602 9.81996 118.393 10.0347 118.959 10.3665C119.544 10.6788 120.13 11.2547 120.716 12.094C121.75 13.6166 122.267 15.3343 122.267 17.2472V17.4229C122.248 18.8869 121.955 20.185 121.389 21.3171C120.843 22.4493 120.071 23.3081 119.076 23.8937C118.647 24.1475 118.276 24.3134 117.963 24.3915C117.671 24.4501 117.212 24.4793 116.587 24.4793C114.186 24.4793 112.381 23.191 111.17 20.6144C110.722 19.6384 110.478 18.5551 110.438 17.3644C110.438 17.2863 110.429 17.1789 110.409 17.0423C110.409 16.8861 110.409 16.769 110.409 16.6909C110.409 13.4897 111.522 11.323 113.747 10.1908Z" fill="black"/>
                            <path d="M125.892 12.3283C126.009 11.5475 126.243 10.9814 126.595 10.63C126.946 10.2787 127.229 10.103 127.444 10.103C127.678 10.103 128.098 10.3275 128.703 10.7764C129.113 11.0888 129.591 11.6451 130.138 12.4454C130.684 13.2262 131.533 14.5828 132.685 16.5153C132.939 16.9837 133.144 17.218 133.3 17.218C133.436 17.218 133.505 16.2127 133.505 14.2022C133.505 12.2111 133.622 11.0497 133.856 10.7179C134.071 10.4056 134.403 10.2494 134.852 10.2494C135.281 10.2494 135.652 10.4056 135.964 10.7179C136.159 10.9131 136.277 11.3523 136.316 12.0355C136.355 12.7187 136.394 14.5535 136.433 17.54C136.452 18.6527 136.462 19.9312 136.462 21.3757C136.462 22.6054 136.433 23.3765 136.374 23.6888C136.335 23.9816 136.218 24.2061 136.023 24.3622C135.671 24.6745 135.349 24.8307 135.057 24.8307C134.588 24.8307 134.051 24.4696 133.446 23.7473C132.841 23.0056 132.031 21.7563 131.016 19.9995C129.689 17.7157 128.966 16.5738 128.849 16.5738C128.752 16.5738 128.664 17.745 128.586 20.0874C128.488 22.0394 128.381 23.2984 128.264 23.8645C128.147 24.4305 127.893 24.8014 127.502 24.9771C127.21 25.1137 126.956 25.182 126.741 25.182C126.487 25.182 126.175 25.0259 125.804 24.7136L125.219 24.2158L125.482 18.7698C125.658 15.2367 125.794 13.0895 125.892 12.3283Z" fill="black"/>
                            <path d="M144.291 9.60525C144.642 9.48813 145.013 9.42957 145.403 9.42957C146.125 9.42957 146.818 9.61501 147.482 9.98588C148.165 10.3372 148.712 10.8252 149.122 11.4499C149.532 12.0745 149.737 12.6113 149.737 13.0603C149.737 13.3726 149.629 13.6849 149.415 13.9972C149.219 14.3095 148.946 14.4657 148.595 14.4657C148.107 14.4657 147.511 14.1534 146.809 13.5287C146.106 12.9041 145.716 12.5918 145.637 12.5918C145.403 12.5918 145.052 12.7382 144.583 13.031C144.134 13.3042 143.803 13.5775 143.588 13.8508C142.924 14.7292 142.592 15.998 142.592 17.6572C142.592 19.6091 143.022 20.9658 143.881 21.727C144.31 22.0784 144.769 22.2541 145.257 22.2541C145.296 22.2541 145.364 22.2541 145.462 22.2541C145.579 22.2346 145.667 22.2248 145.725 22.2248L146.926 22.1662L146.984 21.405C146.984 21.3659 146.984 21.3074 146.984 21.2293C147.004 21.1512 147.014 21.1024 147.014 21.0829C147.014 20.8682 146.965 20.7315 146.867 20.673C146.77 20.5949 146.565 20.5363 146.252 20.4973C145.842 20.3997 145.442 20.1947 145.052 19.8824C144.681 19.5701 144.496 19.2773 144.496 19.004C144.496 18.7503 144.671 18.4672 145.023 18.1549C145.374 17.8036 145.921 17.6279 146.662 17.6279C147.287 17.6279 147.912 17.7548 148.536 18.0085C149.18 18.2623 149.59 18.5551 149.766 18.8869C149.922 19.1992 150 19.8434 150 20.8194C150 22.459 149.864 23.5717 149.59 24.1573C149.376 24.5672 149.053 24.8405 148.624 24.9771C148.214 25.0942 147.238 25.2211 145.696 25.3577C145.559 25.3772 145.374 25.387 145.14 25.387C143.988 25.387 142.963 25.0747 142.065 24.4501C141.187 23.8059 140.523 22.8982 140.074 21.727C139.664 20.6535 139.459 19.1407 139.459 17.1887C139.459 16.3493 139.518 15.6661 139.635 15.1391C139.908 13.7922 140.465 12.6211 141.304 11.6255C142.143 10.63 143.139 9.9566 144.291 9.60525Z" fill="black"/>
                            </g>
                        </svg>
                        
                        <svg width="40" height="41" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9379 25.4695L36.8962 16.532C37.2885 16.1397 37.5089 15.6076 37.5089 15.0528C37.5089 14.498 37.2885 13.9659 36.8962 13.5736C36.5039 13.1813 35.9718 12.9609 35.417 12.9609C34.8622 12.9609 34.3302 13.1813 33.9379 13.5736L25.0004 22.532L16.0629 13.5736C15.6706 13.1813 15.1385 12.9609 14.5837 12.9609C14.0289 12.9609 13.4968 13.1813 13.1045 13.5736C12.7122 13.9659 12.4918 14.498 12.4918 15.0528C12.4918 15.6076 12.7122 16.1397 13.1045 16.532L22.0629 25.4695L13.1045 34.407C12.9093 34.6006 12.7543 34.8311 12.6485 35.0849C12.5427 35.3388 12.4883 35.6111 12.4883 35.8861C12.4883 36.1612 12.5427 36.4335 12.6485 36.6873C12.7543 36.9412 12.9093 37.1716 13.1045 37.3653C13.2982 37.5606 13.5286 37.7156 13.7825 37.8213C14.0364 37.9271 14.3087 37.9815 14.5837 37.9815C14.8587 37.9815 15.131 37.9271 15.3849 37.8213C15.6388 37.7156 15.8692 37.5606 16.0629 37.3653L25.0004 28.407L33.9379 37.3653C34.1315 37.5606 34.362 37.7156 34.6158 37.8213C34.8697 37.9271 35.142 37.9815 35.417 37.9815C35.6921 37.9815 35.9644 37.9271 36.2182 37.8213C36.4721 37.7156 36.7025 37.5606 36.8962 37.3653C37.0915 37.1716 37.2465 36.9412 37.3522 36.6873C37.458 36.4335 37.5124 36.1612 37.5124 35.8861C37.5124 35.6111 37.458 35.3388 37.3522 35.0849C37.2465 34.8311 37.0915 34.6006 36.8962 34.407L27.9379 25.4695Z" fill="#231F20"/>
                        </svg>
                    </div>
    
                    <!-- 게시글 신고  -->
                    <div>
                        게시글 신고 하기${tempBoardNo}
                    </div>
                    <form action="/board2/reportContent" method="post">
                        <input type="text" name="reportTitle" placeholder="신고 제목을 입력해주세요.">
                        <%-- 신고유형<br>
                        <select name="BoardReport" id="" required>
                            <option value="" disabled selected>신고 유형을 선택해주세요.</option>
                            <option value="intellectual">지식재산권</option>
                            <option value="violenceAndCrime">폭력 및 범죄 행위</option>
                            <option value="unpleasant">불쾌한 콘텐츠</option>
                            <option value="integrityAndIntegrity">무결성 및 진실성</option>
                            <option value="others">기타</option>
                        </select> --%>
                        <%-- <input type="email" name="Email" id="otoEmail" placeholder="답장 받으실 이메일을 입력해주세요."> <br> --%>
                        <textarea id="otoContent" cols="30" rows="10" name="indictmentContent" placeholder="신고내용을 입력해주세요."></textarea> <br>
<%--     
                        <label for="chooseFile">+ 사진 파일 첨부하기</label>
                        <input type="file" id="chooseFile" name="chooseFile" accept="image/*" multiple> <br>
                        <p id="fileName" name="picture"></p> --%>
                        <input type="hidden" name="boardNo" class="boardNo">
                        <div><button id="submit">신고하기</button></div>
                    </form>
                </div>
            </div>
        </section>
    </div>


    <!-- 새 게시글 클릭 했을 때 상세 페이지  -->
    <div class="NewBoardBackground BoardBackground-close"> <!-- 새 게시글 불투명 배경 -->

        <div class="NewBoardMainContainer"> <!-- 새 게시글 하얀 배경 -->
            
            <div>
                <p>새 게시글 만들기</p>
                <!-- 닫기 버튼 -->
                <svg class="newContentClose" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3499 11.001L20.5166 3.85096C20.8304 3.53712 21.0067 3.11146 21.0067 2.66763C21.0067 2.22379 20.8304 1.79813 20.5166 1.48429C20.2027 1.17045 19.7771 0.994141 19.3332 0.994141C18.8894 0.994141 18.4637 1.17045 18.1499 1.48429L10.9999 8.65096L3.8499 1.48429C3.53606 1.17045 3.1104 0.994141 2.66656 0.994141C2.22273 0.994141 1.79707 1.17045 1.48323 1.48429C1.16939 1.79813 0.993079 2.22379 0.993079 2.66763C0.993079 3.11146 1.16939 3.53712 1.48323 3.85096L8.6499 11.001L1.48323 18.151C1.32702 18.3059 1.20303 18.4902 1.11841 18.6933C1.0338 18.8964 0.990234 19.1143 0.990234 19.3343C0.990234 19.5543 1.0338 19.7722 1.11841 19.9753C1.20303 20.1784 1.32702 20.3627 1.48323 20.5176C1.63817 20.6738 1.8225 20.7978 2.0256 20.8824C2.2287 20.9671 2.44655 21.0106 2.66656 21.0106C2.88658 21.0106 3.10443 20.9671 3.30753 20.8824C3.51062 20.7978 3.69496 20.6738 3.8499 20.5176L10.9999 13.351L18.1499 20.5176C18.3048 20.6738 18.4892 20.7978 18.6923 20.8824C18.8954 20.9671 19.1132 21.0106 19.3332 21.0106C19.5533 21.0106 19.7711 20.9671 19.9742 20.8824C20.1773 20.7978 20.3616 20.6738 20.5166 20.5176C20.6728 20.3627 20.7968 20.1784 20.8814 19.9753C20.966 19.7722 21.0096 19.5543 21.0096 19.3343C21.0096 19.1143 20.966 18.8964 20.8814 18.6933C20.7968 18.4902 20.6728 18.3059 20.5166 18.151L13.3499 11.001Z" fill="#231F20"/>
                </svg>
            </div>

            <div>
                <!-- 게시글 첨부 이미지 -->
                <svg width="100" height="102" viewBox="0 0 100 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.6697 12.4297L99.9994 34.6795L77.7495 101.009L11.4199 78.7593L33.6697 12.4297Z" fill="#64B5F6"/>
                <path d="M38.0749 22.2402L90.356 39.2824L74.8631 86.8107L22.582 69.7685L38.0749 22.2402Z" fill="#1E88E5"/>
                <path d="M17.1935 5.43164L85.972 18.0958L73.3078 86.8744L4.5293 74.2102L17.1935 5.43164Z" fill="#90CAF9"/>
                <path d="M23.037 14.5918L77.1872 24.2124L68.4412 73.4398L14.291 63.8193L23.037 14.5918Z" fill="#42A5F5"/>
                <path d="M0 0.990234H69.968V70.9582H0V0.990234Z" fill="#BBDEFB"/>
                <path d="M7.49609 8.48633H62.4709V58.4634H7.49609V8.48633Z" fill="white"/>
                <path d="M39.5728 20.8157C39.5728 23.2628 37.589 25.2466 35.1419 25.2466C32.6947 25.2466 30.7109 23.2628 30.7109 20.8157C30.7109 18.3686 32.6947 16.3848 35.1419 16.3848C37.589 16.3848 39.5728 18.3686 39.5728 20.8157Z" fill="#A8C3F0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M44.0032 44.0458C48.3371 43.166 51.599 39.3344 51.599 34.7409C51.599 29.4971 47.348 25.2461 42.1042 25.2461C36.8604 25.2461 32.6094 29.4971 32.6094 34.7409C32.6094 39.3344 35.8714 43.1661 40.2053 44.0458V48.6667C40.2053 49.7154 41.0555 50.5656 42.1043 50.5656C43.153 50.5656 44.0032 49.7154 44.0032 48.6667V44.0458Z" fill="#92B4EC" fill-opacity="0.8"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.761 44.0458C34.0949 43.166 37.3568 39.3344 37.3568 34.7409C37.3568 29.4971 33.1059 25.2461 27.862 25.2461C22.6182 25.2461 18.3672 29.4971 18.3672 34.7409C18.3672 39.3344 21.6292 43.166 25.963 44.0458V48.6667C25.963 49.7154 26.8132 50.5656 27.862 50.5656C28.9108 50.5656 29.761 49.7154 29.761 48.6667V44.0458Z" fill="#F5DA8A" fill-opacity="0.8"/>
                </svg>


                <form action="/board2/boardInsert" method="POST" enctype="multipart/form-data">
                    <!-- 게시글 첨부 버튼 -->
                    <label class="inputFileBtn" for="ContentNewFile">사진 첨부</label>
                    <input id="ContentNewFile" name="images" type="file" multiple style="display: none;">
                    <!-- 게시글 파일 첨부 후 상세페이지 -->
                    <!-- BoardBackground-close -->
                    <div class="BoardBackground2 BoardBackground-close" ><!-- 게시글 작성 불투명 배경 -->

                        <div class="BoardMainContainer2"> <!-- 게시글 작성 하얀 배경 -->

                            <div class="board-container-top">
                                <!-- 이전 아이콘 -->
                                <svg class = "new-board-close" id="BackIcon" width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class = "new-board-close" d="M25.666 10.7169H5.89935L11.9493 3.45026C12.2322 3.1099 12.3683 2.6711 12.3277 2.23039C12.2871 1.78968 12.073 1.38316 11.7327 1.10026C11.3923 0.817367 10.9535 0.681263 10.5128 0.721896C10.0721 0.762529 9.66558 0.97657 9.38268 1.31693L1.04935 11.3169C0.993283 11.3965 0.943148 11.48 0.899349 11.5669C0.899349 11.6503 0.899349 11.7003 0.782683 11.7836C0.707138 11.9747 0.667584 12.1781 0.666016 12.3836C0.667584 12.5891 0.707138 12.7925 0.782683 12.9836C0.782683 13.0669 0.782682 13.1169 0.899349 13.2003C0.943148 13.2872 0.993283 13.3707 1.04935 13.4503L9.38268 23.4503C9.53939 23.6384 9.73562 23.7897 9.95743 23.8934C10.1792 23.9971 10.4212 24.0507 10.666 24.0503C11.0554 24.051 11.4328 23.9154 11.7327 23.6669C11.9014 23.527 12.0409 23.3552 12.1432 23.1613C12.2455 22.9674 12.3085 22.7552 12.3286 22.5369C12.3487 22.3186 12.3256 22.0985 12.2605 21.8891C12.1954 21.6798 12.0897 21.4853 11.9493 21.3169L5.89935 14.0503H25.666C26.108 14.0503 26.532 13.8747 26.8445 13.5621C27.1571 13.2495 27.3327 12.8256 27.3327 12.3836C27.3327 11.9416 27.1571 11.5176 26.8445 11.2051C26.532 10.8925 26.108 10.7169 25.666 10.7169Z" fill="#231F20"/>
                                </svg>
                    
                                <span class="new-borad-make">새 게시글 만들기</span>
                                <!-- 공유 하기 -->
                                <button class="new-borad-upload" type="submit">공유 하기</button>
                            </div>

                            <div class="BoardContainerleft2">
                                <div class="BoardPicture2 slide2">
                                    <!-- 예시 -->
                                    <%-- <div class="slide_item2"><img src="img/peach.jpg" class="slide-img"></div> --%>
                                    <%-- <div class="slide_item2"><img src="img/PrCert.png" class="slide-img"></div> --%>
                                    <%-- <div class="slide_item2"><img src="img/peach.jpg" class="slide-img"></div> --%>
                                    <%-- <div class="slide_item2"><img src="img/peach.jpg" class="slide-img"></div> --%>
                                    <%-- <div class="slide_item2"><img src="img/peach.jpg" class="slide-img"></div> --%>
                                    <div class="slide_prev_button2 slide_button2">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.8121 39.5833C28.5008 39.5844 28.1933 39.5157 27.9121 39.3823C27.6309 39.2489 27.3831 39.0542 27.1871 38.8125L17.1246 26.3125C16.8181 25.9397 16.6506 25.4721 16.6506 24.9896C16.6506 24.507 16.8181 24.0394 17.1246 23.6667L27.5412 11.1667C27.8949 10.7412 28.403 10.4737 28.9539 10.4229C29.5048 10.3721 30.0533 10.5422 30.4787 10.8958C30.9042 11.2495 31.1717 11.7576 31.2225 12.3085C31.2733 12.8594 31.1032 13.4079 30.7496 13.8333L21.4371 25L30.4371 36.1667C30.6918 36.4725 30.8537 36.8449 30.9034 37.2397C30.9531 37.6346 30.8887 38.0355 30.7178 38.395C30.5468 38.7544 30.2765 39.0573 29.9388 39.2679C29.601 39.4785 29.2101 39.588 28.8121 39.5833Z" fill="#231F20"/>
                                        </svg>
                                    </div>
                                    <div class="slide_next_button2 slide_button2">
                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.8324 39.583C20.3456 39.584 19.8738 39.4145 19.499 39.1039C19.2881 38.929 19.1137 38.7142 18.9859 38.4718C18.8581 38.2294 18.7793 37.9642 18.7542 37.6913C18.729 37.4185 18.7579 37.1433 18.8393 36.8816C18.9206 36.62 19.0528 36.3769 19.2282 36.1664L28.5615 24.9997L19.5615 13.8122C19.3885 13.5991 19.2592 13.3539 19.1813 13.0907C19.1033 12.8275 19.0781 12.5515 19.1071 12.2785C19.1362 12.0055 19.2189 11.741 19.3505 11.5001C19.4821 11.2592 19.66 11.0466 19.874 10.8747C20.0896 10.6851 20.342 10.542 20.6155 10.4545C20.8889 10.367 21.1775 10.337 21.4631 10.3664C21.7488 10.3957 22.0252 10.4838 22.2752 10.625C22.5251 10.7663 22.7432 10.9577 22.9157 11.1872L32.9782 23.6872C33.2846 24.06 33.4521 24.5276 33.4521 25.0101C33.4521 25.4927 33.2846 25.9603 32.9782 26.333L22.5615 38.833C22.3525 39.0852 22.087 39.2845 21.7866 39.4148C21.4862 39.5451 21.1592 39.6027 20.8324 39.583Z" fill="#231F20"/>
                                        </svg>
                                    </div>
                                </div>
                                <ul class="slide_pagination2"></ul>
                            </div>

                            <div class="NewWriteBoardContainerRight"><!-- 게시글 작성 오른쪽 화면 -->
                                <div>
                                    <div class="NewWriteBoardTop"><!-- 게시글 작성 프로필, 내용 영역 -->
                                        <div class="BoardPost1">
                                            <a>
                                                <img class="Boardprofile1" src="${mypage.profileImage}"></img>
                                            </a>
                                        </div>
                                        <div class="NewWriteProfileName">
                                            <a>${mypage.memberNickname}</a>
                                        </div>

                                    </div>
                                    
                                    <textarea class="NewWriteTextArea" name="boardContent" maxlength="2000" cols="30" rows="10" placeholder="문구 입력.."></textarea>
                                    <!-- <div class="NewWriteTextArea" id="hashtag-input" contenteditable="true" role="textbox" spellcheck="true" data-lexical-editor="true" style="user-select: text; white-space: pre-wrap; word-break: break-word;"></div> -->
                                    <div class="countBox"><span class="NewWriteTextAreaCount">0</span><span>/2000</span></div>
                                    <div class="upload-form-hashtag" align="center">
                                        <input type="text" placeholder="해시태그를 추가해보세요!" id="hashtag" name="hashtag">
                                        <button type="button" class="cta blue" onclick="addHashtag()">추가</button>
                                        <input type="hidden" name="hashtagLists">
                                        <ul class="hashList">
                                            <%-- 해시태그 목록 --%>
                                        </ul>
                                    </div>
                                    <div class="hashtagList" id="hashtagList"></div>
                                </div>
                                <div class="addLink">
                                    <span>링크추가</span>
                                    
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6284 10.0665C12.9737 10.067 12.3454 10.3243 11.8784 10.7831L5.29503 7.84981C5.29503 7.74981 5.29503 7.66648 5.29503 7.56648C5.29503 7.46648 5.29503 7.38315 5.29503 7.29148L11.8784 4.34982C12.2907 4.754 12.8303 5.00298 13.4054 5.05449C13.9805 5.106 14.5557 4.95685 15.0333 4.63237C15.5109 4.30789 15.8614 3.8281 16.0254 3.27447C16.1894 2.72085 16.1567 2.12753 15.9329 1.59528C15.709 1.06303 15.3078 0.624673 14.7975 0.354658C14.2871 0.0846421 13.699 -0.000383645 13.133 0.114021C12.5671 0.228426 12.0582 0.535208 11.6927 0.982262C11.3273 1.42932 11.1279 1.98908 11.1284 2.56648V2.84981L4.54503 5.78315C4.19366 5.43794 3.74815 5.20423 3.26442 5.11134C2.78069 5.01845 2.28029 5.07053 1.82606 5.26104C1.37182 5.45155 0.98398 5.77199 0.711229 6.18216C0.438478 6.59232 0.292969 7.07391 0.292969 7.56648C0.292969 8.05905 0.438478 8.54065 0.711229 8.95081C0.98398 9.36097 1.37182 9.68142 1.82606 9.87193C2.28029 10.0624 2.78069 10.1145 3.26442 10.0216C3.74815 9.92874 4.19366 9.69502 4.54503 9.34981L11.1284 12.2915V12.5665C11.1284 13.0609 11.275 13.5443 11.5497 13.9554C11.8244 14.3665 12.2148 14.687 12.6717 14.8762C13.1285 15.0654 13.6311 15.1149 14.1161 15.0184C14.601 14.922 15.0465 14.6839 15.3961 14.3342C15.7458 13.9846 15.9839 13.5392 16.0803 13.0542C16.1768 12.5693 16.1273 12.0666 15.9381 11.6098C15.7488 11.153 15.4284 10.7625 15.0173 10.4878C14.6062 10.2131 14.1228 10.0665 13.6284 10.0665ZM13.6284 1.73315C13.7932 1.73315 13.9543 1.78202 14.0913 1.87359C14.2284 1.96516 14.3352 2.09531 14.3983 2.24758C14.4613 2.39985 14.4778 2.56741 14.4457 2.72906C14.4135 2.89071 14.3342 3.03919 14.2176 3.15574C14.1011 3.27228 13.9526 3.35165 13.7909 3.3838C13.6293 3.41596 13.4617 3.39945 13.3095 3.33638C13.1572 3.27331 13.027 3.1665 12.9355 3.02946C12.8439 2.89242 12.795 2.7313 12.795 2.56648C12.795 2.34547 12.8828 2.13351 13.0391 1.97723C13.1954 1.82095 13.4074 1.73315 13.6284 1.73315ZM2.79503 8.39981C2.63021 8.39981 2.4691 8.35094 2.33206 8.25937C2.19501 8.1678 2.0882 8.03766 2.02513 7.88538C1.96206 7.73311 1.94556 7.56556 1.97771 7.40391C2.00986 7.24226 2.08923 7.09377 2.20578 6.97723C2.32232 6.86068 2.4708 6.78131 2.63246 6.74916C2.79411 6.71701 2.96166 6.73351 3.11393 6.79658C3.26621 6.85965 3.39635 6.96646 3.48792 7.10351C3.57949 7.24055 3.62836 7.40166 3.62836 7.56648C3.62836 7.78749 3.54057 7.99946 3.38429 8.15574C3.22801 8.31202 3.01604 8.39981 2.79503 8.39981ZM13.6284 13.3998C13.4635 13.3998 13.3024 13.3509 13.1654 13.2594C13.0283 13.1678 12.9215 13.0377 12.8585 12.8854C12.7954 12.7331 12.7789 12.5656 12.811 12.4039C12.8432 12.2423 12.9226 12.0938 13.0391 11.9772C13.1557 11.8607 13.3041 11.7813 13.4658 11.7492C13.6274 11.717 13.795 11.7335 13.9473 11.7966C14.0995 11.8597 14.2297 11.9665 14.3213 12.1035C14.4128 12.2405 14.4617 12.4017 14.4617 12.5665C14.4617 12.7875 14.3739 12.9995 14.2176 13.1557C14.0613 13.312 13.8494 13.3998 13.6284 13.3998Z" fill="#231F20"/>
                                    </svg>

                                </div>
                                <%-- <div class="contentSet">
                                    <span>게시글 설정</span>
                                    
                                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.785529 0.86019C0.785149 0.66548 0.852961 0.476783 0.977195 0.326857C1.04715 0.242475 1.13307 0.172723 1.23003 0.121596C1.32698 0.0704698 1.43307 0.0389729 1.54222 0.0289097C1.65137 0.0188464 1.76143 0.0304148 1.8661 0.0629519C1.97077 0.095489 2.06799 0.148355 2.15219 0.218523L6.61886 3.95186L11.0939 0.351858C11.1791 0.282636 11.2772 0.230943 11.3825 0.19975C11.4877 0.168557 11.5982 0.158478 11.7073 0.170094C11.8165 0.18171 11.9224 0.214791 12.0187 0.267436C12.1151 0.320081 12.2001 0.391252 12.2689 0.476857C12.3447 0.563079 12.402 0.664051 12.4369 0.773436C12.4719 0.882821 12.4839 0.998259 12.4722 1.1125C12.4605 1.22675 12.4252 1.33733 12.3687 1.43732C12.3122 1.5373 12.2357 1.62453 12.1439 1.69352L7.14386 5.71852C6.99475 5.84109 6.80772 5.9081 6.6147 5.9081C6.42168 5.9081 6.23464 5.84109 6.08553 5.71852L1.08553 1.55186C0.984681 1.46826 0.904962 1.36206 0.852838 1.24189C0.800713 1.12171 0.777654 0.990945 0.785529 0.86019Z" fill="#231F20"/>
                                    </svg>

                                </div> --%>
                                <div class="contentSet">
                                    <span>게시글 설정</span>
                                    
                                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.785529 0.86019C0.785149 0.66548 0.852961 0.476783 0.977195 0.326857C1.04715 0.242475 1.13307 0.172723 1.23003 0.121596C1.32698 0.0704698 1.43307 0.0389729 1.54222 0.0289097C1.65137 0.0188464 1.76143 0.0304148 1.8661 0.0629519C1.97077 0.095489 2.06799 0.148355 2.15219 0.218523L6.61886 3.95186L11.0939 0.351858C11.1791 0.282636 11.2772 0.230943 11.3825 0.19975C11.4877 0.168557 11.5982 0.158478 11.7073 0.170094C11.8165 0.18171 11.9224 0.214791 12.0187 0.267436C12.1151 0.320081 12.2001 0.391252 12.2689 0.476857C12.3447 0.563079 12.402 0.664051 12.4369 0.773436C12.4719 0.882821 12.4839 0.998259 12.4722 1.1125C12.4605 1.22675 12.4252 1.33733 12.3687 1.43732C12.3122 1.5373 12.2357 1.62453 12.1439 1.69352L7.14386 5.71852C6.99475 5.84109 6.80772 5.9081 6.6147 5.9081C6.42168 5.9081 6.23464 5.84109 6.08553 5.71852L1.08553 1.55186C0.984681 1.46826 0.904962 1.36206 0.852838 1.24189C0.800713 1.12171 0.777654 0.990945 0.785529 0.86019Z" fill="#231F20"/>
                                    </svg>
                                </div>

                            </div>

                        </div>

                        
                    </div>
                </form>




            </div>
        </div>

    </div>

    <script>
        const followCheck = ${followCheck};
    </script>
    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/personal/post.js"></script> <!-- 게시글 상세 -->
    <script src="/resources/js/personal/post2.js"></script> <%-- 두번째 post --%>
</body>
</html> 