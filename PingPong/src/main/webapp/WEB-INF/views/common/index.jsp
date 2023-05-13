<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>
    <!-- 공통 헤더 css -->
    <link rel="stylesheet" href="/resources/css/style.css">
    
    <!-- 파비콘 -->
	<link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
	
    <!-- 제이쿼리 -->
    <script src="/resources/js/jquery.js"></script>

    <!-- 슬라이더 css / js -->
    <link rel="stylesheet" href="/resources/css/main/mainSlide.css">
    <script src="/resources/js/main/slick.js"></script>

    <style>
        #btn11{ /* 임시 관리자 페이지 버튼 입니다.*/
            position: absolute; width: 100px; height: 40px; background-color: #5286DC; top: 200px; left: 100px; border-radius: 20px; color: #fff;
        }
    </style>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <!-- 메인 슬라이드 -->
    <button id="btn11" onclick="location.href='/manager/'">관리자 페이지</button>
    <main>
        <div class="slider center autoplay">
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImg">
                </a>
            </div>
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImgtextImg">
                </a>
            </div>
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImg">
                </a>
            </div>
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImg">
                </a>
            </div>
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImg">
                </a>
            </div>
            <div class="slider-item">
                <a href="/mypage/" class="slider-item-link">
                    <img src="/resources/images/peach.jpg" class="item-picture textImg">
                </a>
            </div>
        </div>
        <button class="custom-slick-prev slick-arrow"aria-label="Previous" style>
            <svg width="50" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25.5" cy="25" r="25" fill="white" fill-opacity="0.8"/>
                <path d="M29.3121 39.5833C29.0008 39.5844 28.6933 39.5157 28.4121 39.3823C28.1309 39.2489 27.8831 39.0542 27.6871 38.8125L17.6246 26.3125C17.3181 25.9397 17.1506 25.4721 17.1506 24.9896C17.1506 24.507 17.3181 24.0394 17.6246 23.6667L28.0412 11.1667C28.3949 10.7412 28.903 10.4737 29.4539 10.4229C30.0048 10.3721 30.5533 10.5422 30.9787 10.8958C31.4042 11.2495 31.6717 11.7576 31.7225 12.3085C31.7733 12.8594 31.6032 13.4079 31.2496 13.8333L21.9371 25L30.9371 36.1667C31.1918 36.4725 31.3537 36.8448 31.4034 37.2397C31.4531 37.6346 31.3887 38.0355 31.2178 38.395C31.0468 38.7544 30.7765 39.0573 30.4388 39.2679C30.101 39.4785 29.7101 39.588 29.3121 39.5833Z" fill="#231F20"/>
            </svg>
        </button>
        <button class="custom-slick-next slick-arrow" aria-label="Next" style>
            <svg width="50" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25.5" cy="25" r="25" fill="white" fill-opacity="0.8"/>
                <path d="M21.3324 39.583C20.8456 39.584 20.3739 39.4145 19.9991 39.1039C19.7881 38.929 19.6138 38.7142 19.4859 38.4718C19.3581 38.2294 19.2794 37.9642 19.2542 37.6913C19.2291 37.4185 19.258 37.1433 19.3393 36.8816C19.4207 36.62 19.5528 36.3769 19.7283 36.1664L29.0616 24.9997L20.0616 13.8122C19.8885 13.5991 19.7593 13.3539 19.6813 13.0907C19.6033 12.8275 19.5781 12.5515 19.6072 12.2785C19.6362 12.0055 19.7189 11.741 19.8505 11.5001C19.9821 11.2592 20.1601 11.0466 20.3741 10.8747C20.5896 10.6851 20.8421 10.542 21.1155 10.4545C21.389 10.367 21.6776 10.337 21.9632 10.3664C22.2488 10.3957 22.5253 10.4838 22.7752 10.625C23.0252 10.7663 23.2433 10.9577 23.4158 11.1872L33.4783 23.6872C33.7847 24.06 33.9522 24.5276 33.9522 25.0101C33.9522 25.4927 33.7847 25.9603 33.4783 26.333L23.0616 38.833C22.8526 39.0852 22.5871 39.2845 22.2867 39.4148C21.9862 39.5451 21.6593 39.6027 21.3324 39.583Z" fill="#231F20"/>
            </svg>
        </button>
    </main>

    <!-- 게시글 (무한 스크롤) -->
    <article class="main-post" onclick="location.href='/mypage/'">
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
        <div class="main-post-item"><a href="#"></a></div>
    </article>

    <script src="/resources/js/script.js"></script>
</body>
</html>