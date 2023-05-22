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
        alarmIconRedColor.classList.add("alarm-icon-redColor");
        alarmModBox.classList.add("alarm-icon-redColor");
    }

    searchicon.style.display="none";
    if(document.querySelector(".signBtn") != null){
        document.querySelector(".signBtn").style.display="none";
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
const alarmIcon = document.querySelector(".alarm_icon");
// const alarmIconRedColor = document.querySelector(".alarm_icon>svg>svg");
const alarmIconRedColor = document.querySelector(".redheart");
const alarmModBox = document.querySelector("#alarmModBox");

alarmIcon.addEventListener("click", () => {
    // alarmIconRedColor.classList.toggle("alarm-icon-redColor");
    alarmModBox.classList.toggle("alarm-icon-redColor");
});



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
    if(mainnav.style.display === "block"){
        // 네브 오른쪽 회색 배경을 누르면  nav의 display가 none로 변경
        document.addEventListener("click", e=>{
            if(e.target===grayBackground){
                mainnav.style.display = "none";
                navmore.style.display="none"; 
                logModContainer.style.display = "none";
                if(siteInfoMod != null){
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
        });
        const navloginclBtn = document.getElementById("navloginclBtn");
        navloginclBtn.addEventListener("click", () => {
            logModContainer.style.display = "none";
    
        });
    }

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

// 검색 x버튼 누르면 안에 있는 값 지우기
const hamseachboxX = document.querySelector('div.seachbox > svg'); // 햄버거 검색 X 버튼
const navseachboxX = document.querySelector('#searchModContainer > div:nth-child(2) > div > svg'); // 햄버거 검색 X 버튼

hamseachboxX.addEventListener("click",()=>{
    headerOpenSearchBox.value="";
});
navseachboxX.addEventListener("click",()=>{
    seachModInnerContent.value="";
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

// 헤더에 검색버튼 올리면 열리는 검색 버튼 id = "headerOpenSearchBox"
const headerOpenSearchBox = document.querySelector("#headerOpenSearchBox");
const headerSearchModContainer = document.querySelector("#headerSearchModContainer");
headerOpenSearchBox.addEventListener("keyup", e => {
    
    if(headerOpenSearchBox.value=='' || headerOpenSearchBox.value=='#'){
        headerSearchModContainer.style.display = "none";
    } else{
        headerSearchModContainer.style.display = "block";
    }
    // 여기 수정
    // while(headerSearchModResultList.hasChildNodes()) {
    //     headerSearchModResultList.removeChild(headerSearchModResultList.firstChild);
    // }
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

