
/* 유효성 검사 진행 여부 확인용 객체 */
// -> 모든 value가 true인 경우에만 회원 가입 진행
const checkObj = {
  "memberEmail" : false,
  "memberPw" : false,
  "memberPwConfirm" : false,
  "memberNickname" : false,
  "memberUrl" : false
  // "authKey" : false // 인증키
};

// 이메일 유효성 검사
const memberEmail = document.getElementById("memberEmail");
const emailMessage = document.getElementById("emailMessage");

// 이메일이 입력될 때 마다
memberEmail.addEventListener("input", () => {

    // 입력된 이메일이 없을 경우
    if(memberEmail.value.trim().length == 0){
        memberEmail.value = ""; 

        emailMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";

        // confirm, error 클래스 삭제해서 검정 글씨로 만들기
        emailMessage.classList.remove("confirm", "error");

        checkObj.memberEmail = false; // 빈칸 == 유효 X
        return;
    }


    // 정규 표현식을 이용해서 유효한 형식이지 판별
    // 1) 정규표현식 객체 생성
    const regEx = /^[A-Za-z\d\-\_]{4,}@[가-힣\w\-\_]+(\.\w+){1,3}$/;

    // 2) 입력 받은 이메일과 정규식 일치 여부 판별
    if(  regEx.test(memberEmail.value)  ){ // 유효한 경우

        /****************************************************************************/
        /* fetch() api를 이용한 ajax(비동기 통신) */
        // GET방식 ajax 요청(파라미터를 쿼리스트링으로)
        fetch('/dupCheck/email?email=' + memberEmail.value)

        .then(response => response.text()) // 응답객체 -> 파싱(parsing, 데이터 형태 변환)
        
        .then(count => {
            // 중복되면 1, 중복 아니면 0

            if(count == 0){
                emailMessage.innerText = "사용 가능한 이메일 입니다.";
                emailMessage.classList.add("confirm"); // .confirm 스타일 적용
                emailMessage.classList.remove("error"); // .error 스타일 제거
                checkObj.memberEmail = true; // 유효 O
            }else{
                emailMessage.innerText = "이미 사용중인 이메일 입니다.";
                emailMessage.classList.remove("confirm"); // .confirm 스타일 적용
                emailMessage.classList.add("error"); // .error 스타일 제거
                checkObj.memberEmail = false; // 유효 O
            }

        }) // 파싱한 데이터를 이용해서 수행할 코드 작성

        .catch(err => console.log(err)); // 예외처리
        
    } else{ // 유효하지 않은 경우(무효인 경우)
        emailMessage.innerText = "이메일 형식이 유효하지 않습니다";
        emailMessage.classList.add("error"); // .error 스타일 적용
        emailMessage.classList.remove("confirm"); // .confirm 스타일 제거

        checkObj.memberEmail = false; // 유효 X
    }
});


/* 이메일 전송 버튼 눌렀을 때 */
const certisend = document.querySelector(".certi-send");
const certiresend = document.querySelector(".certi-resend");
const emailsend = document.querySelector(".email-send");
const email = document.querySelector(".signup-input-email input");

certisend.addEventListener("click",()=>{
  if(email.value.trim().length!==0){  
    emailsend.style.display="block";
    email.style.border="1px solid green";
    email.focus(); // 비밀번호 확인에 초점을 맞춥
    e.preventDefault();
  }
})

/* 비밀번호 일치 확인 */
// 다음 페이지 넘어가는 버튼 눌렀을 떄
const signupNext = document.querySelector(".signup-next");
const userPassword = document.querySelector(".signup-input-password>input");
const userPasswordCorrect = document.querySelector(".signup-password-check>input");
const pwInconsistency=document.querySelector(".pwInconsistency");


document.querySelector(".signup-box").addEventListener("submit",e=>{
  if(userPassword.value!==userPasswordCorrect.value){
    alert("비밀번호를 맞게 입력해주세요.");
    userPasswordCorrect.style.outline="1px solid red";
    pwInconsistency.style.display="block";
    userPasswordCorrect.value="";
    userPasswordCorrect.focus(); // 비밀번호 확인에 초점을 맞춥
    e.preventDefault();
  }
});


/* 약관 확인하기 창 열기 */
const openTermsBtn = document.getElementsByClassName("open-termsBtn");

openTermsBtn[0].addEventListener("click", () => {
  document.getElementsByClassName("termsbackground")[0].style.display="block";
});


/* 약관 확인하기 창 닫기 */
const closeSignupBtn = document.getElementsByClassName("close-signup-terms")[0];
closeSignupBtn.addEventListener("click", () => {
    document.getElementsByClassName("termsbackground")[0].style.display = 'none';
});


