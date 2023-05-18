/* *** 탭 메뉴 *** */
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


/* ********************************************************************** */

/* *** 내 정보 수정 *** */
const memberNickname = document.querySelector("#memberNickname");
const memberUrl = document.querySelector("#memberUrl");
const updateInfo = document.querySelector("#updateInfo");
const editCompleteBtn = document.querySelector("#editCompleteBtn");

// 내 정보 수정 form태그가 존재할 때 (내 정보 페이지)
if(updateInfo != null){

    // 수정 전 닉네임/URL 저장
    initNickname = memberNickname.value;
    initUrl = memberUrl.value;

    /* 닉네임 유효성 검사 */
    memberNickname.addEventListener("input", () => {

        if(memberNickname.value == initNickname){ 
            memberNickname.removeAttribute("style");
            return;
        }

        const regEx = /^[가-힣\w\d]{2,20}$/;

        if(regEx.test(memberNickname.value)){
            memberNickname.style.color = "green";
        
        }else{ 
            memberNickname.style.color = "red";
        }
    });

    /* URL 유효성 검사 */
    memberUrl.addEventListener("input", () => {

        if(memberUrl.value == initUrl){
            memberUrl.removeAttribute("style");
            return;
        }

        const regEx = /^[a-zA-z0-9]{4,12}$/;

        if(regEx.test(memberUrl.value)){
            memberUrl.style.color = "green";
        
        }else{
            memberUrl.style.color = "red";
        }
    });

    /* 유효하지 않은 값이 있으면 제출 X */
    editCompleteBtn.addEventListener("click", e => {

        // 닉네임이 유효하지 않을 경우
        if(memberNickname.style.color == "red"){
            alert("닉네임이 유효하지 않습니다.")
            memberNickname.focus(); // 포커스 이동
            e.preventDefault(); // 기본 이벤트 제거
            return;
        }

        // URL이 유효하지 않을 경우
        if(memberUrl.style.color == "red"){
            alert("URL이 유효하지 않습니다.")
            memberUrl.focus(); // 포커스 이동
            e.preventDefault(); // 기본 이벤트 제거
            return;
        }

        updateInfo.submit();
    });
}


// 홈프로필 배경 변경
const profileImage = document.querySelector("#profileImage");   // img태그
const imageInput = document.querySelector("#file");       // input태그
const deleteProfile = document.querySelector("#deleteProfile"); // x버튼

let initCheck; // 초기 프로필 이미지 상태
let deleteCheck = -1; // 프로필 이미지가 새로 업로드 되거나 삭제 되었음을 나타내는 변수
// -1 == 초기값, 0 == 프로필 삭제(x버튼), 1 == 새 이미지 업로그
let originalImage; // 초기 프로필 이미지 파일 경로 저장

if(imageInput != null){ 
    // 프로필 이미지가 출력되는 img태그의 src 속성을 저장
    originalImage = profileImage.getAttribute("src");

    // 회원 프로필 화면 진입 시 현재 회원의 프로필 이미지 상태를 확인
    if(profileImage.getAttribute("src") == "/resources/images/pingpong.ico"){
        initCheck = false; // 기본 이미지
    }
    else{
        initCheck = true; // 이전 업로드 이미지
    }

    imageInput.addEventListener("change", e => {

        const maxSize = 1 * 1024 * 1024 * 2; // 파일 최대 크기 지정(바이트 단위)

        console.log(e.target);       // input
        console.log(e.target.value); // 업로드 된 파일 경로
        console.log(e.target.files); // 업로드 된 파일의 정보가 담긴 배열
        const file = e.target.files[0]; // 업로드 한 파일의 정보가 담긴 객체
        
        // 파일을 한 번 선택한 후 취소했을 때
        if(file == undefined){ 
            console.log("파일 선택이 취소됨");
            deleteCheck = -1; // 취소 == 파일 없음 == 초기상태

            // 취소 시 기존 프로필 이미지로 변경
            profileImage.setAttribute("src", originalImage);

            return;
        }

        if(file.size > maxSize){ 
            alert("2MB 이하의 이미지를 선택해주세요.")
            imageInput.value = "";
            // input type="file" 태그에 대입할 수 있는 value는 ""(빈칸) 뿐이다!
            deleteCheck = -1; // 취소 == 파일 없음 == 초기상태 

            // 기존 프로필 이미지로 변경
            profileImage.setAttribute("src", originalImage);

            return;
        }

        // JS에서 파일을 읽는 객체
        const reader = new FileReader();

        reader.readAsDataURL(file);
        // 매개변수에 작성된 파일을 읽어서 저장 후  
        // 파일을 나타내는 URL을 result 속성으로 얻어올 수 있게 함

        // 파일을 다 읽었을 때
        reader.onload = e => {
            //console.log(e.target);
            //console.log(e.target.result); // 읽은 파일의 URL

            const url = e.target.result;

            // 프로필이미지(img) 태그에 src 속성으로 추가
            profileImage.setAttribute("src", url);

            deleteCheck = 1;
        }
    });

    // x 버튼 클릭 시 
    deleteProfile.addEventListener("click", () =>{

        imageInput.value=""; 
        profileImage.setAttribute("src", "/resources/images/pingpong.ico");

        deleteCheck = 0;
    });

    // #profileFrm이 제출 되었을 때
    document.querySelector("#updateInfo").addEventListener("submit", e => {

        let flag = true;

        // 프로필 이미지가 없다 -> 있다
        if(!initCheck && deleteCheck == 1) flag = false;

        // 이전 프로필 이미지가 있다 -> 삭제
        if(initCheck && deleteCheck == 0) flag = false;

        // 이전 프로필 이미지가 있다 -> 새 이미지
        if(initCheck && deleteCheck == 1) flag = false;

        if(flag){ // flag == true -> 제출하면 안 되는 경우
            e.preventDefault(); // form 기본 이벤트 제거
            alert("이미지 변경 후 클릭하세요");
        }
    });
}



/* ********************************************************************** */

/* 비밀번호 변경 제출 시 */
const currentPw = document.querySelector("#currentPw");
const newPw = document.querySelector("#newPw");
const newPwConfirm = document.querySelector("#newPwConfirm");
const secessionBtn = document.querySelector("#secessionBtn");
const changePwFrm = document.querySelector("#changePwFrm");

if(changePwFrm != null){ // 현재 페이지가 비밀번호 변경 페이지인 경우

    changePwBtn.addEventListener("click", e => {

        // 현재 비밀번호 미작성 시
        if(currentPw.value.trim() == ""){
            alert("현재 비밀번호를 입력해주세요");
            e.preventDefault();
            currentPw.focus();
            return;
        }

        // 비밀번호 유효성 검사
        const regEx = /^[a-zA-Z0-9\!\@\#\-\_]{6,20}$/; 
        if(!regEx.test(newPw.value)){
            alert("비밀번호가 유효하지 않습니다");
            e.preventDefault();
            newPw.focus();
            return;
        }
    
        // 비밀번호 != 비밀번호 확인
        if(newPw.value != newPwConfirm.value){
            alert("비밀번호가 일치하지 않습니다");
            e.preventDefault();
            newPwConfirm.focus();
            return;
        }

        changePwFrm.submit();
    });
}



/* 탈퇴 제출 시 */
const secessionFrm = document.querySelector("#secessionFrm");

if(secessionFrm != null){ // 탈퇴 페이지인 경우

    const memberPw = document.querySelector("#memberPw");
    const agree = document.querySelector("#agree");

    secessionBtn.addEventListener("click", e => {

        if(memberPw.value.trim() == ""){ // 비밀번호 미작성
            alert("비밀번호를 작성해주세요");
            e.preventDefault();
            memberPw.focus();
            return;
        }

        if(!agree.checked){ // 동의 체크가 되지 않은 경우
            alert("약관 동의 후 탈퇴 버튼을 눌러주세요");
            e.preventDefault();
            agree.focus();
            return;
        }

        if(!confirm("정말 탈퇴하시겠습니까?")){ // 취소 클릭 시
            alert("탈퇴 취소");
            e.preventDefault();
            return;
        }

        secessionFrm.submit();
    });
}


/* ********************************************************************** */





