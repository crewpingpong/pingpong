<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- map에 저장된 값을 각각 변수에 저장 --%>
<c:set var="memberList" value="${map.memberList}"/>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>
    <link rel="stylesheet" href="/resources/css/style.css"> <!-- 메인 헤더, 네브 css -->
    <link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="/resources/css/maneger/managerExistingMember.css">
    
</head>
<body>

	<jsp:include page="/WEB-INF/views/common/header.jsp"/>


    <!-- 관리자 페이지 Tab Menu -->

    <div class="admin-content-container">

        <div class="admin-left-side-menu-group"> 
            <div class="admin-left-side-menu">   
                <ul>
                    <li>
                        <p>회원 관리</p>
                    </li>  

                    <li class="admin_is_on">        
                        <a onclick="location.href='/manager/'">가입 회원</a> 
                    </li>

                    <li>                          
                        <a onclick="location.href='/manager/Secession'">탈퇴 회원</a>  
                    </li>
                    
                    <li>
                        <p>게시글 관리</p>  
                    </li>

                    <li>                          
                        <a onclick="location.href='/manager/Post'">게시글 관리</a>  
                    </li>

                    <li>                          
                        <a onclick="location.href='/manager/Comment'">댓글 관리</a>  
                    </li>
                    <li>
                        <p>문의</p>
                    </li>
                    <li>
                        <a onclick="location.href='/manager/1To1inquiry'">1:1 문의</a> 
                    </li>
                    <li>
                    </li>
                    <li>
                        <p>신고</p>
                    </li>
                    <li>
                        <a onclick="location.href='/manager/Report'">신고함</a> 
                    </li>
                </ul>
            </div>
        </div>
        <div class="admin-content-main-area"> 
            <div id="adminModiTab1" class="admin-content-main">
                <div class="admin-left-side-menu">
                
                    <div>가입 회원 관리</div>
                    <div>
            <form action="/manager/" method="get" id="boardSearch">

                    <select name="key" id="searchKey">
                        <option value="i">ID</option>
                        <option value="n">NICKNAME</option>
                        <option value="e">EMAIL</option>
                    </select>

                    <input type="text" name="query"  id="searchQuery" placeholder="검색어를 입력해주세요.">

                    <button>검색</button>
            </form>
                    </div>
                    <form action="/manager/delete" method="POST" id="form">
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
                                        <input type="checkbox" name="choiceBox" value="1" id="chkSelectAll">
                                    </th>
                                    <th>회원 번호</th>
                                    <th>회원 아이디</th>
                                    <th>닉네임</th>
                                    <th>Email</th>
                                    <th>가입일</th>
                                </tr>
                            </thead>
                            <tbody>
                            <c:choose>
                            <c:when test="${empty memberList}">
                                <%-- 조회된 가입 회원 목록이 비어있거나 null인 경우 --%>

                                <!-- 게시글 목록 조회 결과가 비어있다면 -->
                                <tr>
                                    <th colspan="6">가입한 회원이 존재하지 않습니다.</th>
                                </tr>
                            </c:when>
                            <c:otherwise>
                                <%-- 가입 회원 목록 결과가 있다면 --%>
                                <c:forEach items="${memberList}" var="member">
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="choicebox" value="${member.memberNo}">
                                            </td>
                                            <td>${member.memberNo}</td>
                                            <td>
                                                <a href="/mypage/${member.memberNo}">${member.memberUrl}</a>
                                            </td>
                                            <td>${member.memberNickname}</td> <!-- 한글 16글자 1줄 -->
                                            <td>${member.memberEmail}</td>
                                            <td>${member.enrollDate}</td>
                                        </tr>
                                </c:forEach>

                            </c:otherwise>
                        </c:choose>
                            </tbody>
                        </table>
                    </form>
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
            </div> 
            <div id="selectMemberSecession">선택한 회원 탈퇴 처리</div>
        </div>
    </div> 
</div>
</div>

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/managerPost.js"></script>
</body>
</html>