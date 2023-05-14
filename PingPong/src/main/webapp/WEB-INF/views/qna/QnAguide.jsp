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
    <link rel="stylesheet" href="/resources/css/qna/QnAguide.css">
    <link rel="icon" type="image/x-icon" href="/resources/images/pingpong.ico">
</head>
<body>

	<jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <!-- 고객센터 가이드 -->
    <div class="ch-guide-container">
        <!-- ----------------------------------- 상단 기본 가이드 제목 --------------------------------- -->
        <section>
            <div class="ch-guideheader">
                <a href="/qna/">&lt; BACK</a>
                <h3>기본 가이드</h3>
            </div>
        </section>

        <!-- ----------------------------------- 기본 가이드 목록 --------------------------------- -->
        <section>
            <div class="ch-tabMenu">
                <ul class="ch-list">
                    <li class="ch-is_on">
                        <a href="#ch-tab1" class="ch-guideBtn">회원 가입</a>
                    </li>
                    <li>
                        <a href="#ch-tab2" class="ch-guideBtn">게시글 업로드</a>
                        
                    </li>
                    <li>
                        <a href="#ch-tab3" class="ch-guideBtn">팔로우/팔로잉</a>
                        
                    </li>
                    <li>
                        <a href="#ch-tab4" class="ch-guideBtn">쪽지보내기</a>
                        
                    </li>
                </ul>

                <div class="ch-cont_area">
                    <div id="ch-tab1" class="ch-cont">
                        <div>
                            <ul>
                                <li><img src="/resources/images/QnAguide/회원가입1.png" alt="메인화면 오른쪽 상단의 회원가입 버튼"></li>
                                <li><img src="/resources/images/QnAguide/회원가입2.png" alt="회원가입 첫번째 창에서 아이디, 비밀번호, 비밀번호 확인 입력"></li>
                                <li><img src="/resources/images/QnAguide/회원가입3.png" alt="회원가입 첫번째 창에서 약관 동의"></li>
                                <li><img src="/resources/images/QnAguide/회원가입3_1.png" alt="회원가입 첫번째 창에서 약관 동의 내용 확인"></li>
                                <li><img src="/resources/images/QnAguide/회원가입4.png" alt="회원가입 첫번째 창에서 다음버튼"></li>
                                <li><img src="/resources/images/QnAguide/회원가입5.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><img src="/resources/images/QnAguide/회원가입6.png" alt="회원가입 두번쨰 창에서 URL 중복 확인"></li>
                                <li><img src="/resources/images/QnAguide/회원가입7.png" alt="회원가입 두번째 창에서 작업 & 관심분야 체크"></li>
                                <li><img src="/resources/images/QnAguide/회원가입8.png" alt="회원가입 두번째 창에서 완료"></li>
                            </ul>
                        </div>
                        <div class="guide-infomation">
메인화면 오른쪽 상단의 회원가입 버튼을 누릅니다.
새 계정 만들기를 누르고 이메일 주소 또는 휴대폰 번호를 입력한 후 다음을 누릅니다. 참고: 이메일 주소로 가입하는 경우 회원님만 액세스할 수 있는 이메일 주소를 선택하여 정확하게 입력하세요. 로그아웃 후 비밀번호를 잊은 경우 Instagram 계정에 다시 로그인하려면 이메일에 액세스할 수 있어야 합니다.
이메일 주소 또는 휴대폰 번호로 전송된 인증 코드를 입력한 후 다음을 누릅니다.
비밀번호를 만들고 다음을 누릅니다.
생일을 입력하고 '다음'을 누릅니다. 참고: 비즈니스, 반려동물 또는 기타 용도의 계정이라 할지라도 회원님의 생일을 입력하세요. Instagram에서 내 생일을 묻는 이유에 대해 더 자세히 알아보세요.
이름을 추가하고 다음을 누릅니다.
사용자 이름을 만든 후 다음을 누릅니다.
                        </div>
                        <!-- <div>
                            <ol>
                                <li>
                                    메인화면 오른쪽 상단의 회원가입 버튼을 누릅니다.
                                </li>
                                <li>
                                    새 계정 만들기를 누르고 이메일 주소 또는 휴대폰 번호를 입력한 후 다음을 누릅니다. 참고: 이메일 주소로 가입하는 경우 회원님만 액세스할 수 있는 이메일 주소를 선택하여 정확하게 입력하세요. 로그아웃 후 비밀번호를 잊은 경우 Instagram 계정에 다시 로그인하려면 이메일에 액세스할 수 있어야 합니다.
                                </li>
                                <li>
                                    이메일 주소 또는 휴대폰 번호로 전송된 인증 코드를 입력한 후 다음을 누릅니다.
                                </li>
                                <li>
                                    비밀번호를 만들고 다음을 누릅니다.
                                </li>
                                <li>
                                    생일을 입력하고 '다음'을 누릅니다. 참고: 비즈니스, 반려동물 또는 기타 용도의 계정이라 할지라도 회원님의 생일을 입력하세요. Instagram에서 내 생일을 묻는 이유에 대해 더 자세히 알아보세요.
                                </li>
                                <li>
                                    이름을 추가하고 다음을 누릅니다.
                                </li>
                                <li>
                                    사용자 이름을 만든 후 다음을 누릅니다.
                                </li>
                            </ol>
                        </div> -->
                    </div>
                    
                    <div id="ch-tab2" class="ch-cont">
                        <div>
                            Picture2
                        </div>
                        <div>
                            Content2
                        </div>
                    </div>
                    <div id="ch-tab3" class="ch-cont">
                        <div>
                            Picture3
                        </div>
                        <div>
                            Content3
                        </div>
                    </div>
                    <div id="ch-tab4" class="ch-cont">
                        <div>
                            Picture4
                        </div>
                        <div>
                            Content4
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <script src="/resources/js/script.js"></script> <!-- 메인 헤더, 네브 js -->
    <script src="/resources/js/qna/QnAguide.js"></script>
</body>
</html>