/* 로그인 확인 */
const loginButton = document.querySelector(".login-button");

loginButton.addEventListener("click", e => {
  
    const emailInput = document.querySelector('.login-input-email>input').value;
    const passwordInput = document.querySelector('.login-input-password>input').value;

    // 이메일이 입력되지 않은 경우
    if(emailInput.trim().length ==0){
      alert("이메일을 입력해주세요.");
      emailInput="";
      emailInput.focus(); // 이메일 input 태그에 초점을 맞춤
      e.preventDefault();
      return; // 제출 못하게 하기
  }
  // 비밀번호가 입력되지 않은 경우
  if(passwordInput.trim().length ==0){
      alert("비밀번호를 입력해주세요.");
      passwordInput="";
      passwordInput.focus(); // 이메일 input 태그에 초점을 맞춤
      e.preventDefault();
      return; // 제출 못하게 하기
  }

});
