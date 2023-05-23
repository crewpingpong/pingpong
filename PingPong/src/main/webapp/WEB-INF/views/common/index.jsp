<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>

    <!-- 파비콘 -->
	<link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
	
    <!-- 제이쿼리 -->
    <script src="/resources/js/jquery.js"></script>
    <!-- 슬라이더 css / js -->
    <link rel="stylesheet" href="/resources/css/main/mainSlide.css">
    <%-- <script src="/resources/js/main/slick.js"></script> --%>

    <%-- owl 슬라이드 --%>
    <link rel="stylesheet" href="/resources/css/main/docs.theme.min.css">

    <link rel="stylesheet" href="/resources/css/main/owl.carousel.min.css">
    <link rel="stylesheet" href="/resources/css/main/owl.theme.default.min.css">

    <link rel="stylesheet" href="/resources/css/main/owl.css">

    <script src="/resources/js/main/jquery.min.js"></script>
    <script src="/resources/js/main/owl.carousel.js"></script>
    <%-- <link rel="stylesheet" href="/resources/css/style.css"> --%>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <!-- 메인 슬라이드 -->
    <main>
    
        <section id="demos">
            <div class="row">
                <div class="large-12 columns">
                    <div class="owl-carousel owl-theme">
                        <c:forEach items="${boardMainList}" var="boardMain">
                            <div class="item">
                                <a href="/mypage/${boardMain.memberNo}?boardNo=${boardMain.boardNo}" class="slider-item-link">
                                <img src="${boardMain.thumbnail}" class="item-picture textImg">
                                </a>
                            </div>
                        </c:forEach>
                        <%-- <div class="item">
                            <h4>2</h4>
                        </div>
                        <div class="item">
                            <h4>3</h4>
                        </div>
                        <div class="item">
                            <h4>4</h4>
                        </div> --%>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <div class="profileContent">
        <div class="posttab_menu">
            <div class="postcont_area">
                <div id="posttab1" class="postcont" style="display:block;">
                    <div class="contentBox">
                        <c:choose>
                            <c:when test="${empty boardList}">
                                <%-- 조회된 게시글 목록이 비어있거나 null인 경우 --%>
                                게시글이 존재하지 않습니다.
                            </c:when>
                        
                            <c:otherwise>
                                <!-- 게시글 목록 조회 결과가 있다면 -->
                                <c:forEach items="${boardList}" var="board">
                                    <div>
                                        <%-- <a href="/board/${board.boardNo}">
                                        onclick="selectBoardList(${board.boardNo})" --%>
                                        <a href="mypage/${board.memberNo}?boardNo=${board.boardNo}">
                                            <img class="list-thumbnail" src="${board.thumbnail}">
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



    
    <script>
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                nav: true
                },
                600: {
                    items: 2,
                nav: false
                },
                1200: {
                    items: 3,
                nav: true,
                loop: false,
                margin: 20
                }
            }
            })
        })
    </script>

    <script src="/resources/js/script.js"></script>

    <%-- <jsp:include page="/WEB-INF/views/common/footer.jsp"/> --%>
    
</body>
</html>