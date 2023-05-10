/* 탭 메뉴 */
const tabList = document.querySelectorAll('.myPage-left-side-menu > ul > li');
const contents = document.querySelectorAll('.myPage-content-main')
let activeCont = '#myPageModiTab1';


for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.myPage-left-side-menu > ul > li > a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('myPage_modi_is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('myPage_modi_is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}


// 개인 홈 프로필 js
// 홈프로필 사진 변경
const profileUpload = document.querySelector('.profileUpload');
const upload = document.querySelector('.profile-change-area>div');
upload.addEventListener('click', () => profileUpload.click());
// 파일 첨부 버튼 위임

function getImageFiles(e) {
    // 이미지 배열로 받아서 검사 (아래부분 늘려주고 요소 추가하는 코드 넣으면 여러 개 가능)
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const imageBox = document.querySelector('.profile-change-area');
    const docFrag = new DocumentFragment();

    // 이미지 1개 이상 들어오면 돌려보내주기
    if ([...files].length > 1) {
        alert('이미지는 하나만 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach(file => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return
        }

        // 파일 갯수 검사 이미지 1개 들어온게 맞다면 요소 추가
        if ([...files].length == 1) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);
                imageBox.innerHTML = "";
                imageBox.appendChild(preview);
            };
            reader.readAsDataURL(file);
        }
    });
}

function createElement(e, file) {
    // const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    // div.appendChild(img);

    return img;
}

profileUpload.addEventListener('change', getImageFiles);





/* 저장 알림 */
const save = document.querySelector('.myPage-save>button:first-child');
save.addEventListener("click", () => {
  alert('저장되었습니다.')
});



/* **************************** */

/* 비밀번호 변경 시 일치할 때 나오는 문구 */

const passwordChange = document.querySelector(".password-change");
const passwordcorrect = document.querySelector(".passwordcorrect");

passwordChange.addEventListener("click", e => {
  
  const newPw = document.querySelector('.new-password>input').value;
  const newPwChk = document.querySelector('.new-password-check>input').value;

  // 새 비밀번호가 입력되지 않은 경우
  if(newPw.trim().length ==0){
    alert("비밀번호를 입력해주세요.");
    newPw="";
    newPw.focus(); // 새 비밀번호 input 태그에 초점을 맞춤
    e.preventDefault();
    return; // 제출 못하게 하기
  }
  // 비밀번호 확인이 입력되지 않은 경우
  if(newPwChk.trim().length ==0){
      alert("새 비밀번호 확인을 입력해주세요.");
      newPwChk="";
      newPwChk.focus(); // 비밀번호 확인 input 태그에 초점을 맞춤
      e.preventDefault();
      return; // 제출 못하게 하기
  }
  // 비밀번호가 6글자 미만으로 입력된 경우
  if(newPw.trim().length < 6){
    alert("비밀번호를 6자리 이상 입력해주세요.");
    newPwChk="";
    newPwChk.focus(); // 비밀번호 확인 input 태그에 초점을 맞춤
    e.preventDefault();
    return; // 제출 못하게 하기
  }

  // 비밀번호가 일치하는 경우
  if (newPw === newPwChk && newPw.trim().length >= 6) {
    document.querySelector('.new-password input').style.border="1px solid green"
    document.querySelector('.new-password-check input').style.border="1px solid green"
    alert("비밀번호가 변경되었습니다.");
  }
  // 비밀번호가 일치하지 않는 경우
  else{
    alert("비밀번호가 일치하지 않습니다.");
  }
});



/* 회원 탈퇴 */
const secession = document.querySelector(".secessionBtn");

secession.addEventListener("click", () => {
  alert("회원 탈퇴가 완료되었습니다.");
});


