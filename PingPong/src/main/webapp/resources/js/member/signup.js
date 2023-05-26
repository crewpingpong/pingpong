
/* 유효성 검사 진행 여부 확인용 객체 */
// -> 모든 value가 true인 경우에만 회원 가입 진행
const checkObj1fjfjfjfjfj = {
    "memberEmail": false,
    "memberPw": false,
    "memberPwConfirm": false,
    "authKey": false, // 인증키
    "checkTerm1": false,
    "checkTerm2": false
};
const checkObj2fjfjfjfjfj = {
    "memberNickname": false,
    "memberUrl": false
};

// ----------------------------------------------- 이메일 유효성 검사 -----------------------------------------------
const memberEmail = document.getElementById("memberEmail");
const emailMessage = document.getElementById("emailMessage");

if (memberEmail != null) {
    // 이메일이 입력될 때 마다
    memberEmail.addEventListener("input", () => {

        // 입력된 이메일이 없을 경우
        if (memberEmail.value.trim().length == 0) {
            memberEmail.value = "";

            emailMessage.innerText = "메일을 받을 수 있는 이메일을 입력해주세요.";

            // confirm, error 클래스 삭제해서 검정 글씨로 만들기
            emailMessage.classList.remove("confirm", "error");

            checkObj1fjfjfjfjfj.memberEmail = false; // 빈칸 == 유효 X
            return;
        }


        // 정규 표현식을 이용해서 유효한 형식이지 판별
        // 1) 정규표현식 객체 생성
        const regEx = /^[A-Za-z\d\-\_]{4,}@[가-힣\w\-\_]+(\.\w+){1,3}$/;

        // 2) 입력 받은 이메일과 정규식 일치 여부 판별
        if (regEx.test(memberEmail.value)) { // 유효한 경우

            /****************************************************************************/
            /* fetch() api를 이용한 ajax(비동기 통신) */
            // GET방식 ajax 요청(파라미터를 쿼리스트링으로)
            fetch('/dupCheck/email?email=' + memberEmail.value)

                .then(response => response.text()) // 응답객체 -> 파싱(parsing, 데이터 형태 변환)

                .then(count => {
                    // 중복되면 1, 중복 아니면 0

                    if (count == 0) {
                        emailMessage.innerText = "사용 가능한 이메일 입니다.";
                        emailMessage.classList.add("confirm"); // .confirm 스타일 적용
                        emailMessage.classList.remove("error"); // .error 스타일 제거
                        checkObj1fjfjfjfjfj.memberEmail = true; // 유효 O
                    } else {
                        emailMessage.innerText = "이미 사용중인 이메일 입니다.";
                        emailMessage.classList.remove("confirm"); // .confirm 스타일 적용
                        emailMessage.classList.add("error"); // .error 스타일 제거
                        checkObj1fjfjfjfjfj.memberEmail = false; // 유효 O
                    }

                }) // 파싱한 데이터를 이용해서 수행할 코드 작성

                .catch(err => console.log(err)); // 예외처리

        } else { // 유효하지 않은 경우(무효인 경우)
            emailMessage.innerText = "이메일 형식이 유효하지 않습니다";
            emailMessage.classList.add("error"); // .error 스타일 적용
            emailMessage.classList.remove("confirm"); // .confirm 스타일 제거

            checkObj1fjfjfjfjfj.memberEmail = false; // 유효 X
        }
    });
}
// ----------------------------------------------- 이메일 유효성 검사 끝 -----------------------------------------------
// ----------------------------------------------- 비밀번호 유효성 검사 시작 -----------------------------------------------
// 비밀번호/비밀번호 확인 유효성 검사
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");
const pwMessage1 = document.getElementById("pwMessage1");
const pwMessage2 = document.getElementById("pwMessage2");
if (memberPw != null || memberPwConfirm != null) {
    // 비밀번호 입력 시 유효성 검사
    memberPw.addEventListener("input", (e) => {

        // 비밀번호가 입력되지 않은 경우
        if (memberPw.value.trim().length == 0) {
            memberPw.value = ""; // 띄어쓰지 못넣게 하기

            pwMessage1.innerText = "8글자 이상의 영어, 숫자, 특수문자를 포함한 비밀번호를 입력해 주세요.";
            pwMessage1.classList.remove("confirm", "error"); // 검정 글씨

            checkObj1fjfjfjfjfj.memberPw = false; // 빈칸 == 유효 X
            return;
        }
        

        // 정규 표현식을 이용한 비밀번호 유효성 검사

        // 8~ 영문 소문자, 최소 1개의 숫자 혹은 특수 문자 포함
        const regEx = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-z\d$@$!%*#?&]{8,}$/;

        // 입력한 비밀번호가 유효한 경우
        if (regEx.test(memberPw.value)) {
            checkObj1fjfjfjfjfj.memberPw = true;

            // 비밀번호가 유효하게 작성된 상태에서
            // 비밀번호 확인이 입력되지 않았을 때
            if (memberPwConfirm.value.trim().length == 0 || memberPwConfirm.value.trim().length != 0) {
                pwMessage1.innerText = "유효한 비밀번호 형식입니다";
                pwMessage1.classList.add("confirm");
                pwMessage1.classList.remove("error");

            } else {
                // 비밀번호가 유효하게 작성된 상태에서
                // 비밀번호 확인이 입력되어 있을 때

                // 비밀번호 == 비밀번호 확인  (같을 경우)
                if (memberPw.value == memberPwConfirm.value) {
                    pwMessage2.innerText = "비밀번호가 일치합니다";
                    pwMessage2.classList.add("confirm");
                    pwMessage2.classList.remove("error");
                    checkObj1fjfjfjfjfj.memberPwConfirm = true;


                } else { // 다를 경우
                    pwMessage2.innerText = "비밀번호가 일치하지 않습니다";
                    pwMessage2.classList.add("error");
                    pwMessage2.classList.remove("confirm");
                    checkObj1fjfjfjfjfj.memberPwConfirm = false;
                }
            }


        } else { // 유효하지 않은 경우

            pwMessage1.innerText = "비밀번호 형식이 유효하지 않습니다";
            pwMessage1.classList.add("error");
            pwMessage1.classList.remove("confirm");
            checkObj1fjfjfjfjfj.memberPw = false;
        }
    });

    memberPw.addEventListener("input", (e) => {
        // 비밀번호 확인 유효성 검사
        if (checkObj1fjfjfjfjfj.memberPw) { // 비밀번호가 유효하게 작성된 경우에

            // 비밀번호 == 비밀번호 확인  (같을 경우)
            if (memberPw.value == memberPwConfirm.value) {
                pwMessage2.innerText = "비밀번호가 일치합니다";
                pwMessage2.classList.add("confirm");
                pwMessage2.classList.remove("error");
                checkObj1fjfjfjfjfj.memberPwConfirm = true;

            } else { // 다를 경우
                pwMessage2.innerText = "비밀번호가 일치하지 않습니다";
                pwMessage2.classList.add("error");
                pwMessage2.classList.remove("confirm");
                checkObj1fjfjfjfjfj.memberPwConfirm = false;
            }

        } else { // 비밀번호가 유효하지 않은 경우
            checkObj1fjfjfjfjfj.memberPwConfirm = false;
        }
    });
    memberPwConfirm.addEventListener('input', () => {

        if (checkObj1fjfjfjfjfj.memberPw) { // 비밀번호가 유효하게 작성된 경우에

            // 비밀번호 == 비밀번호 확인  (같을 경우)
            if (memberPw.value == memberPwConfirm.value) {
                pwMessage2.innerText = "비밀번호가 일치합니다";
                pwMessage2.classList.add("confirm");
                pwMessage2.classList.remove("error");
                checkObj1fjfjfjfjfj.memberPwConfirm = true;

            } else { // 다를 경우
                pwMessage2.innerText = "비밀번호가 일치하지 않습니다";
                pwMessage2.classList.add("error");
                pwMessage2.classList.remove("confirm");
                checkObj1fjfjfjfjfj.memberPwConfirm = false;
            }

        } else { // 비밀번호가 유효하지 않은 경우
            checkObj1fjfjfjfjfj.memberPwConfirm = false;
        }
    });
}
// ----------------------------------------------- 비밀번호 유효성 검사 끝 -----------------------------------------------
// ----------------------------------------------- 이메일 인증 시작 -----------------------------------------------
// 인증번호 발송
const sendAuthKeyBtn = document.getElementById("sendAuthKeyBtn");
const authKeyMessage = document.getElementById("authKeyMessage");
let authTimer;
let authMin = 4;
let authSec = 59;

// 인증번호를 발송한 이메일 저장
let tempEmail;
if (sendAuthKeyBtn != null) {
    sendAuthKeyBtn.addEventListener("click", function (e) {
        authMin = 4;
        authSec = 59;
        checkObj1fjfjfjfjfj.authKey = false;

        if (checkObj1fjfjfjfjfj.memberEmail) { // 중복이 아닌 이메일인 경우

            sendAuthKeyBtn.setAttribute("disabled", "disabled") // 재전송 방지

            /* fetch() API 방식 ajax */
            fetch("/sendEmail/signUp?email=" + memberEmail.value)
                .then(resp => resp.text())
                .then(result => {
                    if (result > 0) {
                        console.log("인증 번호가 발송되었습니다.")
                        tempEmail = memberEmail.value;
                        emailMessage.classList.add("class-hidden");
                    } else {
                        console.log("인증번호 발송 실패")
                    }
                })
                .catch(err => {
                    console.log("이메일 발송 중 에러 발생");
                    console.log(err);
                });

            alert("인증번호가 발송 되었습니다.");

            sendAuthKeyBtn.innerText = "05:00";
            sendAuthKeyBtn.classList.remove("confirm");
            sendAuthKeyBtn.classList.remove("class-hidden");
            // authKeyMessage.innerText = "05:00";
            // authKeyMessage.classList.remove("confirm");
            // authKeyMessage.classList.add("error");
            // authKeyMessage.classList.remove("class-hidden");

            authTimer = window.setInterval(() => {
                sendAuthKeyBtn.innerText = "0" + authMin + ":" + (authSec < 10 ? "0" + authSec : authSec);
                // 남은 시간이 0분 0초인 경우
                if (authMin == 0 && authSec == 0) {
                    checkObj1fjfjfjfjfj.authKey = false;
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

        } else {
            alert("중복되지 않은 이메일을 작성해주세요.");
            memberEmail.focus();
        }

    });

    // 인증 확인
    const authKey = document.getElementById("authKey");
    const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");

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
                        authKeyMessage.innerText = "인증되었습니다.";
                        authKeyMessage.classList.remove("error");
                        authKeyMessage.classList.add("confirm");
                        checkObj1fjfjfjfjfj.authKey = true;

                    } else {
                        alert("인증번호가 일치하지 않습니다.")
                        checkObj1fjfjfjfjfj.authKey = false;
                    }
                })
                .catch(err => console.log(err));


        } else {
            alert("인증 시간이 만료되었습니다. 다시 시도해주세요.")
        }

    });
}
// ----------------------------------------------- 이메일 인증 끝 -----------------------------------------------
// URL 유효성 검사
const memberUrl = document.getElementById("memberUrl");
const URLCheckMessage = document.getElementById("URLCheckMessage");
if (memberUrl != null) {
    // URL 입력이 되었을 떄
    memberUrl.addEventListener("input", () => {
        // URL 입력이 되지 않은 경우
        if (memberUrl.value.trim() == '') {
            URLCheckMessage.innerText = "3~16글자 (영어, 숫자, - )";

            URLCheckMessage.classList.remove("confirm", "error");
            checkObj2fjfjfjfjfj.memberUrl = false;
            memberUrl.value = ""; // 빈칸 입력 방지 코드
            return;
        }
        const regEx = /^[a-zA-Z0-9-]{3,16}$/;

        if (regEx.test(memberUrl.value)) { // 유효

            fetch("/dupCheck/URL?URL=" + memberUrl.value)
                .then(resp => resp.text()) // 응답 객체를를 text로 파싱(변환)
                .then(count => {

                    if (count == 0) {
                        URLCheckMessage.innerText = "사용 가능한 URL 입니다.";
                        URLCheckMessage.classList.add("confirm"); // .confirm 스타일 적용
                        URLCheckMessage.classList.remove("error"); // .error 스타일 제거
                        checkObj2fjfjfjfjfj.memberUrl = true; // 유효 O
                    } else {
                        URLCheckMessage.innerText = "이미 사용중인 URL 입니다.";
                        URLCheckMessage.classList.remove("confirm"); // .confirm 스타일 적용
                        URLCheckMessage.classList.add("error"); // .error 스타일 제거
                        checkObj2fjfjfjfjfj.memberUrl = false; // 유효 X
                    }
                })
                .catch(err => console.log(err));

        } else { // 무효
            URLCheckMessage.innerText = "URL 형식이 유효하지 않습니다."
            URLCheckMessage.classList.add("error");
            URLCheckMessage.classList.remove("confirm");
            checkObj2fjfjfjfjfj.memberUrl = false;
        }
    });
}
// 닉네임 유효성 검사

const memberNickname = document.getElementById("memberNickname");
const nickMessage = document.getElementById("nickMessage");

if (memberNickname != null) {
    // 닉네임이 입력이 되었을 떄
    memberNickname.addEventListener("input", () => {
        // 닉네임에 입력이 되지 않은 경우
        if (memberNickname.value.trim() == '') {
            nickMessage.innerText = "한글,영어,숫자로만 2~10글자";

            nickMessage.classList.remove("confirm", "error");
            checkObj2fjfjfjfjfj.memberNickname = false;
            memberNickname.value = ""; // 빈칸 입력 방지 코드
            return;
        }

        // 정규 표현식으로 유효성 검사
        const regEx = /^[가-힣\w\d]{2,10}$/;

        // test()  문자열을 넣으면 정규표현식 비교 후 boolean 출력
        if (regEx.test(memberNickname.value)) { // 유효

            fetch("/dupCheck/nickname?nickname=" + memberNickname.value)
                .then(resp => resp.text()) // 응답 객체를를 text로 파싱(변환)
                .then(count => {
                    // 중복되면 1, 중복 아니면 0
                    if (count == 0) {
                        nickMessage.innerText = "사용 가능한 닉네임 입니다.";
                        nickMessage.classList.add("confirm"); // .confirm 스타일 적용
                        nickMessage.classList.remove("error"); // .error 스타일 제거
                        checkObj2fjfjfjfjfj.memberNickname = true; // 유효 O
                    } else {
                        nickMessage.innerText = "이미 사용중인 닉네임 입니다.";
                        nickMessage.classList.remove("confirm"); // .confirm 스타일 적용
                        nickMessage.classList.add("error"); // .error 스타일 제거
                        checkObj2fjfjfjfjfj.memberNickname = false; // 유효 X
                    }
                })
                .catch(err => console.log(err));

        } else { // 무효
            nickMessage.innerText = "닉네임 형식이 유효하지 않습니다."
            nickMessage.classList.add("error");
            nickMessage.classList.remove("confirm");
            checkObj2fjfjfjfjfj.memberNickname = false;
        }
    });
}

/* 약관 */
const checkTerms = document.getElementById("checkTerms")
const checkTermsAll = document.getElementById("checkTermsAll")

const checkTerms1 = document.getElementById("checkTerms1")
const checkTerms2 = document.getElementById("checkTerms2")
const checkTerms3 = document.getElementById("checkTerms3")

let isAllChecked = false;

function toggleCheckboxes() {
    isAllChecked = !isAllChecked;
    checkTerms1.checked = isAllChecked;
    checkTerms2.checked = isAllChecked;
    checkTerms3.checked = isAllChecked;
    checkTerms.checked = isAllChecked;
    checkTermsAll.checked = isAllChecked;
    checkObj1fjfjfjfjfj.checkTerm1 = isAllChecked;
    checkObj1fjfjfjfjfj.checkTerm2 = isAllChecked;
}
checkTerms.addEventListener("click", toggleCheckboxes);
checkTermsAll.addEventListener("click", toggleCheckboxes);


/* 약관 확인하기 창 열기 */
const openTermsBtn = document.getElementsByClassName("open-termsBtn");

if (openTermsBtn[0] != null) {
    openTermsBtn[0].addEventListener("click", () => {
        document.getElementsByClassName("termsbackground")[0].style.display = "block";
    });

}

/* 약관 확인하기 창 닫기 */
const closeSignupBtn = document.getElementsByClassName("close-signup-terms")[0];
if (closeSignupBtn) {
    closeSignupBtn.addEventListener("click", () => {
        document.getElementsByClassName("termsbackground")[0].style.display = 'none';
    });
}


/* signup 제출 시 검사 */
if (document.getElementById("signUpFrm") != null) {
    document.getElementById("signUpFrm").addEventListener("submit", e => {

        for (let key in checkObj1fjfjfjfjfj) {

            if (!checkObj1fjfjfjfjfj[key]) { // 각 key에 대한 value(true/false)를 얻어와
                // false인 경우 == 유효하지 않다!
                switch (key) {
                    case "memberEmail":
                        alert("이메일이 유효하지 않습니다"); break;

                    case "memberPw":
                        alert("비밀번호가 유효하지 않습니다"); break;

                    case "memberPwConfirm":
                        alert("비밀번호가 확인되지 않았습니다"); break;

                    case "authKey":
                        alert("인증번호가 확인되지 않았습니다"); break;

                    case "checkTerm1":
                        alert("약관동의가 확인되지 않았습니다"); break;

                    case "checkTerm2":
                        alert("약관동의가 확인되지 않았습니다"); break;
                }
                // 유효하지 않은 input 태그로 focus 이동
                // - key를 input의 id와 똑같이 설정했음!
                // document.getElementById(key).focus();

                e.preventDefault(); // form 태그 기본 이벤트 제거
                return; // 함수 종료
            }
        }
    });
}
/* signupInfo 제출 시 검사 */
if (document.getElementById("signupInfoFrm") != null) {
    document.getElementById("signupInfoFrm").addEventListener("submit", e => {

        for (let key in checkObj2fjfjfjfjfj) {

            if (!checkObj2fjfjfjfjfj[key]) { // 각 key에 대한 value(true/false)를 얻어와
                // false인 경우 == 유효하지 않다!
                switch (key) {
                    case "memberNickname":
                        alert("닉네임이 입력되지 않았거나 이미 존재하는 닉네임입니다."); break;

                    case "memberUrl":
                        alert("URL이 입력되지 않았거나 이미 존재하는 URL입니다."); break;
                }

                document.getElementById(key).focus();

                e.preventDefault(); // form 태그 기본 이벤트 제거
                return; // 함수 종료
            }
        }
    });
}



