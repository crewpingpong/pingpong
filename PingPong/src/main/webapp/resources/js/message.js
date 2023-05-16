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
const gotoMessagerecive = document.querySelector(".goto-message-Box-recive").parentElement;

gotoMessagerecive.addEventListener("click",()=>{
    messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
    messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */
})

// 부모 요소 선택
const recivemessageList = document.querySelector(".message-Box-recive .messageList");

// 받은 메세지 함으로 가기
gotoMessage.addEventListener("click",()=>{
    
    fetch("/message/receive")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        recivemessageList.innerHTML=""; // 내부 내용 모두 없애기

        for(let reciveMem of reciveMessage){
            
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
    
            // 삭제 버튼과 시간 요소 생성
            const deleteImg = document.createElement('img');
            deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
            deleteImg.setAttribute('alt', 'messageDeleteImg');
            deleteImg.classList.add('messageListX');
            const time = document.createElement('p');
            time.innerText = reciveMem.createDate;
            const infoContainer = document.createElement('div');
            infoContainer.appendChild(deleteImg);
            infoContainer.appendChild(time);
            newMessage.appendChild(infoContainer);
    
            // 부모 요소에 새로운 메시지 요소 추가
            recivemessageList.appendChild(newMessage);
        }

        // messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
        messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */

    })

    .catch(err =>{
        console.log(err);
    })

})

// 받은 메세지 함으로 가기
gotoMessage.addEventListener("click",()=>{
    
    fetch("/message/receive")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        recivemessageList.innerHTML=""; // 내부 내용 모두 없애기

        for(let reciveMem of reciveMessage){
            
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
    
            // 삭제 버튼과 시간 요소 생성
            const deleteImg = document.createElement('img');
            deleteImg.setAttribute('src', '/resources/images/message/messageDeleteImg.png');
            deleteImg.setAttribute('alt', 'messageDeleteImg');
            deleteImg.classList.add('messageListX');
            const time = document.createElement('p');
            time.innerText = reciveMem.createDate;
            const infoContainer = document.createElement('div');
            infoContainer.appendChild(deleteImg);
            infoContainer.appendChild(time);
            newMessage.appendChild(infoContainer);
    
            // 부모 요소에 새로운 메시지 요소 추가
            recivemessageList.appendChild(newMessage);
        }

        // messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
        messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */

    })

    .catch(err =>{
        console.log(err);
    })

})

// 받은 메세지 함 -> 보낸 메세지 함
const gotoMessagesend = document.querySelector(".goto-message-Box-send").parentElement;

// gotoMessagesend.addEventListener("click",()=>{
//     messageBoXrecive.style.display="none"; /* 받은 메세지함 닫기 */
//     messageBoXsend.style.display="flex"; /* 보낸 메세지함 열기 */
// })
// 부모 요소 선택
const sendMessageList = document.querySelector(".message-Box-send .messageList");

gotoMessagesend.addEventListener("click",()=>{
    
    
    fetch("/message/send")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    
    .then(reciveMessage => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작
        
        sendMessageList.innerHTML=""; // 내부 내용 모두 없애기

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

        messageBoXrecive.style.display="none"; /* 받은 메세지함 닫기 */
        messageBoXsend.style.display="flex"; /* 보낸 메세지함 열기 */
    })

    .catch(err =>{
        console.log(err);
    })

})