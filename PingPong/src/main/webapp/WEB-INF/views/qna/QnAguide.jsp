<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PingPong</title>
    <%-- <link rel="stylesheet" href="/resources/css/style.css"> <!-- 메인 헤더, 네브 css --> --%>
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
                                <li><pre>
1. 메인화면 오른쪽 상단의 회원가입 버튼을 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/회원가입2.png" alt="회원가입 첫번째 창에서 아이디, 비밀번호, 비밀번호 확인 입력"></li>
                                <li>
                                    <pre>
2. 이메일 주소를 입력하고 전송 버튼을 누릅니다. 그리고 해당 이메일 주소의 메일함을 확인하여 인증번호를 입력합니다.
   참고: 액세스할 수 있는 이메일 주소를 선택하여 정확하게 입력하세요.
   로그아웃 후 비밀번호를 잊은 경우 PINGPONG 계정에 다시 로그인하려면 이메일에 액세스할 수 있어야 합니다.
                                    </pre>
                                </li>
                                <li><img src="/resources/images/QnAguide/회원가입3.png" alt="회원가입 첫번째 창에서 약관 동의"></li>
                                <li><pre>
3. 비밀번호를 입력하고 동일한 비밀번호를 한번더 확인하여 입력합니다.
                                </pre> 
                                </li>
                                <li><img src="/resources/images/QnAguide/회원가입4.png" alt="회원가입 첫번째 창에서 약관 동의 내용 확인"></li>
                                <li><pre>
4. 비밀번호를 만들고 다음을 누릅니다.
   그리고 약관을 확인하고 동의합니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/회원가입5.png" alt="회원가입 첫번째 창에서 다음버튼"></li>
                                <li><pre>
5. 사용하실 닉네임을 입력하고 URL을 영문으로 입력합니다.
   참고: 다른 사람과의 중복은 불가합니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/회원가입6.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
6. 작업 & 관심 분야를 선택하고 완료버튼을 눌러 회원가입을 마칩니다.
                                </pre></li>
                            </ul>
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
                            <ul>
                                <li><img src="/resources/images/QnAguide/게시글업로드1.png" alt="메인화면 오른쪽 상단의 회원가입 버튼"></li>
                                <li><pre>
1. 로그인 후 메인화면 왼쪽 상단의 햄버거 버튼을 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/게시글업로드2.png" alt="회원가입 첫번째 창에서 아이디, 비밀번호, 비밀번호 확인 입력"></li>
                                <li>
                                    <pre>
2. 프로필을 누릅니다.
                                    </pre>
                                </li>
                                <li><img src="/resources/images/QnAguide/게시글업로드3.png" alt="회원가입 첫번째 창에서 약관 동의"></li>
                                <li><pre>
3. 새 게시글을 누릅니다.
                                </pre> 
                                </li>
                                <li><img src="/resources/images/QnAguide/게시글업로드4.png" alt="회원가입 첫번째 창에서 약관 동의 내용 확인"></li>
                                <li><pre>
4. 사진첨부를 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/게시글업로드5.png" alt="회원가입 첫번째 창에서 다음버튼"></li>
                                <li><pre>
5. 게시글로 올릴 사진을 선택하고 열기 버튼을 누릅니다.
   참고: 사진은 최대 6장까지 선택 가능합니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/게시글업로드6.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
6. 게시글 내용을 작성하고 해시태그를 입력합니다.
   참고: 해시태그는 자동으로 '#'이 붙어 나옵니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/게시글업로드7.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
7. 공유하기를 눌러 게시글을 업로드합니다.
                                </pre></li>
                            </ul>
                        </div>
                    </div>
                    <div id="ch-tab3" class="ch-cont">
                        <div>
                            <ul>
                                <li><img src="/resources/images/QnAguide/팔로우1.png" alt="메인화면 오른쪽 상단의 회원가입 버튼"></li>
                                <li><pre>
1. 소식을 받아 볼 친구의 프로필 페이지에서 프로필 사진 하단 노란색 사람모양+(더하기) 버튼을 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/팔로우2.png" alt="회원가입 첫번째 창에서 아이디, 비밀번호, 비밀번호 확인 입력"></li>
                                <li>
                                    <pre>
2. 파란색 사람모양x(가위표) 버튼이 되면서 팔로우가 됩니다.
   다시 한번 누르면 노란색 사람모양+으로 바뀌면서 팔로우가 끊기게 됩니다.
                                    </pre>
                                </li>
                                <li><img src="/resources/images/QnAguide/팔로우3.png" alt="회원가입 첫번째 창에서 약관 동의"></li>
                                <li><pre>
3. 왼쪽 노란색 사람모양을 누릅니다.
                                </pre> 
                                </li>
                                <li><img src="/resources/images/QnAguide/팔로우4.png" alt="회원가입 첫번째 창에서 약관 동의 내용 확인"></li>
                                <li><pre>
4. 여기서 자신이 팔로우하는 사용자 목록을 볼 수 있습니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/팔로우5.png" alt="회원가입 첫번째 창에서 다음버튼"></li>
                                <li><pre>
5. UNFOLLOW를 누르면 팔로우를 끊을 수 있습니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/팔로우6.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
6. 왼쪽 상단 FOLLOWER를 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/팔로우7.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
7. 여기서 나의 계정을 팔로우하는 사용자 목록을 볼 수 있습니다.
                                </pre></li>
                            </ul>
                        </div>
                    </div>
                    <div id="ch-tab4" class="ch-cont">
                        <div>
                            <ul>
                                <li><img src="/resources/images/QnAguide/메시지1.png" alt="메인화면 오른쪽 상단의 회원가입 버튼"></li>
                                <li><pre>
1. 메시지를 보낼 친구의 프로필 페이지에서 프로필 사진 하단 메시지(종이비행기) 버튼을 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/메시지2.png" alt="회원가입 첫번째 창에서 아이디, 비밀번호, 비밀번호 확인 입력"></li>
                                <li>
                                    <pre>
2. 보낼 메시지를 입력합니다.
                                    </pre>
                                </li>
                                <li><img src="/resources/images/QnAguide/메시지3.png" alt="회원가입 첫번째 창에서 약관 동의"></li>
                                <li><pre>
3. 전송을 눌러 메시지를 전송합니다.
                                </pre> 
                                </li>
                                <li><img src="/resources/images/QnAguide/메시지4.png" alt="회원가입 첫번째 창에서 약관 동의 내용 확인"></li>
                                <li><pre>
4. 메시지함 보기를 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/메시지6.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                
                                <li><pre>
5. 여기서 받은 메시지를 확인할 수 있습니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/메시지7.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
6. 왼쪽 상단 보낸 메시지를 누릅니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/메시지8.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
7. 여기서 보낸 메시지를 확인할 수 있습니다.
                                </pre></li>
                                <li><img src="/resources/images/QnAguide/메시지9.png" alt="회원가입 두번째 창에서 사용자 이름, URL 입력"></li>
                                <li><pre>
7. 메시지함 비우기로 전체 메시지를 지울 수 있습니다.
                                </pre></li>
                            </ul>
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