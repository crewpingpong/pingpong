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
    <link rel="stylesheet" href="/resources/css/maneger/managerSecessionMember.css">
    
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
            <div id="adminModiTab2" class="admin-content-main">
                <div class="admin-left-side-menu">
                    <div>탈퇴 회원 관리</div>
                    <div>
                        <select name="select" id="">
                            <option value="memberNo">ID</option>
                            <option value="memberNo">NickName</option>
                            <option value="memberNo">Email</option>
                        </select>
                        <input type="text">
                        <button type="button">검색</button>
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
                                    <th>ID</th>
                                    <th>Nickname</th>
                                    <th>Email</th>
                                    <th>탈퇴 일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>2-000001</td>
                                    <td>
                                        <a href="/personalHome.html">aaaaa</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td> <!-- 한글 16글자 1줄 -->
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000001</td>
                                    <td>
                                        <a href="/personalHome.html">bbbbb</a>
                                    </td>
                                    <td>abcdefghijklnmopqrstuvwxyz</td>
                                    <td>asdasdasda@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000002</td>
                                    <td>
                                        <a href="/personalHome.html">ccccc</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td>
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000003</td>
                                    <td>
                                        <a href="/personalHome.html">ddddd</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td>
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000004</td>
                                    <td>
                                        <a href="/personalHome.html">eeeee</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td>
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000005</td>
                                    <td>
                                        <a href="/personalHome.html">fffff</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td>
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="choicebox" value="1">
                                    </td>
                                    <td>1-000006</td>
                                    <td>
                                        <a href="/personalHome.html">ggggg</a>
                                    </td>
                                    <td>가나다라마바사아자차카타파하가나</td>
                                    <td>q1w2e3r4@gmail.com</td>
                                    <td>23/01/01</td>
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
            <div id="selectMemberRestoreExisting">선택한 회원 탈퇴 복구</div>
        </div>
    </div> 
</div>
</div>

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/managerPost.js"></script>
</body>
</html>