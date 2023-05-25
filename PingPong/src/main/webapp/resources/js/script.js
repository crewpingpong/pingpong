/* HEADER 영역 */
const searchicon=document.querySelector(".search_icon");
const searchbox=document.querySelector(".seachbox");

const temp = document.querySelectorAll(".seachbox, .seachbox *, .search_icon, .search_icon *");
// const temp = document.querySelectorAll(".seachbox, .seachbox *");

// 검색 아이콘에 마우스가 올려졌을 때 검색 박스 커짐
// 검색 자리에 있던 아이콘은 사라짐 (알림, 검색, 로그인 버튼)
searchicon.addEventListener("click",()=>{
    if(document.querySelector(".basicheart") != null){
        document.querySelector(".basicheart").style.display="none";

        // 검색 켜지면 알람 켜 놓은거는 꺼지게 구현
        // alarmIconRedColor.classList.add("alarm-icon-redColor");
        // alarmModBox.classList.add("alarm-icon-redColor");
    }
    let alarmModBox = document.querySelector("#alarmModBox");
    searchicon.style.display="none";
    if(document.querySelector(".signBtn") != null){
        document.querySelector(".signBtn").style.display="none";
    }
    if(!alarmModBox.classList.contains("alarm-icon-redColor")){ // 알람 닫기
        alarmModBox.classList.add("alarm-icon-redColor");
    }
        
    searchbox.style.display="flex"; // 검색 박스 커지기

});

window.addEventListener("click", e => {
    let flag = true;
    temp.forEach(el => {
        if(el == e.target) flag = false; 
    });
    
    if(flag){
        if(document.querySelector(".basicheart") != null){
            document.querySelector(".basicheart").style.display="flex";
        }

        searchicon.style.display="flex";
        if(document.querySelector(".signBtn") != null){
            document.querySelector(".signBtn").style.display="flex";
        }
        searchbox.style.display="none"; // 검색 박스 닫기
    }
})

// 알람 하트 아이콘
let alarmIcon;
let alarmModBox;
// let alarmIconRedColor = document.querySelector(".alarm_icon>svg>svg");
// let alarmIconRedColor = document.querySelector(".redheart");
// alarmIconRedColor.classList.toggle("alarm-icon-redColor");


document.addEventListener("DOMContentLoaded",()=>{
    let alarmIcon = document.querySelector(".basicheart");
    let alarmModBox = document.querySelector("#alarmModBox");
    if(alarmIcon!=null){
        alarmIcon.addEventListener("click", () => {
            alramFn();
            alarmModBox.classList.toggle("alarm-icon-redColor");
            // if(!alarmModBox.classList.contains("alarm-icon-redColor")){
            // }
        });
    }
})



/* NAV 영역 */
const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');

// nav 요소
// const nav = document.querySelector('nav');
const mainnav = document.querySelector('.mainnav');
const grayBackground = document.querySelector(".grayBackground");


// 검색창 변수
const seachModInnerContent = document.getElementById("seachModInnerContent");

const searchModResultList = document.getElementById("searchModResultList");
const headerSearchModResultList = document.getElementById("headerSearchModResultList");
const tagArr = ['#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱','#kimpingpong', '#k-playthatpingpong', '#pingpong', '#kukurupingpong', '#가나다라', '#핑퐁짱'];
const nameArr = ['kimchanhee', 'leenahyun', 'leesangyun', 'choigeuntae', 'parkjaekyung'];


// 열기 버튼을 누르면 nav의 display가 flex로 변경
openHam.addEventListener("click",() => {
    mainnav.style.display = "block";
    searchbox.style.display="none";

    let alarmModBox = document.querySelector("#alarmModBox");
    if(!alarmModBox.classList.contains("alarm-icon-redColor")){ // 알람 닫기
        alarmModBox.classList.add("alarm-icon-redColor");
    }
        
    if(mainnav.style.display === "block"){
        // 네브 오른쪽 회색 배경을 누르면  nav의 display가 none로 변경
        document.addEventListener("click", e=>{
            if(e.target===grayBackground){
                mainnav.style.display = "none";
                navmore.style.display="none"; 
                logModContainer.style.display = "none";
                let siteInfoMod = document.querySelector(".siteInfoModContainer");
                if(siteInfoMod != null){
                    if(siteInfoMod.style.display=="flex")
                    siteInfoMod.style.display="none";
                }
                searchModContainer.style.display = "none";
            }
        })
    }
    // 닫기 버튼을 누르면 nav의 display가 none로 변경
    closeHam.addEventListener("click", function(){
        mainnav.style.display = "none";
        navmore.style.display="none"; 
        logModContainer.style.display = "none";
        if(siteInfoMod != null){
            siteInfoMod.style.display="none";
        }
        searchModContainer.style.display = "none";
    });
    /* 더 많은 기능을 보실려면 로그인해주세요. */
    const navloginBtn = document.querySelector(".navlogin");
    const logModContainer = document.querySelector("#logModContainer");
    if(navloginBtn != null){
        navloginBtn.addEventListener("click", ()=>{
            logModContainer.style.display = "block";

            if(siteInfoMod != null){
                siteInfoMod.style.display="none";
            }
            if(searchModContainer!= null){ // 검색 박스 닫기
                searchModContainer.style.display = "none";
            }
        });
        const navloginclBtn = document.getElementById("navloginclBtn");
        navloginclBtn.addEventListener("click", () => {
            logModContainer.style.display = "none";
    
        });
    }

    // seachModInnerContent.addEventListener("keyup", e => {
    //     while(searchModResultList.hasChildNodes()) {
    //         searchModResultList.removeChild(searchModResultList.firstChild);
    //     }
    //     if(seachModInnerContent.value.startsWith('#')){
    //         for(let i=0;i<tagArr.length;i++){
    //             if(tagArr[i].startsWith(seachModInnerContent.value) && seachModInnerContent.value!='#'){
            
    //                 const div = document.createElement('div');
    //                 const a1 = document.createElement('a');
    //                 a1.classList.add("searchModTagRound1");
    //                 a1.innerText = "#"
    //                 div.classList.add("searchModResultCont");
    //                 const a2 = document.createElement('a');
    //                 a2.classList.add("searchModTagRound2");
    //                 a2.innerText = tagArr[i].substring(1);

    //                 div.append(a1);
    //                 div.append(a2);
    //                 searchModResultList.append(div);
    //             }
    //         }
    //     } else if(!seachModInnerContent.value.startsWith('#') && seachModInnerContent.value!='') {
    //         for(let i=0;i<nameArr.length;i++){
    //             if(nameArr[i].startsWith(seachModInnerContent.value)){
    //                 const div = document.createElement('div');
    //                 const a1 = document.createElement('a');
    //                 a1.classList.add("searchModNameRound1");
    //                 div.classList.add("searchModResultCont");
    //                 const a2 = document.createElement('a');
    //                 a2.classList.add("searchModNameRound2");
    //                 a2.innerText = nameArr[i];

    //                 div.append(a1);
    //                 div.append(a2);
    //                 searchModResultList.append(div);
    //             }
    //         }
    //     }
    // });

    // 더보기 + 사이트 정보 눌렀을 때 창
    const siteInfoClick = document.querySelector(".navmore li:last-child");
    const siteInfoMod = document.querySelector(".siteInfoModContainer");
    const siteInfoModX = document.querySelector(".siteInfoModContainer .pingopacitylogo svg:last-child");

    siteInfoClick.addEventListener("click",()=>{
        siteInfoMod.style.display="flex";
        if(logModContainer.style.display = "block"){
            logModContainer.style.display = "none";
        }
        if(searchModContainer!= null){ // 검색 박스 닫기
            searchModContainer.style.display = "none";
        }   
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

// 검색 x버튼 누르면 안에 있는 값 지우기
const hamseachboxX = document.querySelector('div.seachbox > svg'); // 햄버거 검색 X 버튼
const navseachboxX = document.querySelector('#searchModContainer > div:nth-child(2) > div > svg'); // 햄버거 검색 X 버튼
const navSearchBox2 = document.querySelector('#navSearchBox');

hamseachboxX.addEventListener("click",()=>{
    headerOpenSearchBox.value="";
});
navseachboxX.addEventListener("click",()=>{
    navSearchBox2.value="";
});

// 햄버거창 검색버튼 눌렀을 때 검색 창
const navSearch = document.querySelector(".navSearch");
const searchModContainer = document.querySelector("#searchModContainer");
navSearch.addEventListener("click", ()=>{
    searchModContainer.style.display = "block";
    let siteInfoMod = document.querySelector(".siteInfoModContainer");
    if(siteInfoMod != null){ // 사이트 정보 닫기
        siteInfoMod.style.display="none";
    }

    if(logModContainer != null){ // 비회원 모달 닫기
        logModContainer.style.display = "none";
    }
    

});
const navSearchclBtn = document.getElementById("navSearchclBtn");
navSearchclBtn.addEventListener("click", () => {
    searchModContainer.style.display = "none";
});




function alramFn(){ // 알람 메세지 함수
    
    sendMessageList = document.querySelector(".message-Box-send .messageList");
    alarmModBoxList = document.querySelector("#alarmModBox .alarmList");
    alarmModBoxList.innerHTML=""; // 내부 내용 모두 없애기

    fetch("/alarm/send")
    .then(resp => resp.json()) // 응답 객체를 매개변수로 얻어와 파싱
    .then(alarmList => { // 파싱한 데이터를 이용해서 비동기 처리 후 동작

        if(alarmList.length > 0){
            for(let alarm of alarmList){
                // console.log(alarm);
             // 부모 요소 생성
            const messageExampleDiv = document.createElement("div");
            messageExampleDiv.classList.add("messageExample");

            // 첫 번째 자식 요소 생성
            const firstChildDiv = document.createElement("div");
            firstChildDiv.classList.add("probox");

            // 이미지 요소 생성
            const image = document.createElement("img");
            if(alarm.sendProfile!=null){
                image.setAttribute('src', alarm.sendProfile);
            }

            // 이미지를 첫 번째 자식 요소에 추가
            firstChildDiv.appendChild(image);

            // 이미지를 클릭하면 프로필로 이동하는 링크를 생성
            const profileLink = document.createElement("a");
            if(alarm.sendNo!=null){
                profileLink.href = "/mypage/" + alarm.sendNo;
            }

            // 이미지 요소를 링크에 추가
            profileLink.appendChild(image);

            // 첫 번째 자식 요소에 프로필 링크를 추가
            firstChildDiv.appendChild(profileLink);

            // 두 번째 자식 요소 생성
            const secondChildDiv = document.createElement("div");

            // 두 번째 자식 요소 내부의 요소 생성
            const secondChildParagraph = document.createElement("p");
            if(alarm.noticeContent!=null){
                secondChildParagraph.innerHTML = alarm.noticeContent;
            }

            // 두 번째 자식 요소 내부의 요소들을 두 번째 자식 요소에 추가
            secondChildDiv.appendChild(secondChildParagraph);


            // 모든 자식 요소들을 부모 요소에 추가
            messageExampleDiv.appendChild(firstChildDiv);
            messageExampleDiv.appendChild(secondChildDiv);
            // messageExampleDiv.appendChild(thirdChildDiv);

            // 부모 요소를 원하는 컨테이너에 추가
            // const container = document.getElementById("container"); // 원하는 컨테이너의 id를 사용해야 합니다.
            alarmModBoxList.appendChild(messageExampleDiv);


                // 알람 메세지 삭제 하기
                // thirdChildImage.addEventListener("click", e =>{
                //     // messageResendBox.value;
                //     delNo = e.currentTarget.parentElement.previousElementSibling.getAttribute("delNo");

                //     if(!confirm("정말 삭제하시겠습니까?")){
                //         return;
                //     }

                //     fetch("/alarm/alarmDel",{
                //         method : "DELETE",
                //         headers : {"content-type":"application/json"},
                //         body : JSON.stringify({
                //             "deletMessageNo" : delNo,
                //             "MessageBoxType" : MessageBox
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
                //     .catch(err =>{
                //         console.log(err);
                //     })
                // })
            }

    } else {
        alarmModBoxList.innerHTML="<div><p> 받은 알림이 없습니다.</p></div>"; 
    }   

    })

    .catch(err =>{
        console.log(err);
    })

    
}
