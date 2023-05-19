// 좋아요 알림 모달에서 -> 메세지 함
const gotoMessage = document.querySelector(".goto-message-Box").parentElement;

// 받은 메세지함
const messageBoXreciveX = document.querySelector(".message-Box-recive .message-Box-X");
const messageBoXrecive = document.querySelector(".message-Box-recive");

// 보낸 메세지 함
const messageBoXsendX = document.querySelector(".message-Box-send .message-Box-X");
const messageBoXsend = document.querySelector(".message-Box-send");

messageBoXreciveX.addEventListener("click",()=>{ /* 받은 메세지함 닫기 */
    messageBoXrecive.style.display="none";
})

messageBoXsendX.addEventListener("click",()=>{ /* 보낸 메세지 함 닫기 */
    messageBoXsend.style.display="none";
})

// 보낸 메세지 함 -> 받은 메세지 함
const gotoMessagerecive1 = document.querySelector(".goto-message-Box-recive").parentElement;
// 받은 메세지 보다가 받은 메세지함으로 가기
const gotoMessagerecive2 = document.querySelector(".message-recieve .goto-message-Box-recive").parentElement;
// 내가 보낸 메세지 보다가 받은 메세지함으로 가기
const gotoMessagerecive3 = document.querySelector(".message-my .messageLink");
// 답장하기 보다가 받은 메세지함으로 가기
const gotoMessagerecive4 = document.querySelector(".recieve-message-box .goto-message-Box-recive");

gotoMessage.addEventListener("click",gotoMessageFn);
gotoMessagerecive1.addEventListener("click",gotoMessageFn);
gotoMessagerecive2.addEventListener("click",gotoMessageFn);
gotoMessagerecive3.addEventListener("click",gotoMessageFn);
gotoMessagerecive4.addEventListener("click",gotoMessageFn);

// 부모 요소 선택
const recivemessageList = document.querySelector(".message-Box-recive .messageList");

// 받은 메세지 닫기
const messagebuttonxRe = document.querySelector(".message-recieve .recieve-message-x");

// 받은 메세지에서 답장 버튼 눌러서 메세지 전송 열기
const recieveMessageSend = document.querySelector(".recieve-message-send");

// 답장 할 멤버 번호
let resendMemNo;
const messageResendBtn = document.querySelector("#messageResendBtn");
const messageResendBox = document.querySelector(".message-resend .message-box-content");

// 삭제 할 메세지 번호
let delMessageNo;

// 받은 메세지로 이동해보기
const messageSend =document.querySelector(".messageSend");
const messageSendContainer = document.querySelector(".message-resend"); // 답장 모달
const messagerecieveContainer = document.querySelector(".message-recieve");
const messageSendContainermy = document.querySelector(".message-my"); /* 내가 보낸 메세지 보기 */


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
            alert("메세지 전송 성공");
            messageResendBox.value = '';
            messageSendContainer.style.display="none";
            
            gotoMessagesendFn();
        } else{
            alert("메세지 전송 실패");
        }
    })
})


function gotoMessageFn(){ // 받은 메세지 함으로 가는 함수
    fetch("/message/receive")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        recivemessageList.innerHTML=""; // 내부 내용 모두 없애기

        if(reciveMessage.length > 0){
            for(let reciveMem of reciveMessage){
            
                // 새로운 메시지 요소 생성
                const newMessage = document.createElement('div');
                newMessage.classList.add('messageExample');
        
                // 프로필 사진 요소 생성
                const profileImg = document.createElement('img');
                profileImg.setAttribute('src', reciveMem.profileImg);
                profileImg.setAttribute('alt', '프로필 사진');
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
                const deleteImg = document.createElement('img');
                deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
                deleteImg.setAttribute('alt', 'messageDeleteImg');
                deleteImg.classList.add('messageListX');
                
                // // 메세지 삭제 하기
                // deleteImg.addEventListener("click", e =>{
                // // messageResendBox.value;
                //     const delNo = e.currentTarget.parentElement.previousElementSibling.getAttribute("delNo");

                //     if(!confirm("정말 삭제하시겠습니까?")){
                //         return;
                //     }

                //     fetch("/message/messageDel",{
                //         method : "DELETE",
                //         headers : {"content-type":"application/json"},
                //         body : JSON.stringify({
                //             "messageNo" : delNo,
                //             "messageContent" : messageResendBox.value
                //         })
                //     })
                //     .then(resp => resp.text())
                //     .then(result => {
                //         if(result>0){
                //             alert("삭제되었습니다.");
                //             gotoMessagesendFn();
                //         } else{
                //             alert("메세지 삭제 실패");
                //         }
                //     })
                // })


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
            recivemessageList.innerHTML="<div><p> 받은 메세지가 없습니다.</p></div>"; 
        }

        
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


// 받은 메세지 함 -> 보낸 메세지 함
const gotoMessagesend = document.querySelector(".goto-message-Box-send").parentElement;

// 부모 요소 선택
const sendMessageList = document.querySelector(".message-Box-send .messageList");

gotoMessagesend.addEventListener("click",gotoMessagesendFn);

function gotoMessagesendFn(){ // 보낸 메세지 함으로 가는 함수
    fetch("/message/send")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        sendMessageList.innerHTML=""; // 내부 내용 모두 없애기
        if(reciveMessage.length > 0){
            for(let reciveMem of reciveMessage){
                // 부모 요소 선택
            
                // 새로운 메시지 요소 생성
                const newMessage = document.createElement('div');
                newMessage.classList.add('messageExample');
        
                // 프로필 사진 요소 생성
                const profileImg = document.createElement('img');
                profileImg.setAttribute('src', reciveMem.profileImg);
                profileImg.setAttribute('alt', '프로필 사진');
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
                newMessage.appendChild(textContainer);
        
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
                const deleteImg = document.createElement('img');
                deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
                deleteImg.setAttribute('alt', 'messageDeleteImg');
                deleteImg.classList.add('messageListX');
                const time = document.createElement('p');
                time.innerText = reciveMem.sendDate
                const infoContainer = document.createElement('div');
                infoContainer.appendChild(deleteImg);
                infoContainer.appendChild(time);
                newMessage.appendChild(infoContainer);
        
                // 부모 요소에 새로운 메시지 요소 추가
                sendMessageList.appendChild(newMessage);
            }

    } else {
        sendMessageList.innerHTML="<div><p> 보낸 메세지가 없습니다.</p></div>"; 

    }
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
