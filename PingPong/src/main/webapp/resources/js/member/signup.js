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
