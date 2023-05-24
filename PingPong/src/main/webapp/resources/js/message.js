// 좋아요 알림 모달에서 -> 메세지 함
let gotoMessage;

// 받은 메세지함
let messageBoXreciveX;
let messageBoXrecive;

// 보낸 메세지 함
let messageBoXsendX;
let messageBoXsend;

// 보낸 메세지 함 -> 받은 메세지 함
let gotoMessagerecive1;
// 받은 메세지 보다가 받은 메세지함으로 가기
let gotoMessagerecive2;
// 내가 보낸 메세지 보다가 받은 메세지함으로 가기
let gotoMessagerecive3;

let gotoMessagerecive4;
// 답장하기 보다가 받은 메세지함으로 가기
let gotoMessagerecive5;

let deleteImg;

// 부모 요소 선택
let recivemessageList;

// 받은 메세지 닫기
let messagebuttonxRe;

// 받은 메세지에서 답장 버튼 눌러서 메세지 전송 열기
let recieveMessageSend;

// 답장 할 멤버 번호
let resendMemNo;
let messageResendBtn;
let messageResendBox; 
// 삭제할 메세지 번호
let delNo;

// 받은 메세지로 이동해보기
let messageSend;
let messageSendContainer; // 답장 모달
let messagerecieveContainer;
let messageSendContainermy; /* 내가 보낸 메세지 보기 */

// 어떤 메세지 함인지 알려주기
let MessageBox = 1; //  MessageBox 1이면 받은 메세지함 / 2이면 보낸 메세지 함

// 받은 메세지 함 -> 보낸 메세지 함
let gotoMessagesend;

// 부모 요소 선택
let sendMessageList;

// 개인 프로필에서 post.jsp에서 버튼 눌렀을 때 회원 번호 가져와서 메세지 보내기
// 프로필에서 메세지 보내기 하다가 받은 메세지함으로 가기
let gotoMessagerecive6;

let postMessageSend; // 프로필에서 메세지 보내기
let MessageSendBox; // 메세지 전송 모달

let messageSendFrm; // 메세지 전송 폼
let messageSendFrmX; // 메세지 전송 폼 닫기

// 개인 홈에서 메세지 보내기 닫기
let MessageSendBoxbtnX;

// 개인 홈에서  메세지 전송 버튼
let messageSendBtn;

// 개인 홈에서 메세지 값
let messageSendBoxContent;

// 개인 홈 메세지 함 보기 버튼
let postMessageBox;



document.addEventListener("DOMContentLoaded",()=>{
    // 좋아요 알림 모달에서 -> 메세지 함
    gotoMessage = document.querySelector(".goto-message-Box").parentElement;

    // 받은 메세지함
    messageBoXreciveX = document.querySelector(".message-Box-recive .message-Box-X");
    messageBoXrecive = document.querySelector(".message-Box-recive");

    if(messageBoXreciveX!=null){
        messageBoXreciveX.addEventListener("click",()=>{ // 받은 메세지함 닫기
            messageBoXrecive.style.display="none";
        })
    }

    // 보낸 메세지 함
    messageBoXsendX = document.querySelector(".message-Box-send .message-Box-X");
    messageBoXsend = document.querySelector(".message-Box-send");

    if(messageBoXsendX!=null){
        messageBoXsendX.addEventListener("click",()=>{ // 보낸 메세지함 닫기
            messageBoXsend.style.display="none";
        })
    }

    // 보낸 메세지 함 -> 받은 메세지 함
    gotoMessagerecive1 = document.querySelector(".goto-message-Box-recive").parentElement;
    // 받은 메세지 보다가 받은 메세지함으로 가기
    gotoMessagerecive2 = document.querySelector(".message-recieve .goto-message-Box-recive").parentElement;
    // 내가 보낸 메세지 보다가 받은 메세지함으로 가기
    gotoMessagerecive3 = document.querySelector(".message-my .messageLink");
    // 답장하기 보다가 받은 메세지함으로 가기
    gotoMessagerecive4 = document.querySelector(".recieve-message-box .goto-message-Box-recive");
    // 답장하기 보다가 받은 메세지함으로 가기
    gotoMessagerecive5 = document.querySelector(".message-Box-recive .messageLink");


    
    // 받은 메세지 함으로 가기
    gotoMessage.addEventListener("click",gotoMessageFn);
    gotoMessagerecive1.addEventListener("click",gotoMessageFn);
    gotoMessagerecive2.addEventListener("click",gotoMessageFn);
    gotoMessagerecive3.addEventListener("click",gotoMessageFn);
    gotoMessagerecive4.addEventListener("click",gotoMessageFn);
    
    
    // 개인 프로필 변수들
    gotoMessagerecive6 = document.querySelector(".message-send .messageLink");
    
    gotoMessagerecive6.addEventListener("click",gotoMessageFn);
    
    postMessageSend = document.querySelector(".followBtn .messageSend"); // 프로필에서 메세지 보내기 아이콘
    postMessageBox = document.querySelector(".followBtn .messageBox"); // 프로필에서 메세지함 보기 아이콘
    
    if(postMessageBox != null){
        postMessageBox.addEventListener("click",gotoMessageFn); // 메세지 함 보기
    }


    // 부모 요소 선택
    recivemessageList = document.querySelector(".message-Box-recive .messageList");

    // 받은 메세지 닫기
    messagebuttonxRe = document.querySelector(".message-recieve .recieve-message-x");

    
    // 받은 메세지에서 답장 버튼 눌러서 메세지 전송 열기
    recieveMessageSend = document.querySelector(".recieve-message-send");

    // 답장 할 멤버 번호
    resendMemNo;
    messageResendBtn = document.querySelector("#messageResendBtn");
    messageResendBox = document.querySelector(".message-resend .message-box-content");

    // 삭제할 메세지 번호
    let delNo;

    // 받은 메세지로 이동해보기
    messageSend =document.querySelector(".messageSend");
    messageSendContainer = document.querySelector(".message-resend"); // 답장 모달
    messagerecieveContainer = document.querySelector(".message-recieve");
    messageSendContainermy = document.querySelector(".message-my"); /* 내가 보낸 메세지 보기 */


    // 메세지 답장 하기
    messageResendBtn.addEventListener("click",()=>{
        // messageResendBox.value;

        if(messageResendBox.value.trim().length==0){
            alert("메세지를 입력해주세요.");
            return;
        }

        fetch("/message/resend",{
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                "receivedMember" : resendMemNo,
                "messageContent" : messageResendBox.value
            })
        })
        .then(resp => resp.text())
        .then(result => {
            if(result>0){
                sendMessage(messageResendBox.value,resendMemNo);
                alert("메세지 전송 성공");
                messageResendBox.value = '';
                messageSendContainer.style.display="none";
                gotoMessagesendFn();
            } else{
                alert("메세지 전송 실패");
            }
        })
    })

    // 어떤 메세지 함인지 알려주기
    let MessageBox = 1; //  MessageBox 1이면 받은 메세지함 / 2이면 보낸 메세지 함

    


    // 받은 메세지 함 -> 보낸 메세지 함
    gotoMessagesend = document.querySelector(".goto-message-Box-send").parentElement;

    // 부모 요소 선택
    sendMessageList = document.querySelector(".message-Box-send .messageList");

    gotoMessagesend.addEventListener("click",gotoMessagesendFn);

    



// 개인 프로필에서 post.jsp에서 버튼 눌렀을 때 회원 번호 가져와서 메세지 보내기

    // 프로필에서 메세지 보내기 하다가 받은 메세지함으로 가기

    if(postMessageSend != null){
        postMessageSend.addEventListener("click",()=>{
            MessageSendBox.style.display = "flex";
        })
    }

    MessageSendBox = document.querySelector(".message-send"); // 메세지 전송 모달

    messageSendFrm = document.querySelector(".message-send .recieve-message-box"); // 메세지 전송 폼
    messageSendFrmX = document.querySelector(".message-send .recieve-message-box"); // 메세지 전송 폼 닫기 버튼
    
    // 메세지 전송 버튼
    messageSendBtn = document.querySelector(".message-send .sendBtn");

    
    if(messageSendBtn != null){ // 메세지 전송
        messageSendBtn.addEventListener("click",postMessageSendFn);
    }
    
    // 메세지 보내기 닫기
    MessageSendBoxbtnX = document.querySelector(".message-send .recieve-message-x");


    MessageSendBoxbtnX.addEventListener("click",()=>{ // 닫기 버튼
        messageSendBoxContent.value=""; // 닫으면 쓰던 내용 지우기
        MessageSendBox.style.display = "none";
    });


 
    // 메세지 값
    messageSendBoxContent = document.querySelector(".message-send .message-box-content");


    // MessageSendBox.style.display = "none"; // 메세지 보내기 닫기
    // 내일 변수 위로 빼주고 .onload 웬만하면 해주기


})







function gotoMessageFn(){ // 받은 메세지 함으로 가는 함수
    fetch("/message/receive")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        recivemessageList.innerHTML=""; // 내부 내용 모두 없애기
        MessageBox = 1; // MessageBox 1이면 받은 메세지함

        if(reciveMessage.length > 0){
            for(let reciveMem of reciveMessage){
            
                // 새로운 메시지 요소 생성
                const newMessage = document.createElement('div');
                newMessage.classList.add('messageExample');
        
                // 프로필 사진 요소 생성
                const profileImg = document.createElement('img');
                if(reciveMem.profileImg != null){
                    profileImg.setAttribute('src', reciveMem.profileImg);
                }
                profileImg.setAttribute('alt', '');
                const profileBox = document.createElement('div'); // 보낸 멤버 이름 + 내용 담는 상자
                profileBox.classList.add('probox');
                profileBox.appendChild(profileImg);
                newMessage.appendChild(profileBox);
                // 이름 요소 생성
                const name = document.createElement('p');
                name.innerText = reciveMem.memberNickname; 
                const message = document.createElement('a');
                message.innerText = reciveMem.messageContent;
                const textContainer = document.createElement('div');
                textContainer.setAttribute("sendNo",reciveMem.sendMember); // 보낸 사람 번호 담아서 답장
                textContainer.setAttribute("delNo",reciveMem.messageNo); // 삭제할 번호 담아서 삭제
                textContainer.appendChild(name);
                textContainer.appendChild(message);
                newMessage.appendChild(textContainer);

                // messageBoXreciveX.addEventListener("click",()=>{ // 받은 메세지함 닫기
                //     messageBoXrecive.style.display="none";
                // })
                // 메세지 상세 보기
                textContainer.addEventListener('click', e=>{
                    messageBoXrecive.style.display="none"; 
                    messagerecieveContainer.style.display="flex"; /* 받은 메세지 상세 열기 */
    
                    // 보낸사람 프로필 이미지 가져오기
                    const recieveProfile = document.querySelector(".message-recieve .message-profile");
                    const profileImage = e.currentTarget.previousElementSibling;
                    recieveProfile.innerHTML =  profileImage.innerHTML;
                    
                    // 보낸사람 이름, 내용 가져오기
                    const recieveName = recieveProfile.nextElementSibling;
                    const profileName = e.currentTarget.children[0];
                    recieveName.innerText = profileName.innerText;
    
                    const recieveContent = document.querySelector(".message-box-content.receive")
                    recieveContent.value = e.currentTarget.children[1].innerText;
    
                    // 받은 메세지 닫기
                    messagebuttonxRe.addEventListener("click",()=>{
                        messagerecieveContainer.style.display="none";
                    })
    
                    // 보낸 사람 번호 담아서 답장
                    resendMemNo=e.currentTarget.getAttribute("sendno");

                    
    
                    // 답장 열기
                    recieveMessageSend.addEventListener("click",()=>{
                        messagerecieveContainer.style.display="none";
                        messageSendContainer.style.display="flex";
    
                        // 보낸사람 프로필 이미지 가져오기
                        const recieveREProfile = document.querySelector(".message-resend .message-profile");
                        recieveREProfile.innerHTML = profileImage.innerHTML;
    
                        // 보낸사람 이름, 내용 가져오기
                        const recieveNameRe = recieveREProfile.nextElementSibling;
                        recieveNameRe.innerText = profileName.innerText;
    
                        // 답장 닫기
                        const messagebuttonxResend = document.querySelector(".message-resend .recieve-message-x");
                        messagebuttonxResend.addEventListener("click",()=>{
                            messageSendContainer.style.display="none";
                        })
                    })
                    
                    
                });
    
                // 삭제 버튼과 시간 요소 생성
                deleteImg = document.createElement('img');
                deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
                deleteImg.setAttribute('alt', 'messageDeleteImg');
                deleteImg.classList.add('messageListX');
                
                // 받은 메세지 삭제 하기
                deleteImg.addEventListener("click", e =>{
                // messageResendBox.value;
                    delNo = e.currentTarget.parentElement.previousElementSibling.getAttribute("delNo");

                    if(!confirm("정말 삭제하시겠습니까?")){
                        return;
                    }

                    fetch("/message/messageDel",{
                        method : "DELETE",
                        headers : {"content-type":"application/json"},
                        body : JSON.stringify({
                            "deletMessageNo" : delNo,
                            "MessageBoxType" : MessageBox
                        })
                    })
                    .then(resp => resp.text())
                    .then(result => {
                        if(result>0){
                            alert("삭제되었습니다.");
                            gotoMessageFn();
                            return;
                        } else {
                            alert("메세지 삭제 실패");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                })


                const time = document.createElement('p');
                time.innerText = reciveMem.createDate;
                const infoContainer = document.createElement('div');
                infoContainer.appendChild(deleteImg);
                infoContainer.appendChild(time);
                newMessage.appendChild(infoContainer);
        
                // 부모 요소에 새로운 메시지 요소 추가
                recivemessageList.appendChild(newMessage);
            }

        } else {
            recivemessageList.innerHTML="<div><p class='userSelectNone'> 받은 메세지가 없습니다.</p></div>"; 
        }

        MessageSendBox.style.display = "none"; /* 메세지 보내기 닫기 */ 
        messageSendContainer.style.display="none"; /* 답장하고 있는거 닫기 */
        messageSendContainermy.style.display="none"; /* 내가 보낸 메세지 상세 닫기 */
        messagerecieveContainer.style.display="none"; /* 받은 메세지 상세 닫기 */
        messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
        messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */

    })

    .catch(err =>{
        console.log(err);
    })
}






function gotoMessagesendFn(){ // 보낸 메세지 함으로 가는 함수
    fetch("/message/send")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        sendMessageList.innerHTML=""; // 내부 내용 모두 없애기
        MessageBox = 2; // MessageBox 2이면 보낸 메세지함

        if(reciveMessage.length > 0){
            for(let reciveMem of reciveMessage){
                // 부모 요소 선택
            
                // 새로운 메시지 요소 생성
                const newMessage = document.createElement('div');
                newMessage.classList.add('messageExample');
        
                // 프로필 사진 요소 생성
                const profileImg = document.createElement('img');
                if(reciveMem.profileImg != null){
                    profileImg.setAttribute('src', reciveMem.profileImg);
                }
                profileImg.setAttribute('alt', '');
                const profileBox = document.createElement('div');
                profileBox.classList.add('probox');
                profileBox.appendChild(profileImg);
                newMessage.appendChild(profileBox);
        
                // 이름 요소 생성
                const name = document.createElement('p');
                name.innerText = reciveMem.memberNickname; 
                const message = document.createElement('a');
                message.innerText = reciveMem.messageContent;
                const textContainer = document.createElement('div');
                textContainer.appendChild(name);
                textContainer.appendChild(message);
                textContainer.setAttribute("delNo",reciveMem.messageNo); // 삭제할 번호 담아서 삭제
                newMessage.appendChild(textContainer);
        
                // 보낸 메세지 닫기
                // messageBoXsendX.addEventListener("click",()=>{
                //     messageBoXsend.style.display="none";
                // })



                // 메세지 상세 보기
                textContainer.addEventListener('click', e=>{
                    messageBoXsend.style.display="none"; 
                    messageSendContainermy.style.display="flex"; /* 받은 메세지 상세 열기 */

                    // 받은 사람 프로필 이미지 가져오기
                    const sendProfile = document.querySelector(".message-my .message-profile");
                    sendProfile.innerHTML =  e.currentTarget.previousElementSibling.innerHTML;
                    
                    // 받은 사람 이름, 내용 가져오기
                    const sendName = sendProfile.nextElementSibling;
                    sendName.innerText = e.currentTarget.children[0].innerText;

                    const sendContent = document.querySelector(".message-my .message-box-content");
                    sendContent.value = e.currentTarget.children[1].innerText;

                    // 보낸 메세지 닫기
                    const messagebuttonxRe = document.querySelector(".message-my .recieve-message-x");
                    messagebuttonxRe.addEventListener("click",()=>{
                        messageSendContainermy.style.display="none";
                    })
                    // 이전 버튼 (보낸 메세지 함으로 돌아가기)
                    const messagebuttonxReMy = document.querySelector(".message-my .recieve-message-send");
                    messagebuttonxReMy.addEventListener("click",()=>{
                        messageSendContainermy.style.display="none";
                        messageBoXsend.style.display="flex"; 
                    })
                    
                });

                // 삭제 버튼과 시간 요소 생성
                deleteImg = document.createElement('img');
                deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
                deleteImg.setAttribute('alt', 'messageDeleteImg');
                deleteImg.classList.add('messageListX');
                const time = document.createElement('p');
                time.innerText = reciveMem.sendDate
                const infoContainer = document.createElement('div');
                infoContainer.appendChild(deleteImg);
                infoContainer.appendChild(time);
                newMessage.appendChild(infoContainer);
        


                // 보낸 메세지 삭제 하기
                deleteImg.addEventListener("click", e =>{
                    // messageResendBox.value;
                    delNo = e.currentTarget.parentElement.previousElementSibling.getAttribute("delNo");

                    if(!confirm("정말 삭제하시겠습니까?")){
                        return;
                    }

                    fetch("/message/messageDel",{
                        method : "DELETE",
                        headers : {"content-type":"application/json"},
                        body : JSON.stringify({
                            "deletMessageNo" : delNo,
                            "MessageBoxType" : MessageBox
                        })
                    })
                    .then(resp => resp.text())
                    .then(result => {
                        if(result>0){
                            alert("삭제되었습니다.");
                            gotoMessagesendFn();
                        } else{
                            alert("메세지 삭제 실패");
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                })

                // 부모 요소에 새로운 메시지 요소 추가
                sendMessageList.appendChild(newMessage);
            }

    } else {
        sendMessageList.innerHTML="<div><p class='userSelectNone'> 보낸 메세지가 없습니다.</p></div>"; 

    }   
        MessageSendBox.style.display = "none"; /* 메세지 보내기 닫기 */ 
        messageSendContainer.style.display="none"; /* 답장하고 있는거 닫기 */
        messageSendContainermy.style.display="none"; /* 내가 보낸 메세지 상세 닫기 */
        messagerecieveContainer.style.display="none"; /* 받은 메세지 상세 닫기 */
        messageBoXrecive.style.display="none"; /* 받은 메세지함 닫기 */
        messageBoXsend.style.display="flex"; /* 보낸 메세지함 열기 */

    })

    .catch(err =>{
        console.log(err);
    })

    
}


function postMessageSendFn(){ // 메세지 전송 함수
    MessageSendBox.style.display = "flex";
    
    const path = location.pathname;
    const arr = path.split("/");
    const receiveMessageNo = arr[arr.length-1]
    if(messageSendBoxContent.value.trim().length==0){
        alert("메세지를 입력해주세요.");
        messageSendBoxContent.value ="";
        messageSendBoxContent.focus();
        e.preventDefault();
        return;
    }

    const messageContent= messageSendBoxContent.value;

    fetch("/message/messageSend",{
        method : "POST",
        headers : {"content-type":"application/json"},
        body : JSON.stringify({
            "receivedMember" : receiveMessageNo,
            "messageContent" : messageContent
        })
    })
    .then(resp => resp.text())
    .then(result => {
        if(result>0){
            sendMessage(messageContent,receiveMessageNo);
            alert("메세지 전송 성공");
            messageSendBoxContent.value ="";
            gotoMessagesendFn();
        } else{
            alert("메세지 전송 실패");
        }

    })

    .catch(err =>{
        console.log(err);
    })

}


const reciveUnderline = document.querySelector(".reciveUnderline");
const sendUnderline = document.querySelector(".sendUnderline");

// 받은 메세지 전체 비우기
reciveUnderline.addEventListener("click", e =>{
    // messageResendBox.value;

    if(!confirm("전체 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")){
        return;
    }

    fetch("/message/reciveDelAll")
    .then(resp => resp.text())
    .then(result => {
        if(result>0){
            alert("삭제되었습니다.");
            gotoMessagesendFn();
        } else{
            alert("메세지 삭제 실패");
        }
    })
    .catch(err =>{
        console.log(err);
    })
})
// 받은 메세지 전체 비우기
sendUnderline.addEventListener("click", e =>{
    // messageResendBox.value;

    if(!confirm("전체 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.")){
        return;
    }

    fetch("/message/sendDelAll")
    .then(resp => resp.text())
    .then(result => {
        if(result>0){
            alert("삭제되었습니다.");
            gotoMessagesendFn();
        } else{
            alert("메세지 삭제 실패");
        }
    })
    .catch(err =>{
        console.log(err);
    })
})