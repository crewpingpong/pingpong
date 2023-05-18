<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="CommentList" value="${CommentList}"/>

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
    <link rel="stylesheet" href="/resources/css/maneger/managerComment.css">
    
</head>
<body>

	<jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <!-- 관리자 페이지 Tab Menu -->

    <div class="admin-content-container">

        <div class="admin-left-side-menu-group"> 
            <div class="admin-left-side-menu">   
                <ul>
                    <li>
                        <p>회원 관리</p> <!-- XXXXX..? -->
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
            <div id="adminModiTab4" class="admin-content-main">
                <div class="admin-left-side-menu">
                    <div>댓글 관리</div>
                    <div>
                        <select name="select" id="">
                            <option value="memberNo">ID</option>
                            <option value="memberNo">게시글 번호</option>
                            <option value="memberNo">댓글 내용</option>
                        </select>
                        <input type="text">
                        <button type="button">검색</button>
                    </div>
                    <div>
                        <button id="DelBtn">삭제처리</button>
                        <button id="ReBtn">복구처리</button>
                    </div>
                    <form action="/manager/commentdel" method="POST" id="commentForm">
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
                                    <th>게시글</th>
                                    <th>댓글 내용</th>
                                    <th>ID(URL)</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:choose>
                                    <c:when test="${empty CommentList}">
                                            <tr>
                                                <th colspan="6">등록된 댓글이 없습니다.</th>
                                            </tr>
                                    </c:when>

                                    <c:otherwise>
                                        <c:forEach items="${CommentList}" var="Comment">
                                            <tr>
                                                <td>
                                                    <input type="checkbox" name="choicebox" value="${Comment.commentNo}">
                                                </td>
                                                <td>${Comment.commentNo}</td>
                                                <td>${Comment.boardNo}</td>
                                                <td><a href="/manager1To1Content.html">${Comment.commentContent}</a></td>
                                                <td>
                                                    <a href="/personalHome.html">${Comment.memberUrl}</a>
                                                </td>
                                                <td>${Comment.commentDelFl}</td>
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

        </div>
    </div> 
</div>
</div>

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/manageComment.js"></script>
</body>
</html>