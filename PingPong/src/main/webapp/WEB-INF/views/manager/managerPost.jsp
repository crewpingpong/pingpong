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
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="/resources/css/maneger/managerPost.css">
    
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
                        <a href="/managerExistingMember.html">가입 회원</a> 
                    </li>

                    <li>                          
                        <a href="/managerSecessionMember.html">탈퇴 회원</a>  
                    </li>
                    
                    <li>
                        <p>게시글 관리</p>  
                    </li>

                    <li>                          
                        <a href="/managerPost.html">게시글 관리</a>  
                    </li>

                    <li>                          
                        <a href="/managerComment.html">댓글 관리</a>  
                    </li>
                    <li>
                        <p>문의</p>
                    </li>
                    <li>
                        <a href="/manager1To1Inquiry.html">1:1 문의</a> 
                    </li>
                    <li>
                    </li>
                    <li>
                        <p>신고</p>
                    </li>
                    <li>
                        <a href="/managerReport.html">신고함</a> 
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="admin-content-main-area"> 
            <div id="adminModiTab3" class="admin-content-main">
                <div class="admin-left-side-menu">
                    <div>게시글 관리</div>
                    <div>
                        <select name="select" id="">
                            <option value="memberNo">ID</option>
                            <option value="memberNo">게시글 내용</option>
                        </select>
                        <input type="text">
                        <button type="button">검색</button>
                    </div>
                    <div>
                        <button>삭제처리</button>
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
                                    <th>게시글 내용</th>
                                    <th>신고횟수</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1</td>
                                    <td>
                                        <a href="/personalHome.html">Admin</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">저의 첫 포트폴리오 입니다. ... </a></td>
                                    <td>0</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="2">
                                    </td>
                                    <td>2</td>
                                    <td>
                                        <a href="">비회원</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">내용 앞 15글자만 보여주...</a></td>
                                    <td>0</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="2">
                                    </td>
                                    <td>3</td>
                                    <td>
                                        <a href="">비회원</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">나머지는...</a></td>
                                    <td>0</td>
                                    <td>N</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="2">
                                    </td>
                                    <td>4</td>
                                    <td>
                                        <a href="/personalHome.html">핑퐁짱</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">게시글 내용 클릭하면 모달로 보여주는?</a></td>
                                    <td>1</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="2">
                                    </td>
                                    <td>5</td>
                                    <td>
                                        <a href="/personalHome.html">핑퐁짱</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">가나다라마바사</a></td>
                                    <td>3243</td>
                                    <td>Y</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="2">
                                    </td>
                                    <td>6</td>
                                    <td>
                                        <a href="/personalHome.html">핑퐁짱</a>
                                    </td>
                                    <td><a href="/manager1To1Content.html">가나다라마바사</a></td>
                                    <td>0</td>
                                    <td>N</td>
                                </tr>
                                
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
            </div> 

        </div>
    </div> 
</div>
</div>


    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/managerPost.js"></script>
</body>
</html>