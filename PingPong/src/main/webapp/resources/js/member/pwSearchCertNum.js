
// 인증키 결과 반환
const checkCertNum = document.getElementById("checkCertNum");
// 인증키 받기 or 타이머
const authKeyMessage = document.getElementById("authKeyMessage");

const clickBtn = document.querySelector(".click-btn");


// ----------------------------------------------- 이메일 인증 시작 -----------------------------------------------
// 인증번호 발송
let authTimer;
let authMin = 4;
let authSec = 59;

// 인증번호를 발송한 이메일 저장
let tempEmail;

sendAuthKeyBtn.addEventListener("click", function (e) {
    authMin = 4;
    authSec = 59;
    console.log("memberEmail : "+memberEmail);
    /* fetch() API 방식 ajax */
    fetch("/sendEmail/pwSearchCertNum?email=" + memberEmail)
        .then(resp => resp.text())
        .then(result => {
            if (result > 0) {
                console.log("인증 번호가 발송되었습니다.")
                tempEmail = memberEmail;
                console.log("tempEmail : " + tempEmail);

                sendAuthKeyBtn.setAttribute("disabled", "disabled") // 재전송 방지
                sendAuthKeyBtn.innerText = "05:00";
                sendAuthKeyBtn.classList.remove("confirm");

            } else {
                console.log("인증번호 발송 실패")
            }
        })
        .catch(err => {
            console.log("이메일 발송 중 에러 발생");
            console.log(err);
        });

    alert("인증번호가 발송 되었습니다.");

    authTimer = window.setInterval(() => {
        sendAuthKeyBtn.innerText = "0" + authMin + ":" + (authSec < 10 ? "0" + authSec : authSec);
        // 남은 시간이 0분 0초인 경우
        if (authMin == 0 && authSec == 0) {
            checkObj1.authKey = false;
            clearInterval(authTimer);
            sendAuthKeyBtn.classList.add("error");
            return;
        }
        // 0초인 경우
        if (authSec == 0) {
            authSec = 60;
            authMin--;
        }

        authSec--; // 1초 감소

    }, 1000)
});

// 인증 확인
const authKey = document.getElementById("authKey");
const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");
const pwSearchCertNumFrm = document.getElementById("pwSearchCertNumFrm");

checkAuthKeyBtn.addEventListener("click", function () {

    if (authMin > 0 || authSec > 0) { // 시간 제한이 지나지 않은 경우에만 인증번호 검사 진행
        /* fetch API */
        const obj = { "inputKey": authKey.value, "email": tempEmail }
        const query = new URLSearchParams(obj).toString()
        fetch("/sendEmail/checkAuthKey?" + query)
            .then(resp => resp.text())
            .then(result => {
                if (result > 0) {
                    clearInterval(authTimer);
                    checkCertNum.value="true";
                    pwSearchCertNumFrm.submit();
                } else {
                    alert("인증번호가 일치하지 않습니다.")
                    checkCertNum.value="false";
                }
            })
            .catch(err => console.log(err));

    } else {
        alert("인증 시간이 만료되었습니다. 다시 시도해주세요.")
    }
    
});

// ----------------------------------------------- 이메일 인증 끝 -----------------------------------------------