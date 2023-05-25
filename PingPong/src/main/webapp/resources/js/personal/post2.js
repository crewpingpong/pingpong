const followListBtn = document.querySelector(".followBtn>*");
const myFollowList = document.querySelector(".myFollowList");
if(followListBtn!=null){
    followListBtn.addEventListener("click",()=>{
        myFollowList.style.display = "flex";
        myFollowListFn();
    })
    const followBoxX = document.querySelector(".follow-Box-X");
    followBoxX.addEventListener("click",()=>{
        myFollowList.style.display = "none";
    })
    const unfollow = document.querySelector(".unfollow");
    unfollow.addEventListener("click",()=>{
        unfollowFn();
    })
}
const parentElement = document.querySelector('.myFollowList .followList');

function myFollowListFn(){ // 내가 팔로우하는 리스트 조회
    fetch("/alarm/myFollowList")
    .then(resp => resp.json())
    .then(myFollowList => {
        // console.log(myFollowList);
        // 동적으로 생성할 요소를 담을 부모 요소를 선택합니다.
        // <h4>팔로우 (myFollowList.length)</h4>
        for(let mfl of myFollowList){

            // 새로운 div 요소를 생성합니다.
            const divElement = document.createElement('div');
            divElement.classList.add('followExample');
    
            // userProflie div 요소를 생성하고 내부 요소를 추가합니다.
            const userProfileDiv = document.createElement('div');
            userProfileDiv.classList.add('userProfile');
    
            const profileLink = document.createElement('a');
            profileLink.href = '/mypage/'+myFollowList.followerNo;
    
            const profileBox = document.createElement('div');
            profileBox.classList.add('probox');
    
            const profileImage = document.createElement('img');
            if(myFollowList.followerImg != undefined){
                profileImage.src = myFollowList.followerImg;
            }
            // profileImage.alt = '';
    
            profileBox.appendChild(profileImage);
            profileLink.appendChild(profileBox);
    
            const profileNameLink = document.createElement('a');
            profileNameLink.href = '/mypage/'+myFollowList.followerNo;
    
            const profileName = document.createElement('p');
            profileName.textContent = myFollowList.followerName;
    
            profileNameLink.appendChild(profileName);
    
            userProfileDiv.appendChild(profileLink);
            userProfileDiv.appendChild(profileNameLink);
    
            divElement.appendChild(userProfileDiv);
    
            // followManage div 요소를 생성하고 내부 요소를 추가합니다.
            const followManageDiv = document.createElement('div');
            followManageDiv.classList.add('followManage');
    
            const unfollowButton = document.createElement('button');
            unfollowButton.classList.add('unfollow');
            unfollowButton.textContent = 'UNFOLLOW';
    
            followManageDiv.appendChild(unfollowButton);
    
            divElement.appendChild(followManageDiv);
    
            // 부모 요소에 새로운 요소를 추가합니다.
            parentElement.appendChild(divElement);
        }
    })
    .catch(err =>{
        console.log(err);
    })
}

function unfollowFn(){
    fetch("/alarm/")
    .then(resp => resp.json())
    .then(myFollowMap => {

    })
    .catch(err =>{
        console.log(err);
    })
}