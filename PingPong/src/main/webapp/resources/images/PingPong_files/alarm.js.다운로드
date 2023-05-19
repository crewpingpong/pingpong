
// ------------------------------------------------------------
// 웹소켓 테스트
// 1. SockJS 라이브러리 추가

// 2. SockJs를 이용해서 클라이언트용 웹소켓 객체 생성
let testSock = new SockJS("/testSock");

function sendMessage(name, str){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.name= name;
    obj.str= str;

    // console.log(obj);

    testSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON


}

function sendLike(boardNo){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.sendMemberNo= loginMemberNo;
    obj.boardNo= boardNo;
    obj.str = `<a href='#'>${loginMemberNickname}님이 좋아요를 누르셨습니다.</a>`;
    obj.type=1;
    // #대신 게시글 상세조회 주소
    // console.log(obj);

    testSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON


}


// 웹소켓 객체(testSock)가 서버로 부터 전달 받은 메시지가 있을 경우
// onmessage : 메세지 감지
testSock.onmessage = e => {
    // e : 이벤트 객체
    // e.data : 전달 받은 메세지(JSON)
    let obj = JSON.parse(e.data); // JSON -> JS 객체

    console.log(`보낸 사람 : ${obj.name} / ${obj.str}`);

    const box = document.querySelector("#alarmModBox > div > div:nth-child(1)");

    const div1 = document.createElement("div");
    div1.classList.add("messageExample");

    div1.innerHTML = obj.str;

    box.append(div1);
}

