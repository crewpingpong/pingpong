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
    <link rel="stylesheet" href="/resources/css/maneger/managerReportContent.css">
    
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
            <div id="oneToOneContent">
                <a onclick="history_back()"> &lt; BACK</a>
                <div>
                    <div>
                        신고 내용
                    </div>
                    <div>
                        <div>
                            <div class="reporter">신고자 ID : <a href="/personalHome.html">AAA</a> </div>
                            <div class="respondent">피신고자 ID : <a href="/personalHome.html">badDog</a></div>
                        </div>
                        <div>
                            <input type="text" placeholder="회원이 작성한 신고 제목">
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder=" 신고 내용"></textarea>
                        </div>
                        <div>
                            첨부한 사진
                            <div><img src="/resources/images/QnAguide/회원가입1.png" style="max-width:100%; height:auto;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/maneger/manager1To1Content.js"></script>
</body>
</html>