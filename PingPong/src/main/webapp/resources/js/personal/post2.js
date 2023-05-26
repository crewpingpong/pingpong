const followListBtn = document.querySelector(".followBtn>*");
const myFollowList = document.querySelector(".myFollowList"); // 팔로우
const meFollowList = document.querySelector(".meFollowList"); // 팔로워
if(followListBtn!=null){
    
    const followList = document.querySelector(".followList");
    followList.addEventListener("click",()=>{
        myFollowList.style.display = "flex";
        myFollowListFn();
    })

    // const unfollow = document.querySelector(".unfollow");
    // if(unfollow!=null){ // 언팔 기능
    //     unfollow.addEventListener("click",()=>{
    //         unfollowFn();
    //     })
    // }
}

const gotoFollower = document.querySelector(".goto-follower");
if(gotoFollower!=null){
    gotoFollower.addEventListener("click",()=>{
        meFollowListFn();
        myFollowList.style.display = "none"; // 팔로우 닫기
        meFollowList.style.display = "flex"; // 팔로워 열기

    })
    const followerBoxX = document.querySelector(".follower-Box-X");
    followerBoxX.addEventListener("click",()=>{ // 팔로워 닫기
        meFollowList.style.display = "none";
    })
}
const gotoFollow = document.querySelector(".goto-follow");
if(gotoFollow!=null){
    gotoFollow.addEventListener("click",()=>{
        myFollowListFn();
        myFollowList.style.display = "flex"; // 팔로우 열기
        meFollowList.style.display = "none"; // 팔로워 닫기

    })
    const followBoxX = document.querySelector(".follow-Box-X");
    followBoxX.addEventListener("click",()=>{ // 팔로우 닫기
        myFollowList.style.display = "none";
    })
}



function myFollowListFn(){ // 내가 팔로우하는 리스트 조회
    fetch("/alarm/myFollowList")
    .then(resp => resp.json())
    .then(myFollowList => {
        // console.log(myFollowList.length);
        // 동적으로 생성할 요소를 담을 부모 요소를 선택합니다.
        const parentElement = document.querySelector('.myFollowList .followList');
        const myFollowCount = document.querySelector('.myFollowList .h4');
        myFollowCount.innerHTML="";

        const fmyFollowCountDiv = document.createElement('h4');
        fmyFollowCountDiv.textContent = "팔로우 ( "+ myFollowList.length +" )";
        myFollowCount.append(fmyFollowCountDiv);
        // `<h4 class="h4">팔로우 ${myFollowList.length}</h4>`;
        parentElement.innerHTML="";

        for(let mfl of myFollowList){

        // 새로운 div 요소를 생성합니다.
        const followExampleDiv = document.createElement('div');
        followExampleDiv.classList.add('followExample');

        // userProfile div 요소를 생성하고 내부 요소를 추가합니다.
        const userProfileDiv = document.createElement('div');
        userProfileDiv.classList.add('userProfile');

        const profileLink = document.createElement('a');
        profileLink.href = '/mypage/'+mfl.memberNo;

        const profileBox = document.createElement('div');
        profileBox.classList.add('probox');

        const profileImage = document.createElement('img');
        profileImage.src = mfl.followerImg;
        // profileImage.alt = '';

        profileBox.appendChild(profileImage);
        profileLink.appendChild(profileBox);

        const profileNameLink = document.createElement('a');
        profileNameLink.href = '/mypage/'+mfl.memberNo;

        const profileName = document.createElement('p');
        profileName.textContent = mfl.followerName;

        profileNameLink.appendChild(profileName);

        userProfileDiv.appendChild(profileLink);
        userProfileDiv.appendChild(profileNameLink);

        // followManage div 요소를 생성하고 내부 요소를 추가합니다.
        const followManageDiv = document.createElement('div');
        followManageDiv.classList.add('followManage');

        const unfollowButton = document.createElement('button');
        unfollowButton.classList.add('unfollow');
        unfollowButton.textContent = 'UNFOLLOW';
        
        followManageDiv.appendChild(unfollowButton);

        // 생성한 내부 요소들을 followExampleDiv에 추가합니다.
        followExampleDiv.appendChild(userProfileDiv);
        followExampleDiv.appendChild(followManageDiv);

        // 부모 요소에 followExampleDiv를 추가합니다.
        parentElement.appendChild(followExampleDiv);   
        
        unfollowButton.addEventListener("click", e =>{

            if(!confirm("팔로우를 취소하겠습니까?")){
                return;
            }

            fetch("/alarm/unFollow",{
                method : "DELETE",
                headers : {"content-type":"application/json"},
                body : JSON.stringify({
                    "followerNo" : mfl.memberNo,
                })
            })
            .then(resp => resp.text())
            .then(result => {
                if(result>0){
                    alert("팔로우 취소 완료");
                    myFollowListFn();
                } else{
                    alert("팔로우 취소 실패");
                }
            })
            .catch(err =>{
                console.log(err);
            })
        })


        }
    })
    .catch(err =>{
        console.log(err);
    })
}



function meFollowListFn(){ // 내가 팔로우하는 리스트 조회
    fetch("/alarm/meFollowList")
    .then(resp => resp.json())
    .then(meFollowList => {
        // console.log(meFollowList.length);
        // 동적으로 생성할 요소를 담을 부모 요소를 선택합니다.
        const parentElement2 = document.querySelector('.meFollowList .followList');
        const meFollowCount = document.querySelector('.meFollowList .h4');
        meFollowCount.innerHTML="";
        const fmyFollowCountDiv = document.createElement('h4');
        fmyFollowCountDiv.textContent = "팔로워 ( "+ meFollowList.length +" )";
        meFollowCount.append(fmyFollowCountDiv);

        parentElement2.innerHTML="";
        for(let mfl of meFollowList){

        // 새로운 div 요소를 생성합니다.
        const followExampleDiv = document.createElement('div');
        followExampleDiv.classList.add('followExample');

        // userProfile div 요소를 생성하고 내부 요소를 추가합니다.
        const userProfileDiv = document.createElement('div');
        userProfileDiv.classList.add('userProfile');

        const profileLink = document.createElement('a');
        profileLink.href = '/mypage/'+mfl.followerNo;

        const profileBox = document.createElement('div');
        profileBox.classList.add('probox');

        const profileImage = document.createElement('img');
        profileImage.src = mfl.followerImg;
        // profileImage.alt = '';

        profileBox.appendChild(profileImage);
        profileLink.appendChild(profileBox);

        const profileNameLink = document.createElement('a');
        profileNameLink.href = '/mypage/'+mfl.followerNo;

        const profileName = document.createElement('p');
        profileName.textContent = mfl.followerName;

        profileNameLink.appendChild(profileName);

        userProfileDiv.appendChild(profileLink);
        userProfileDiv.appendChild(profileNameLink);

        // followManage div 요소를 생성하고 내부 요소를 추가합니다.
        const followManageDiv = document.createElement('div');
        followManageDiv.classList.add('followManage');

        const unfollowButton = document.createElement('button');
        unfollowButton.classList.add('unfollow');
        unfollowButton.textContent = 'UNFOLLOW';

        followManageDiv.appendChild(unfollowButton);

        // 생성한 내부 요소들을 followExampleDiv에 추가합니다.
        followExampleDiv.appendChild(userProfileDiv);
        followExampleDiv.appendChild(followManageDiv);

        // 부모 요소에 followExampleDiv를 추가합니다.
        parentElement2.appendChild(followExampleDiv);  
        
        unfollowButton.addEventListener("click", e =>{

            if(!confirm("팔로워 팔로우를 취소시키겠습니까?")){
                return;
            }

            fetch("/alarm/followCancel",{
                method : "DELETE",
                headers : {"content-type":"application/json"},
                body : JSON.stringify({
                    "memberNo" : mfl.followerNo,
                })
            })
            .then(resp => resp.text())
            .then(result => {
                if(result>0){
                    alert("팔로워 취소 완료");
                    meFollowListFn();
                } else{
                    alert("팔로워 취소 실패");
                }
            })
            .catch(err =>{
                console.log(err);
            })
        })
        }
    })
    .catch(err =>{
        console.log(err);
    })
}

// function unfollowFn(){
//     fetch("/alarm/")
//     .then(resp => resp.json())
//     .then(myFollowMap => {
        
//     })
//     .catch(err =>{
//         console.log(err);
//     })
// }
