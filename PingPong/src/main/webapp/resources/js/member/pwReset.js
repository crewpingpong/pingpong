const emailResetSendbtn = document.querySelector(".email-reset-button");
const emailPwReset = document.querySelector(".email-pw-reset");

emailResetSendbtn.addEventListener("click", () => {
  emailPwReset.style.display = "block";
})
// 이메일 확인 form
const findEmailFrm = document.getElementById("findEmailFrm");
// 인증키 확인 form
const checkCertNum = document.getElementById("checkCertNum");
// 비번 변경 form
const pwReset = document.getElementById("pwReset");
// 로고 아래 메세지
const pwSearchMessage = document.querySelector(".pw-search-message");
// 인증키 보내기 && 다음
const sendAuthKeyBtn = document.getElementById("sendAuthKeyBtn");
// 인증키 타이머
const authKeyMessage = document.getElementById("authKeyMessage");
// 인증 && 다음 버튼
const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");



// ----------------------------------------------- 이메일 인증 시작 -----------------------------------------------
// 인증번호 발송
let authTimer;
let authMin = 4;
let authSec = 59; 

// 인증번호를 발송한 이메일 저장
// let tempEmail;
// if(sendAuthKeyBtn != null){
//     sendAuthKeyBtn.addEventListener("click", function(e){
//         authMin = 4;
//         authSec = 59;
//         checkObj1.authKey = false;

//         if(checkObj1.memberEmail){ // 중복이 아닌 이메일인 경우 << 이메일이 있는 경우로 변경 예정

//             sendAuthKeyBtn.setAttribute("disabled", "disabled") // 재전송 방지
//             email.style.border="1px solid green";
            
//             /* fetch() API 방식 ajax */
//             fetch("/sendEmail/signUp?email="+memberEmail.value)
//             .then(resp => resp.text())
//             .then(result => {
//                 if(result > 0){
//                     console.log("인증 번호가 발송되었습니다.")
//                     tempEmail = memberEmail.value;
//                     emailMessage.classList.add("class-hidden");
//                 }else{
//                     console.log("인증번호 발송 실패")
//                 }
//             })
//             .catch(err => {
//                 console.log("이메일 발송 중 에러 발생");
//                 console.log(err);
//             });

//             alert("인증번호가 발송 되었습니다.");
            
//             sendAuthKeyBtn.innerText = "05:00";
//             sendAuthKeyBtn.classList.remove("confirm");
//             sendAuthKeyBtn.classList.remove("class-hidden");
//             // authKeyMessage.innerText = "05:00";
//             // authKeyMessage.classList.remove("confirm");
//             // authKeyMessage.classList.add("error");
//             // authKeyMessage.classList.remove("class-hidden");

//             authTimer = window.setInterval(()=>{
//                 sendAuthKeyBtn.innerText = "0" + authMin + ":" + (authSec<10 ? "0" + authSec : authSec);
//                 // 남은 시간이 0분 0초인 경우
//                 if(authMin == 0 && authSec == 0){
//                     checkObj1.authKey = false;
//                     clearInterval(authTimer);
//                     sendAuthKeyBtn.classList.add("error");
//                     return;
//                 }
//                 // 0초인 경우
//                 if(authSec == 0){
//                     authSec = 60;
//                     authMin--;
//                 }

//                 authSec--; // 1초 감소

//             }, 1000)

//         } else{
//             alert("중복되지 않은 이메일을 작성해주세요.");
//             memberEmail.focus();
//         }

//     });

//     // 인증 확인
//     const authKey = document.getElementById("authKey");
//     const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");

//     checkAuthKeyBtn.addEventListener("click", function(){

//         if(authMin > 0 || authSec > 0){ // 시간 제한이 지나지 않은 경우에만 인증번호 검사 진행
//             /* fetch API */
//             const obj = {"inputKey":authKey.value, "email":tempEmail}
//             const query = new URLSearchParams(obj).toString()
//             fetch("/sendEmail/checkAuthKey?" + query)
//             .then(resp => resp.text())
//             .then(result => {
//                 if(result > 0){
//                     clearInterval(authTimer);
//                     authKeyMessage.innerText = "인증되었습니다.";
//                     authKeyMessage.classList.remove("error");
//                     authKeyMessage.classList.add("confirm");
//                     CertNum.style.border="1px solid green";
//                     checkObj1.authKey = true;

//                 } else{
//                     alert("인증번호가 일치하지 않습니다.")
//                     checkObj1.authKey = false;
//                 }
//             })
//             .catch(err => console.log(err));


//         } else{
//             alert("인증 시간이 만료되었습니다. 다시 시도해주세요.")
//         }

//     });
// }
// ----------------------------------------------- 이메일 인증 끝 -----------------------------------------------