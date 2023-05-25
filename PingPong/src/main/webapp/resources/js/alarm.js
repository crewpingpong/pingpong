// ------------------------------------------------------------
// 웹소켓 테스트
// 1. SockJS 라이브러리 추가

// 2. SockJs를 이용해서 클라이언트용 웹소켓 객체 생성
let alarmSock = new SockJS("/alarmSock");



// 좋아요 알람
function sendLike(boardNo){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.sendNo = loginMemberNo; // 보낸 회원 번호
    obj.sendName = loginMemberNickname; // 보낸 회원 닉네임
    obj.boardNo= boardNo; // 게시글 번호
    obj.type=1;
    // #대신 게시글 상세조회 주소
    console.log(obj);

    alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON
}

// 댓글 알람
function sendComment(boardNo){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.sendNo = loginMemberNo; // 보낸 회원 번호
    obj.sendName = loginMemberNickname; // 보낸 회원 닉네임
    obj.boardNo= boardNo; // 게시글 번호
    obj.type=2;
    // #대신 게시글 상세조회 주소
    // console.log(obj);

    alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON
}

// 메세지 알람
function sendMessage(messageContent,receiveMessageNo){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.sendNo = loginMemberNo; // 보낸 회원 번호
    obj.sendName = loginMemberNickname; // 보낸 회원 닉네임
    obj.messageContent = messageContent; // 보낸 메세지 내용
    obj.memberNo = receiveMessageNo; // 보낸 메세지 내용
    obj.type=3;
    // #대신 게시글 상세조회 주소
    // console.log(obj);

    alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON
}

// 팔로우 알람
function sendFollow(followerNo){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.sendNo = loginMemberNo; // 보낸 회원 번호
    obj.sendName = loginMemberNickname; // 보낸 회원 닉네임
    obj.memberNo = followerNo; // 팔로우 당한 사람
    obj.type=4;
    // #대신 게시글 상세조회 주소
    // console.log(obj);

    alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON
}

let alarmModBoxList = document.querySelector("#alarmModBox .alarmList");


// 웹소켓 객체(testSock)가 서버로 부터 전달 받은 메시지가 있을 경우
// // onmessage : 메세지 감지
alarmSock.onmessage = e => {
    // e : 이벤트 객체
    // e.data : 전달 받은 메세지(JSON)
    let obj = JSON.parse(e.data); // JSON -> JS 객체

    // console.log(`보낸 사람 : ${obj.sendName} / ${obj.noticeContent}`);
    
    let alarmModBoxList = document.querySelector("#alarmModBox .alarmList");
    let receiveAlarm = document.querySelector(".receiveAlarm");

    // 알람 오면 하트 빨갛게
    const alarmIconRedColor = document.querySelector(".redheart");
    if (alarmIconRedColor.classList.contains("alarm-icon-redColor")) {
        alarmIconRedColor.classList.remove("alarm-icon-redColor");
        alarmIconRedColor.addEventListener("click",()=>{
            alarmIconRedColor.classList.add("alarm-icon-redColor");
        })
    }


    if(receiveAlarm != null){
        receiveAlarm.remove(); // 받은 알람 지우기
    }


    // 부모 요소 생성
    const messageExampleDiv = document.createElement("div");
    messageExampleDiv.classList.add("messageExample");

    // 첫 번째 자식 요소 생성
    const firstChildDiv = document.createElement("div");
    firstChildDiv.classList.add("probox");

    // 이미지 요소 생성
    const image = document.createElement("img");
    image.src = obj.sendProfile;

    // 이미지를 첫 번째 자식 요소에 추가
    firstChildDiv.appendChild(image);

    // 이미지를 클릭하면 프로필로 이동하는 링크를 생성
    const profileLink = document.createElement("a");
    profileLink.href = "/mypage/" + obj.sendNo;

    // 이미지 요소를 링크에 추가
    profileLink.appendChild(image);

    // 첫 번째 자식 요소에 프로필 링크를 추가
    firstChildDiv.appendChild(profileLink);

    // 두 번째 자식 요소 생성
    const secondChildDiv = document.createElement("div");

    // 두 번째 자식 요소 내부의 요소 생성
    const secondChildParagraph = document.createElement("p");
    secondChildParagraph.innerHTML = obj.noticeContent;

    // 두 번째 자식 요소 내부의 요소들을 두 번째 자식 요소에 추가
    secondChildDiv.appendChild(secondChildParagraph);


    // 모든 자식 요소들을 부모 요소에 추가
    messageExampleDiv.appendChild(firstChildDiv);
    messageExampleDiv.appendChild(secondChildDiv);
    // messageExampleDiv.appendChild(thirdChildDiv);

    // 부모 요소를 원하는 컨테이너에 추가
    // const container = document.getElementById("container"); // 원하는 컨테이너의 id를 사용해야 합니다.
    alarmModBoxList.appendChild(messageExampleDiv);




};



// 테스트용 기능
// function sendMessage(name, str){
//     // 매개 변수를 JS 객체에 저장
//     let obj = {}; // 비어있는 객체

//     // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
//     obj.name= name;
//     obj.str= str;

//     // console.log(obj);

//     alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
//                   // JS 객체 -> JSON
// }


