const emailResetSendbtn = document.querySelector(".email-reset-button");
const emailPwReset = document.querySelector(".email-pw-reset");

emailResetSendbtn.addEventListener("click", () => {
  emailPwReset.style.display = "block";
})

// ----------------------------------------------- 가입 이메일 유무 검사 -----------------------------------------------
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

      checkObj1.memberEmail = false; // 빈칸 == 유효 X
      return;
    }



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
          checkObj1.memberEmail = true; // 유효 O
        } else {
          emailMessage.innerText = "이미 사용중인 이메일 입니다.";
          emailMessage.classList.remove("confirm"); // .confirm 스타일 적용
          emailMessage.classList.add("error"); // .error 스타일 제거
          checkObj1.memberEmail = false; // 유효 O
        }

      }) // 파싱한 데이터를 이용해서 수행할 코드 작성

      .catch(err => console.log(err)); // 예외처리


  });
}
// ----------------------------------------------- 가입 이메일 유무 검사 -----------------------------------------------