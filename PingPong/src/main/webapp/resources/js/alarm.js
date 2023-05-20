// ------------------------------------------------------------
// 웹소켓 테스트
// 1. SockJS 라이브러리 추가

// 2. SockJs를 이용해서 클라이언트용 웹소켓 객체 생성
let alarmSock = new SockJS("/alarmSock");

// 테스트용 기능
function sendMessage(name, str){
    // 매개 변수를 JS 객체에 저장
    let obj = {}; // 비어있는 객체

    // 객체에 일치하는 key가 없다면 자동으로 추가 (지울 때 delete)
    obj.name= name;
    obj.str= str;

    // console.log(obj);

    alarmSock.send(JSON.stringify(obj)); // 웹소켓 연결된 곳으로 메시지를 보냄
                  // JS 객체 -> JSON
}

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

let alarmModBoxList = document.querySelector("#alarmModBox .alarmList");


// 웹소켓 객체(testSock)가 서버로 부터 전달 받은 메시지가 있을 경우
// // onmessage : 메세지 감지
alarmSock.onmessage = e => {
    // e : 이벤트 객체
    // e.data : 전달 받은 메세지(JSON)
    let obj = JSON.parse(e.data); // JSON -> JS 객체

    console.log(`보낸 사람 : ${obj.sendName} / ${obj.noticeContent}`);

    let alarmModBoxList = document.querySelector("#alarmModBox .alarmList");
    alarmModBoxList.innerText="";

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

    // 두 번째 자식 요소 생성
    const secondChildDiv = document.createElement("div");

    // 두 번째 자식 요소 내부의 요소 생성
    const secondChildParagraph = document.createElement("p");
    secondChildParagraph.innerHTML = noticeContent;

    // 두 번째 자식 요소 내부의 요소들을 두 번째 자식 요소에 추가
    secondChildDiv.appendChild(secondChildParagraph);

    // 세 번째 자식 요소 생성
    const thirdChildDiv = document.createElement("div");

    // 세 번째 자식 요소 내부의 요소 생성
    const thirdChildImage = document.createElement("img");
    thirdChildImage.src = "/resources/images/message/messageDeleteImg.png";
    thirdChildImage.alt = "messageDeleteImg";
    thirdChildImage.classList.add("messageListX");

    const thirdChildParagraph = document.createElement("p");
    thirdChildParagraph.textContent = "1hour 전";

    // 세 번째 자식 요소 내부의 요소들을 추가
    thirdChildDiv.appendChild(thirdChildImage);
    thirdChildDiv.appendChild(thirdChildParagraph);

    // 모든 자식 요소들을 부모 요소에 추가
    messageExampleDiv.appendChild(firstChildDiv);
    messageExampleDiv.appendChild(secondChildDiv);
    messageExampleDiv.appendChild(thirdChildDiv);

    // 부모 요소를 원하는 컨테이너에 추가
    // const container = document.getElementById("container"); // 원하는 컨테이너의 id를 사용해야 합니다.
    alarmModBoxList.appendChild(messageExampleDiv);
}







// function alramFn(){ // 알람 메세지 함수
//     fetch("/alarm/send")
//     .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
//     .then(alarmMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
//         sendMessageList.innerHTML=""; // 내부 내용 모두 없애기
//         MessageBox = 2; // MessageBox 2이면 보낸 메세지함

//         if(alarmMessage.length > 0){
//             for(let alarm of alarmMessage){


//             // 부모 요소 생성
//             const messageExampleDiv = document.createElement("div");
//             messageExampleDiv.classList.add("messageExample");

//             // 첫 번째 자식 요소 생성
//             const firstChildDiv = document.createElement("div");
//             firstChildDiv.classList.add("probox");

//             // 이미지 요소 생성
//             const image = document.createElement("img");
//             image.src = "";
//             image.alt = "";

//             // 이미지를 첫 번째 자식 요소에 추가
//             firstChildDiv.appendChild(image);

//             // 두 번째 자식 요소 생성
//             const secondChildDiv = document.createElement("div");

//             // 두 번째 자식 요소 내부의 요소 생성
//             const secondChildParagraph = document.createElement("p");

//             const secondChildLink1 = document.createElement("a");
//             secondChildLink1.textContent = "김핑퐁";

//             const secondChildLink2 = document.createElement("a");
//             secondChildLink2.textContent = "안녕하세요. 김핑퐁 입니다...";

//             // 두 번째 자식 요소 내부의 요소들을 추가
//             secondChildParagraph.appendChild(secondChildLink1);
//             secondChildParagraph.appendChild(secondChildLink2);

//             // 두 번째 자식 요소 내부의 요소들을 두 번째 자식 요소에 추가
//             secondChildDiv.appendChild(secondChildParagraph);

//             // 세 번째 자식 요소 생성
//             const thirdChildDiv = document.createElement("div");

//             // 세 번째 자식 요소 내부의 요소 생성
//             const thirdChildImage = document.createElement("img");
//             thirdChildImage.src = "/resources/images/message/messageDeleteImg.png";
//             thirdChildImage.alt = "messageDeleteImg";
//             thirdChildImage.classList.add("messageListX");

//             const thirdChildParagraph = document.createElement("p");
//             thirdChildParagraph.textContent = "1hour 전";

//             // 세 번째 자식 요소 내부의 요소들을 추가
//             thirdChildDiv.appendChild(thirdChildImage);
//             thirdChildDiv.appendChild(thirdChildParagraph);

//             // 모든 자식 요소들을 부모 요소에 추가
//             messageExampleDiv.appendChild(firstChildDiv);
//             messageExampleDiv.appendChild(secondChildDiv);
//             messageExampleDiv.appendChild(thirdChildDiv);

//             // 부모 요소를 원하는 컨테이너에 추가
//             // const container = document.getElementById("container"); // 원하는 컨테이너의 id를 사용해야 합니다.
//             alarmModBoxList.appendChild(messageExampleDiv);


//                 // 알람 메세지 삭제 하기
//                 // thirdChildImage.addEventListener("click", e =>{
//                 //     // messageResendBox.value;
//                 //     delNo = e.currentTarget.parentElement.previousElementSibling.getAttribute("delNo");

//                 //     if(!confirm("정말 삭제하시겠습니까?")){
//                 //         return;
//                 //     }

//                 //     fetch("/alarm/alarmDel",{
//                 //         method : "DELETE",
//                 //         headers : {"content-type":"application/json"},
//                 //         body : JSON.stringify({
//                 //             "deletMessageNo" : delNo,
//                 //             "MessageBoxType" : MessageBox
//                 //         })
//                 //     })
//                 //     .then(resp => resp.text())
//                 //     .then(result => {
//                 //         if(result>0){
//                 //             alert("삭제되었습니다.");
//                 //             gotoMessagesendFn();
//                 //         } else{
//                 //             alert("메세지 삭제 실패");
//                 //         }
//                 //     })
//                 //     .catch(err =>{
//                 //         console.log(err);
//                 //     })
//                 // })
//             }

//     } else {
//         alarmModBoxList.innerHTML="<div><p> 받은 알림이 없습니다.</p></div>"; 
//     }   

//     })

//     .catch(err =>{
//         console.log(err);
//     })

    
// }
