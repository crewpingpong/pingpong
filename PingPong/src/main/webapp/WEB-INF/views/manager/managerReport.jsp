<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="DeclarationList"  value="${DeclarationList.DeclarationList}"/>
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
    <link rel="stylesheet" href="/resources/css/maneger/managerReport.css">
    
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
            <div id="adminModiTab5" class="admin-content-main">
                <!-- ★★★★★★★★★★★★★★ 1:1문의 ★★★★★★★★★★★★★★ -->
                <div class="admin-left-side-menu">
                    <div>받은 신고</div>
                    <div>
            <form action="/manager/Report" method="get" id="boardSearch">

                    <select name="key" id="searchKey">
                        <option value="i">ID</option>
                        <option value="n">게시글 번호</option>
                        <option value="c">내용</option>
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
                                    <th><input type="checkbox" name="choiceBox" value="selectAll" id="chkSelectAll"></th>
                                    <th>No.</th>
                                    <th>신고자 ID(URL)</th>
                                    <th>신고 게시글</th>
                                    <th>내용</th>
                                </tr>
                            </thead>
                            <tbody>
                                <c:choose>
                                    <c:when test="${empty DeclarationList}">
                                        <tr>
                                            <th colspan="6">등록된 신고가 없습니다.</th>
                                        </tr>
                                    </c:when>

                                    <c:otherwise>
                                <c:forEach items="${DeclarationList}" var="Declaration">
                                    <tr>
                                        <td><input type="checkbox" name="choicebox" value="1"></td>
                                        <td>${Declaration.indictmentNo}</td>
                                        <td><a href="/mypage/${Declaration.memberNo}" class="reporter">${Declaration.memberUrl}</a></td>
                                        <td><a href="/mypage/${Declaration.memberNo}?boardNo=${Declaration.boardNo}" class="respondent">${Declaration.boardNo}</a></a></td>
                                        <td><a onclick="location.href='/manager/ReportContent?indictmentNo=${Declaration.indictmentNo}'">${Declaration.indictmentContent}</a></td>
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
    </div>
    

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/manager1To1Inquiry.js"></script>
    <script src="/resources/js/personal/post.js"></script>
</body>
</html>