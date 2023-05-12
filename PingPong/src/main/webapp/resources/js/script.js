/* HEADER 영역 */
const searchicon=document.querySelector(".search_icon");
const searchbox=document.querySelector(".seachbox");
const searchboxList = searchbox.parentElement.children;

const temp = document.querySelectorAll(".seachbox, .seachbox *");

// 검색 아이콘에 마우스가 올려졌을 때 검색 박스 커짐
// 검색 자리에 있던 아이콘은 사라짐 (알림, 검색, 로그인 버튼)
searchicon.addEventListener("mouseenter",()=>{
    for(let i=0; i<3; i++){ // 오른쪽 아이콘 들은 전부 사라지게
        searchboxList[i].style.display="none"; 
    }
    searchbox.style.display="flex"; // 검색 버튼 커지기
    
    window.addEventListener("click", e => {
    
        let flag = true;
        temp.forEach(el => {
            if(el == e.target) flag = false; 
        });
        
        if(flag){
            searchbox.style.display="none";
            for(let i=0; i<3; i++){
                searchboxList[i].style.display="flex";
            }
        }
    })
});


/* NAV 영역 */
const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');

// nav 요소
// const nav = document.querySelector('nav');
const mainnav = document.querySelector('.mainnav');
const grayBackground = document.querySelector(".grayBackground");

// 열기 버튼을 누르면 nav의 display가 flex로 변경
openHam.addEventListener("click",() => {
    mainnav.style.display = "block";
    if(mainnav.style.display === "block"){
        // 네브 오른쪽 회색 배경을 누르면  nav의 display가 none로 변경
        document.addEventListener("click", e=>{
            if(e.target===grayBackground){
                mainnav.style.display = "none";
                navmore.style.display="none"; 
                logModContainer.style.display = "none";
                siteInfoMod.style.display="none";
            }
        })
    }
    // 닫기 버튼을 누르면 nav의 display가 none로 변경
    closeHam.addEventListener("click", function(){mainnav.style.display = "none";});
    /* 더 많은 기능을 보실려면 로그인해주세요. */
    const navloginBtn = document.querySelector(".navlogin");
    const logModContainer = document.querySelector("#logModContainer");
    navloginBtn.addEventListener("click", ()=>{
        logModContainer.style.display = "block";
    });
    const navloginclBtn = document.getElementById("navloginclBtn");
    navloginclBtn.addEventListener("click", () => {
        logModContainer.style.display = "none";
    });

    const seachModInnerContent = document.getElementById("seachModInnerContent");

    const searchModResultList = document.getElementById("searchModResultList");
    const headerSearchModResultList = document.getElementById("headerSearchModResultList");
    const tagArr = ['#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱'];
    const nameArr = ['kimchanhee', 'leenahyun', 'leesangyun', 'choigeuntae', 'parkjaekyung'];

    seachModInnerContent.addEventListener("keyup", e => {
        while(searchModResultList.hasChildNodes()) {
            searchModResultList.removeChild(searchModResultList.firstChild);
        }
        if(seachModInnerContent.value.startsWith('#')){
            for(let i=0;i<tagArr.length;i++){
                if(tagArr[i].startsWith(seachModInnerContent.value) && seachModInnerContent.value!='#'){
            
                    const div = document.createElement('div');
                    const a1 = document.createElement('a');
                    a1.classList.add("searchModTagRound1");
                    a1.innerText = "#"
                    div.classList.add("searchModResultCont");
                    const a2 = document.createElement('a');
                    a2.classList.add("searchModTagRound2");
                    a2.innerText = tagArr[i].substring(1);

                    div.append(a1);
                    div.append(a2);
                    searchModResultList.append(div);
                }
            }
        } else if(!seachModInnerContent.value.startsWith('#') && seachModInnerContent.value!='') {
            for(let i=0;i<nameArr.length;i++){
                if(nameArr[i].startsWith(seachModInnerContent.value)){
                    const div = document.createElement('div');
                    const a1 = document.createElement('a');
                    a1.classList.add("searchModNameRound1");
                    div.classList.add("searchModResultCont");
                    const a2 = document.createElement('a');
                    a2.classList.add("searchModNameRound2");
                    a2.innerText = nameArr[i];

                    div.append(a1);
                    div.append(a2);
                    searchModResultList.append(div);
                }
            }
        }
    });

    // 더보기 + 사이트 정보 눌렀을 때 창
    const siteInfoClick = document.querySelector(".navmore li:last-child");
    const siteInfoMod = document.querySelector(".siteInfoModContainer");
    const siteInfoModX = document.querySelector(".siteInfoModContainer .pingopacitylogo svg:last-child");

    siteInfoClick.addEventListener("click",()=>{
        siteInfoMod.style.display="flex";
        siteInfoModX.addEventListener("click",()=>{
            siteInfoMod.style.display="none";
        })
    })

})

// 네브 열고 더보기 버튼 누르면 더보기 창 활성화
const moreicon = document.querySelector(".mainnav-under-btn"); /* 더보기 버튼 */
const navmore = document.querySelector(".navmore"); /* 더보기 창 */

const navlist = document.querySelector('.navlist');

// moreicon 버튼을 누르면 navmore의 display가 block으로 변경
moreicon.addEventListener("click",()=>{
    if(navmore.style.display=="block") navmore.style.display="none"; 
    else navmore.style.display="block";
    if(navmore.style.display=="block"){
        // 네브 흰색 배경을 누르면 navmore의 display가 none 변경
        document.addEventListener("click", e=>{
            if(e.target===navlist){
                navmore.style.display="none"; 
            }
        })
    }
});


// 햄버거창 검색버튼 눌렀을 때 검색 창
const navSearch = document.querySelector(".navSearch");
const searchModContainer = document.querySelector("#searchModContainer");
navSearch.addEventListener("click", ()=>{
    searchModContainer.style.display = "block";
});
const navSearchclBtn = document.getElementById("navSearchclBtn");
navSearchclBtn.addEventListener("click", () => {
    searchModContainer.style.display = "none";
});

// 헤더에 검색버튼 올리면 열리는 검색 버튼
const headerOpenSearchBox = document.querySelector("#headerOpenSearchBox");
const headerSearchModContainer = document.querySelector("#headerSearchModContainer");
headerOpenSearchBox.addEventListener("keyup", e => {
    
    if(headerOpenSearchBox.value=='' || headerOpenSearchBox.value=='#'){
        headerSearchModContainer.style.display = "none";
    } else{
        headerSearchModContainer.style.display = "block";
    }

    while(headerSearchModResultList.hasChildNodes()) {
        headerSearchModResultList.removeChild(headerSearchModResultList.firstChild);
    }
    if(headerOpenSearchBox.value.startsWith('#')){
        for(let i=0;i<tagArr.length;i++){
            if(tagArr[i].startsWith(headerOpenSearchBox.value) && headerOpenSearchBox.value!='#'){
        
                const div = document.createElement('div');
                const a1 = document.createElement('a');
                a1.classList.add("searchModTagRound1");
                a1.innerText = "#"
                div.classList.add("searchModResultCont");
                const a2 = document.createElement('a');
                a2.classList.add("searchModcontent");
                a2.innerText = tagArr[i].substring(1);

                div.append(a1);
                div.append(a2);
                headerSearchModResultList.append(div);
            }
        }
    } else if(!headerOpenSearchBox.value.startsWith('#') && headerOpenSearchBox.value!='') {
        for(let i=0;i<nameArr.length;i++){
            if(nameArr[i].startsWith(headerOpenSearchBox.value)){
                const div = document.createElement('div');
                const a1 = document.createElement('a');
                a1.classList.add("searchModNameRound1");
                div.classList.add("searchModResultCont");
                const a2 = document.createElement('a');
                a2.classList.add("searchModcontent");
                a2.innerText = nameArr[i];

                div.append(a1);
                div.append(a2);
                headerSearchModResultList.append(div);
            }
        }
    }
});



// 알람 하트 아이콘
const alarmIcon = document.querySelector(".alarm_icon");
// const alarmIconRedColor = document.querySelector(".alarm_icon>svg>svg");
const alarmIconRedColor = document.querySelector(".redheart");
const alarmModBox = document.querySelector("#alarmModBox");

alarmIcon.addEventListener("click", () => {
    alarmIconRedColor.classList.toggle("alarm-icon-redColor");
    alarmModBox.classList.toggle("alarm-icon-redColor");
});

// 알림 모달에서 메세지 보기
// 받은 메세지 제일 위에 샘플을 클릭하면 받은메세지로 이동함
const ModalmessageExample = document.querySelector("#alarmModBox .messageExample");

ModalmessageExample.addEventListener("click",()=>{
    messagerecieveContainer.style.display="flex";
})



// 메세지 함 JS

// 메세지 X 눌렀을 때 지우기 (시도해보다가 실패...)
// const messageListX = document.querySelectorAll(".messageListX");

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

// 받은 메세지 함 -> 보낸 메세지 함
const gotoMessagesend = document.querySelector(".goto-message-Box-send").parentElement;

gotoMessagesend.addEventListener("click",()=>{
    messageBoXrecive.style.display="none"; /* 받은 메세지함 닫기 */
    messageBoXsend.style.display="flex"; /* 보낸 메세지함 열기 */
})

// 보낸 메세지 함 -> 받은 메세지 함
const gotoMessagerecive = document.querySelector(".goto-message-Box-recive").parentElement;

gotoMessagerecive.addEventListener("click",()=>{
    messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
    messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */
})

// 좋아요 알림 모달에서 -> 메세지 함
const gotoMessage = document.querySelector(".goto-message-Box").parentElement;

gotoMessage.addEventListener("click",()=>{
    messageBoXsend.style.display="none"; /* 보낸 메세지함 닫기 */
    messageBoXrecive.style.display="flex"; /* 받은 메세지함 열기 */
})

// 받은 메세지로 이동해보기
const messageSend =document.querySelector(".messageSend");
const messageSendContainer = document.querySelector(".message-send");
const messagerecieveContainer = document.querySelector(".message-recieve");

// 받은 메세지 제일 위에 샘플을 클릭하면 받은메세지로 이동함
const messageExample = document.querySelector(".message-Box-recive .messageExample");

messageExample.addEventListener("click",()=>{
    messageBoXrecive.style.display="none";
    messagerecieveContainer.style.display="flex";
})

// 예제 닫기
const messagebuttonxRe = document.querySelector(".message-recieve .recieve-message-x");
messagebuttonxRe.addEventListener("click",()=>{
    messagerecieveContainer.style.display="none";
})

// 받은 메세지 확인하고 -> 메세지함으로(받은 메세지가 기본) 이동해보기
const gotoMessagesendEx = document.querySelector(".message-recieve .message-box-button .goto-message-Box-recive").parentElement;
gotoMessagesendEx.addEventListener("click",()=>{
    messagerecieveContainer.style.display="none";
    messageBoXrecive.style.display="flex";
})

// 받은 메세지에서 답장 버튼 눌러서 메세지 전송 열기
const recieveMessageSend = document.querySelector(".recieve-message-send");

recieveMessageSend.addEventListener("click",()=>{
    messagerecieveContainer.style.display="none";
    messageSendContainer.style.display="flex";
})

// 답장 메세지에서 메세지 함으로 가기
const gotoMessageResendEx = document.querySelector(".message-send .message-box-button .goto-message-Box-recive").parentElement;
gotoMessageResendEx.addEventListener("click",()=>{
    messageSendContainer.style.display="none";
    messageBoXrecive.style.display="flex";
})
// 답장 닫기
const messagebuttonxResend = document.querySelector(".message-send .recieve-message-x");
messagebuttonxResend.addEventListener("click",()=>{
    messageSendContainer.style.display="none";
})

// -------------------------------------





