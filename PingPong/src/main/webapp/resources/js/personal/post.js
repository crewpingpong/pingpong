// 개인 홈 프로필 js
// 홈프로필 배경 변경
const preview = document.getElementsByClassName("preview");  // img 태그
const background = document.getElementById("background");  // file
const deleteBackground = document.getElementById("deleteBackground"); // 돌아가기

const selectBackground = document.getElementById("selectBackground");
const afterChoice = document.getElementById("afterChoice");
let secondComment;
if(background != null){
    background.addEventListener("change", e=>{
        const file = e.target.files[0];
        if(file != undefined){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
                preview[0].setAttribute("src", e.target.result);
            }
            selectBackground.style.display = 'none';
            afterChoice.style.display = 'block';
        } else {
            preview[0].removeAttribute("src");
            selectBackground.style.display = 'block';
            afterChoice.style.display = 'none';
        }
    
    });
    

    deleteBackground.addEventListener('click', ()=>{
        if(preview[0].getAttribute("src") != ""){
            preview[0].removeAttribute("src");
            background.value = "";
            selectBackground.style.display = 'block';
            afterChoice.style.display = 'none';
        }
    });

    const updateBackground = document.getElementById("updateBackground");
    updateBackground.addEventListener("click", () => {
    
        if(background.value == ''){
            alert("배경화면을 지정해주세요");
            e.preventDefault();
            return;
        }
    
        location.href = "/mypage/background";
    
    });
}

// 상단 프로필 오른쪽 소개 탭 구역
const profiletabList = document.querySelectorAll('.profiletab_menu .profilelist li');
const profilecontents = document.querySelectorAll('.profiletab_menu .cont_area .cont')
let profileactiveCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var i = 0; i < profiletabList.length; i++) {
    profiletabList[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < profiletabList.length; j++) {
            // 나머지 버튼 클래스 제거
            profiletabList[j].classList.remove('is_on');

            // 나머지 컨텐츠 display:none 처리
            profilecontents[j].style.display = 'none';
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');

        // 버튼 클릭시 컨텐츠 전환
        profileactiveCont = this.getAttribute('href');
        document.querySelector(profileactiveCont).style.display = 'block';
    });
}

// 개인 홈 게시글 하단 그리드 구역
const posttabList = document.querySelectorAll('.posttab_menu .postlist li');
const postcontents = document.querySelectorAll('.posttab_menu .postcont_area .postcont')
let postactiveCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (var i = 0; i < posttabList.length-1; i++) {
    posttabList[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < posttabList.length-1; j++) {
            // 나머지 버튼 클래스 제거
            posttabList[j].classList.remove('is_on');

            // 나머지 컨텐츠 display:none 처리
            postcontents[j].style.display = 'none';
        }

        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');

        // 버튼 클릭시 컨텐츠 전환
        postactiveCont = this.getAttribute('href');
        document.querySelector(postactiveCont).style.display = 'block';
    });
}

// 프로필 메세지함 클릭하면 받은메세지함으로 이동
const messageBox = document.querySelector(".messageBox");
const messageBoxClose = document.querySelector(".message-Box-X");

messageBox.addEventListener("click", () => {
    messageBoXrecive.style.display = "flex";
})

messageBoxClose.addEventListener("click", () => {
    messageBoXrecive.style.display = "none";
})

// 게시글 상세 페이지 메세지 누르면 메세지 보내기 화면으로 넘어가기
const BoardIcon = document.querySelector(".BoardIconMessage");
BoardIcon.addEventListener("click", () => {
    messageSendContainer.style.display = "flex";
})

// 게시글 상세 페이지 신고 버튼 누르면 신고 화면으로 넘어가기
const BoardIconReport = document.querySelector(".BoardIconReport").parentElement;
const BoardIconReportMod = document.querySelector(".BoardIconReportMod #grayBackground");
const ReportModX = document.querySelector(".BoardIconReportMod #oneToOne>div>svg:nth-child(2)");

BoardIconReport.addEventListener("click", () => {
    BoardIconReportMod.style.display = "flex";
    ReportModX.addEventListener("click",()=>{
        BoardIconReportMod.style.display = "none";
    })

})


/* 신고 모달 구현 */
const grayBack = document.getElementById("grayBackground");
const oneToOne = document.getElementById("oneToOne");
// const oneToOnechild = document.querySelectorAll("#oneToOne>*");
function showModal(target){
    grayBack.style.display = "flex";
    document.addEventListener("mouseup", e=>{
        // if(e.target!==oneToOne){
        if(e.target==grayBack){
            grayBack.style.display = "none";
            document.getElementById("chooseFile").value = '';
            document.getElementById("fileName").innerText = '';
        }
    })
}

const chooseFile = document.getElementById('chooseFile');
const fileName = document.getElementById('fileName');

chooseFile.addEventListener("change", showTextFile);

function showTextFile() {
    const selectedFiles = chooseFile.files;
    if(document.querySelector('#fileName>p')){
        document.querySelector('#fileName>p').remove();
    }
    const list = document.createElement('p');
    fileName.appendChild(list);
    
    for (const file of selectedFiles) {
        if (selectedFiles != null) {
            console.log("abc");
            const summary = document.createElement('p');
            summary.innerText = file.name;
            list.appendChild(summary);
        }
    }
}

const submit = document.getElementById('submit');

submit.addEventListener("click", ()=>{
    alert("제출 되었습니다.")
});


// -------------------------------------------------------------------------
// 게시글 상세 시작

// // let IconList = document.getElementsByClassName("BoardIcon");
// // let BoardIconInfo = document.getElementsByClassName("BoardIconInfo");
// /* 아이콘 드랍다운 */

// // for(let i = 0 ; i<IconList.length; i++){
// //     IconList[i].addEventListener("mouseenter",()=>{
// //         if(IconList[i]) BoardIconInfo[i].style.display ="flex";
// //     });
// //     IconList[i].addEventListener("mouseleave",()=>{
// //         if(IconList[i])BoardIconInfo[i].style.display ="none";
// //     })
// // }
const Boardcontent = document.querySelector(".Boardcontent");
const Boardcontent1 = document.querySelector(".Boardcontent1");

const BoardHeartBox = document.querySelector(".BoardHeartBox");

const BoardCommentBox = document.querySelector(".BoardCommentBox");
// const BoardCommentBox1 = document.querySelector(".BoardCommentBox1");

const BoardComment = document.querySelector(".BoardComment");
// const BoardCommentBtn1 = document.querySelector(".BoardCommentBtn1").firstElementChild
// const BoardCommentBtn2 = document.querySelector(".BoardCommentBtn1").lastElementChild
const BoardPost1 = document.querySelector(".BoardPost1")
// let BoardCommentText1 = document.querySelector(".BoardCommentText1");

const newContent = document.querySelector(".newContent");
/* 댓글 달기 버튼 */
// BoardComment.addEventListener("click", () => {
//     Boardcontent.style.display = "none";
//     Boardcontent1.style.display = "flex";

//     BoardHeartBox.style.display = "none";

//     BoardCommentBox.style.display = "none";
//     BoardCommentBox1.style.display = "block";
// })
// /* 이전 버튼 */
// BoardCommentBtn2.addEventListener("click", () => {
//     // console.log("dddddd")
//     Boardcontent.style.display = "flex";
//     Boardcontent1.style.display = "none";

//     BoardHeartBox.style.display = "flex";

//     BoardCommentBox.style.display = "flex";
//     BoardCommentBox1.style.display = "none";

// });

// /* 확인 버튼 */
// function selectCommentList(){

//     fetch("/comment?boardNo="+boardNo)


// }
// if(BoardCommentBtn1 != null){
//     BoardCommentBtn1.addEventListener("click", () => {

//         const check = confirm("댓글을 등록하시겠습니까?");
//         let text = document.querySelector(".BoardCommentText1").value;

//         if (check && text.trim() !== "") {
//             alert("등록되었습니다")

//             const div1 = document.createElement("div");
//             div1.classList.add("postcontent1");

//             const div2 = document.createElement("div");
//             div2.classList.add("BoardPost1");

//             const a1 = document.createElement("a");
//             a1.classList.add("BoardProfile1")

//             const div3 = document.createElement("div");

//             const a2 = document.createElement("a")

//             const p = document.createElement("p")

//             const span = document.createElement("span");
//             span.classList.add("BoardComment-remove-row");

//             span.innerHTML = "&times;"

//             text = text.replaceAll(/(\n|\r\n)/g, "<br>");

//             p.innerHTML = text
//             a2.innerHTML = "김핑퐁" /* 추후 프로필명 으로 수정 */

//             Boardcontent1.prepend(div1);
//             div1.prepend(div2);
//             div2.append(a1);
//             div1.append(div3);
//             div1.append(span);
//             div3.prepend(a2);
//             div3.append(p);

//             document.querySelector(".BoardCommentText1").value = "";

//             span.addEventListener("click", e => {

//                 const check1 = confirm("삭제하시겠습니까?")

//                 if (check1) {
//                     alert("댓글 삭제 완료")
//                     e.target.parentElement.remove();

//                 } else alert("취소되었습니다")
//             });

//         }
//         else alert("취소되었습니다")

//     });
// }

/* 게시글 닫기 버튼으로 닫기 */
const BoardClose = document.querySelector(".BoardClose");

const BoardBackground = document.querySelector(".BoardBackground");
BoardClose.addEventListener("click", () => {
    BoardBackground.style.display = "none";
    // FirstPagination.click();
});

/* 게시글 클릭했을 때 게시글 열기 */
const contentBox = document.querySelectorAll(".contentBox>div>a");
for(let i=0;i<contentBox.length;i++){
    contentBox[i].addEventListener("click", () => {
        BoardBackground.style.display = "flex";
        BoardBackground.classList.remove('BoardBackground-close');
    });
}

const boardModal = document.querySelector("#boardModal");
if(boardModal.style.display == 'flex'){
    console.log("abc");
}
// -----------------------------------------------------------------------------------------
// 게시글 슬라이드


//const slide = document.querySelector(".slide");
//let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
//const prevBtn = document.querySelector(".slide_prev_button");
//const nextBtn = document.querySelector(".slide_next_button");


//*** */ 게시글 슬라이드****



const slide = document.querySelector(".slide");
// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");


let slideWidth; // 슬라이크 전체 크기(width 구하기)
let currSlide; // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수

let startSlide;
let endSlide;
let maxSlide; // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수

let paginationItems;
let FirstPagination;
let parentComment;
let boardCont;

let commentParentNo;

const updateBackground = document.getElementById("updateBackground");
const checkSlideDiv = document.getElementsByClassName("slide_item");
let slideItems; // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const BoardHeart = document.querySelector(".BoardHeart");
const BoardRedHeart = document.querySelector(".BoardRedHeart");
const markOn = document.querySelector(".markOn");
const markOff = document.querySelector(".markOff");

let boardNumber;
let boardMember;
function selectBoardList(boardNo){

    fetch("/boardDetail?boardNo="+boardNo)
    .then(response => response.json())
    .then(board => {
        boardCont = board.boardContent;

        console.log(board);
        document.querySelectorAll('.slide_item').forEach(function(slideItem) {
            slideItem.remove();
        });

        let flagHeart = 0;
        for(let i of board.likeList){
            if(loginMemberNo == i.memberNo){
                flagHeart++;
                break;
            }
        }
        BoardRedHeart.style.display = "none";
        BoardHeart.style.display = "none";
        if(flagHeart>0){
            BoardRedHeart.style.display = "block";
        } else {
            BoardHeart.style.display = "block";
        }

        let flagBookmark = 0;
        for(let i of board.bookmarkList){
            if(loginMemberNo == i.memberNo){
                flagBookmark++;
                break;
            }
        }
        markOn.style.display = "none";
        markOff.style.display = "none";
        if(flagBookmark>0){
            markOn.style.display = "block";
        } else {
            markOff.style.display = "block";
        }


        boardNumber = board.boardNo;
        boardMember = board.memberNo;

        const porfileRac = document.querySelector(".porfileRac");
        const boardMemberInfo = document.querySelector(".boardMemberInfo");
        const BoardPost = document.querySelector(".BoardPost");
        const likeCountSpan = document.querySelector(".likeCount");
        likeCountSpan.innerHTML = '';
        porfileRac.innerHTML = '';
        boardMemberInfo.innerHTML = '';
        BoardPost.innerHTML = '';
        Boardcontent1.innerHTML = '';
        
        for(let i=0; i<board.imageList.length;i++){
            const slideDiv = document.createElement("div");
            slideDiv.classList.add("slide_item");
            
            const img = document.createElement("img");
            img.src = board.imageList[i].imgAddress;
            img.classList.add("slide-img");
            slideDiv.append(img);
            
            prevBtn.before(slideDiv);
        }

        let arr = [];

        for(let i=0; i<board.commentList.length;i++){
            if(board.commentList[i].parentNo == 0){

                arr.push(board.commentList[i].commentNo);
                const postContentDiv = document.createElement("div");
                postContentDiv.classList.add("postcontent1");

                const boardPostDiv = document.createElement("div");
                boardPostDiv.classList.add("BoardPost1");

                const boardProfileA = document.createElement("a");
                boardProfileA.href = "/mypage/"+board.commentList[i].memberNo;
                boardProfileA.classList.add("Boardprofile1");
                const profileImg = document.createElement("img");
                profileImg.src = board.commentList[i].profileImg;
                boardProfileA.append(profileImg);
                boardPostDiv.append(boardProfileA);


                const div = document.createElement("div");
                div.classList.add("commentbox");

                const innerDiv = document.createElement("div");
                innerDiv.classList.add("innerDiv");

                const nameA = document.createElement("a");
                nameA.href = "/mypage/"+board.commentList[i].memberNo;
                nameA.innerText = board.commentList[i].memberNickname;

                const contentP = document.createElement("p");
                contentP.innerText = board.commentList[i].commentContent;

                const dateDiv = document.createElement("div");
                dateDiv.classList.add("dateDiv");

                const cDateP = document.createElement("p");
                cDateP.innerText = board.commentList[i].commentDate;

                const replSpan = document.createElement("span");
                replSpan.innerText = "답글 달기";
                replSpan.classList.add("replyCommentInsert");

                dateDiv.append(cDateP, replSpan);

                innerDiv.append(nameA, contentP);
                div.append(innerDiv, dateDiv);

                if(board.commentList[i].childCheck > 0){
                    const secondDiv = document.createElement("div");
                    secondDiv.classList.add("secondComment");
                    secondDiv.innerText = "—— 답글 보기(" + board.commentList[i].childCheck + ")";
                    div.append(secondDiv);
                }
                
                for(let j=0; j<board.commentList.length;j++){
                    if(board.commentList[i].commentNo == board.commentList[j].parentNo){
                        const postContentDiv1 = document.createElement("div");
                        postContentDiv1.classList.add("postcontent2");

                        const boardPostDiv1 = document.createElement("div");
                        boardPostDiv1.classList.add("BoardPost2");

                        const boardProfileA1 = document.createElement("a");
                        boardProfileA1.href = "/mypage/"+board.commentList[i].memberNo;
                        boardProfileA1.classList.add("Boardprofile2");
                        const profileImg1 = document.createElement("img");
                        profileImg1.src = board.commentList[j].profileImg;
                        boardProfileA1.append(profileImg1);
                        boardPostDiv1.append(boardProfileA1);


                        const div1 = document.createElement("div");

                        const innerDiv1 = document.createElement("div");
                        innerDiv1.classList.add("innerDiv");

                        const nameA1 = document.createElement("a");
                        nameA1.href = "/mypage/"+board.commentList[j].memberNo;
                        nameA1.innerText = board.commentList[j].memberNickname;

                        const contentP1 = document.createElement("p");
                        contentP1.innerText = board.commentList[j].commentContent;

                        const dateDiv1 = document.createElement("div");
                        dateDiv1.classList.add("dateDiv");

                        const cDateP1 = document.createElement("p");
                        cDateP1.innerText = board.commentList[j].commentDate;

                        dateDiv1.append(cDateP1);

                        innerDiv1.append(nameA1, contentP1);
                        div1.append(innerDiv1, dateDiv1);

                        const lastDiv1 = document.createElement("div");
                        lastDiv1.classList.add("lastDivadd1")
                        lastDiv1.append(boardPostDiv1, div1);
                        postContentDiv1.append(lastDiv1);
                        div.append(postContentDiv1);
                    }
                }
                const lastDiv = document.createElement("div");
                lastDiv.classList.add("lastDivadd")
                lastDiv.append(boardPostDiv, div);
                if(board.commentList[i].memberNo == loginMemberNo){

                    let item = 
                        `<div class="deleteComment">
                            <button type="button" onclick="removeComment(${board.commentList[i].commentNo})">×</button>
                        </div>`;
                    lastDiv.insertAdjacentHTML("beforeend", item);

                }
                postContentDiv.append(lastDiv);
                Boardcontent1.append(postContentDiv);
            }
        }  // 댓글 창 구현 끝


        const editing = document.querySelector(".editing");
        if(loginMemberNo == boardMember){
            editing.style.display = 'block';
        }


        // 답글 보기 누르면 댓댓글 보이는 이벤트
        const secondComment = document.querySelectorAll(".secondComment");
        for(let i=0;i<secondComment.length;i++){
            secondComment[i].addEventListener("click", e=>{
                let siblings = getSiblings(e.target);
                
                for(let j=0;j<siblings.length;j++){
                    siblings[j].classList.toggle("postcontent2");
                }
            });
        }

        // 답글 달기 누르면 댓글textarea에 @아이디 추가됨
        const replyCommentInsert = document.querySelectorAll(".replyCommentInsert");
        for(let i=0;i<replyCommentInsert.length;i++){
            replyCommentInsert[i].addEventListener("click", e=>{
                let nickName = e.target.parentNode.previousElementSibling.children[0].innerText;
                commentContentArea.focus();
                commentContentArea.value = "@" + nickName+" ";
                commentParentNo = arr[i];
            })
        }


        slideItems = document.querySelectorAll(".slide_item");
        maxSlide = slideItems.length;
        slideWidth = slide.clientWidth;

        const profileA = document.createElement("img");
        profileA.href = "/mypage/"+board.memberNo;
        profileA.src = board.profileImage;
        profileA.classList.add("Boardprofile");
        
        
        porfileRac.append(profileA);
        
        const memberNickA = document.createElement("a");
        memberNickA.href = "/mypage/"+board.memberNo;
        memberNickA.innerText = board.memberNickname;
        console.log(memberNickA);
        boardMemberInfo.append(memberNickA);


        const postContentDiv = document.createElement("div");
        postContentDiv.classList.add("postcontent1");

        const boardPostDiv = document.createElement("div");
        boardPostDiv.classList.add("BoardPost1");

        const boardProfileA = document.createElement("a");
        boardProfileA.href = "/mypage/"+board.memberNo;
        boardProfileA.classList.add("Boardprofile1");
        const profileImg = document.createElement("img");
        profileImg.src = board.profileImage;
        boardProfileA.append(profileImg);
        boardPostDiv.append(boardProfileA);


        const div = document.createElement("div");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");

        const nameA = document.createElement("a");
        nameA.href = "/mypage/"+board.memberNo;
        nameA.innerText = board.memberNickname;

        const contentP = document.createElement("p");
        contentP.innerText = board.boardContent;

        const input = document.createElement("textarea");
        input.classList.add("hiddenEditing");

        const editingDiv = document.createElement("div");

        const submit = document.createElement("span");
        submit.classList.add("editingSubmit");
        submit.innerText = '수정';

        const cancel = document.createElement("span");
        cancel.classList.add("editingCancel");
        cancel.innerText = '취소';

        editingDiv.append(submit, cancel);

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("dateDiv");

        const cDateP = document.createElement("p");
        cDateP.innerText = board.boardDate;

        dateDiv.append(cDateP);

        innerDiv.append(nameA, contentP, input, editingDiv);
        div.append(innerDiv, dateDiv);
        const lastDiv = document.createElement("div");
        lastDiv.classList.add("lastDivadd")
        lastDiv.append(boardPostDiv, div);
        postContentDiv.append(lastDiv);
        
        BoardPost.append(postContentDiv);

        likeCountSpan.innerText = board.likeCount+"명이 좋아합니다";


        // 게시글 수정 (내용 / 태그)
        const boardEditing = document.querySelectorAll(".boardEditing");
        const hiddenEditing = document.querySelector(".hiddenEditing");
        const editingSubmit = document.querySelector(".editingSubmit");
        const editingCancel = document.querySelector(".editingCancel");
        for(let i=0;i<boardEditing.length;i++){
            boardEditing[i].addEventListener("click", ()=>{
                console.log("abc");
                BoardPost.querySelector(".innerDiv>p").style.display = 'none';
                hiddenEditing.style.display = 'block';
                editingSubmit.style.display = 'inline';
                editingCancel.style.display = 'inline';
                hiddenEditing.focus();
                hiddenEditing.value = BoardPost.querySelector(".innerDiv>p").innerHTML;
                
            });
        }

        editingCancel.addEventListener("click", ()=>{
            BoardPost.querySelector(".innerDiv>p").style.display = 'block';
            hiddenEditing.style.display = 'none';
            editingSubmit.style.display = 'none';
            editingCancel.style.display = 'none';
        });

        editingSubmit.addEventListener("click", ()=>{

            console.log(board.boardNo);
            console.log(hiddenEditing.value);

            if(board.boardContent == hiddenEditing.value){
                BoardPost.querySelector(".innerDiv>p").style.display = 'block';
                hiddenEditing.style.display = 'none';
                editingSubmit.style.display = 'none';
                editingCancel.style.display = 'none';
                return;
            }


            const data = {"boardNo" : board.boardNo, "boardContent" : hiddenEditing.value};

            fetch("/board/editing", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data)}
            )
            .then(resp => resp.text())
            .then(result=>{

                if(result == 0){
                    console.log("게시글 수정 실패");
                    return;
                }
                BoardPost.querySelector(".innerDiv>p").style.display = 'block';
                hiddenEditing.style.display = 'none';
                editingSubmit.style.display = 'none';
                editingCancel.style.display = 'none';
                BoardPost.querySelector(".innerDiv>p").innerHTML = hiddenEditing.value;
            })
            .catch(err => {
                console.log(err);
            })
        });



        slideInitFn();




    })
    .catch(err => console.log(err));
}


// 댓글 삭제 함수
function removeComment(commentNo) {
    document.getElementById(hashtag).remove();
}


// 댓글 달기 AJAX
const insertComment = document.getElementById("insertComment");
let commentContentArea = document.getElementById("commentContentArea");
if(insertComment != null){
insertComment.addEventListener("click", e=>{
    if(loginMemberNo == ""){
        alert("로그인 후 이용해주세요");
        return;
    }
    let data;
    if(commentContentArea.value[0] == "@"){
        const parentNickname = commentContentArea.value.split(" ")[0].substring(1);
        const commentContent = commentContentArea.value.split(" ").slice(1).join(' ');
        data = {"commentContent" : commentContent, "memberNo" : loginMemberNo, "boardNo" : boardNumber, "parentNo" : commentParentNo};
    } else{
        data = {"commentContent" : commentContentArea.value, "memberNo" : loginMemberNo, "boardNo" : boardNumber, "parentNo" : null};
    }
    
    console.log(data);
    commentContentArea.value ='';
    commentContentArea.focus();

    fetch("/board/comment", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    })
    .then(resp => resp.text())
    .then(boardNo => {
        console.log("boardNo : " + boardNo);

        selectBoardList(boardNo);
    })
    .catch(err => {
        console.log(err);
    })

})
}




function getSiblings(currentNode) {
    let slblings = [];
  
    // 부모 노드가 없는 경우 현재 노드를 반환
    if (!currentNode.parentNode) {
      return currentNode;
    }
  
    // 1. 부모 노드를 접근합니다.
    let parentNode = currentNode.parentNode;
  
    // 2. 부모 노드의 첫 번째 자식 노드를 가져옵니다.
    let silblingNode = parentNode.firstChild;
  
    while (silblingNode) {
      // 기존 노드가 아닌 경우 배열에 추가합니다.
      if (silblingNode.nodeType === 1 && silblingNode !== currentNode) {
        slblings.push(silblingNode);
      }
      // 다음 노드를 접근합니다.
      silblingNode = silblingNode.nextElementSibling;
    }
  
    // 형제 노드가 담긴 배열을 반환합니다.
    return slblings;
  }

// 답글 보기 버튼을 눌렀을 때


// for(let i=0;i<secondComment.length;i++){
//     secondComment.addEventListener("click", e =>{
//         e.target.nextAll().classList.toggle("postcontent2");
//     });
// }



// 좋아요 AJAX
const boardLike = document.querySelectorAll(".boardLike");
const likeCount = document.querySelector(".likeCount");
for(let i=0;i<boardLike.length;i++){
    boardLike[i].addEventListener("click", e=>{
        if(loginMemberNo == ""){
            alert("로그인 후 이용해주세요");
            return;
        }
        let check;

        if(e.target.classList.contains("BoardHeart")){  // 좋아요 x
            check = 0;
        } else {  // 좋아요 o
            check = 1;
        }


        const data = {"boardNo" : boardNumber, "memberNo" : loginMemberNo, "check" : check};

        fetch("/board/like",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })
        .then(resp => resp.text())
        .then(count => {
            console.log("count : " + count);

            if(count == -1){  // INSERT, DELETE 실패 시
                console.log("좋아요 처리 실패");
                return;
            }
            console.log(check);
            if(check==0){
                BoardRedHeart.style.display = "block";
                BoardHeart.style.display = "none";
            } else {
                BoardRedHeart.style.display = "none";
                BoardHeart.style.display = "block";
            }
            likeCount.innerText = count+"명이 좋아합니다";
        })
        .catch(err => {
            console.log(err);
        })
    });
}

const boardMark = document.querySelectorAll(".boardMark");


// 북마크 AJAX
for(let i=0;i<boardMark.length;i++){
    boardMark[i].addEventListener("click", e=>{
        if(loginMemberNo == ""){
            alert("로그인 후 이용해주세요");
            return;
        }
        let check1;
        
        if(e.target.classList.contains("markOff")){  // 북마크 x
            check1 = 0;
        } else { // 북마크 o
            check1 = 1;
        }

        const data = {"boardNo" : boardNumber, "memberNo" : loginMemberNo, "check" : check1};

        fetch("/board/markup", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)}
        )
        .then(response => response.text())
        .then(result => {
            if(result == 0){
                console.log("북마크 처리 실패");
                return;
            }
            if(check1==0){
                markOn.style.display = "block";
                markOff.style.display = "none";
            } else{
                markOn.style.display = "none";
                markOff.style.display = "block";
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
}







//let currSlide = 1;

// 페이지네이션 생성
//const pagination = document.querySelector(".slide_pagination");

function slideInitFn(){
    currSlide = 1;

    pagination.innerHTML = "";

    for (let i = 0; i < maxSlide; i++) {
        const li = document.createElement("li");
        li.innerHTML = "•";
        
        if(i == 0) li.classList.add("active");

        pagination.append(li);

        li.addEventListener("click", () => {
            // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
            currSlide = i + 1;
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset = slideWidth * currSlide;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                i.setAttribute("style", `left: ${-offset}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems.forEach((i) => i.classList.remove("active"));
            paginationItems[currSlide - 1].classList.add("active");
        });
    }
    paginationItems = document.querySelectorAll(".slide_pagination > li");
    
    FirstPagination = document.querySelector(".slide_pagination > li");
    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
    
    //const startSlide = slideItems[0];
    //const endSlide = slideItems[slideItems.length - 1];
    
    const startElem = document.createElement("div");
    const endElem = document.createElement("div");
    
    // endSlide.classList.forEach((c) => endElem.classList.add(c));
    // endElem.innerHTML = endSlide.innerHTML;

    // startSlide.classList.forEach((c) => startElem.classList.add(c));
    // startElem.innerHTML = startSlide.innerHTML;

    // // 각 복제한 엘리먼트 추가하기
    // slideItems[0].before(endElem);
    // slideItems[slideItems.length - 1].after(startElem);

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    slideItems = document.querySelectorAll(".slide_item");
    //
    let offset = slideWidth + currSlide;
    slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
    });
}



function nextMove() {
    currSlide++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide <= maxSlide) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
        currSlide = 0;
        let offset = slideWidth * currSlide;
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide++;
        offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        // // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}
function prevMove() {
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
        currSlide = maxSlide + 1;
        let offset = slideWidth * currSlide;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        });
        currSlide--;
        offset = slideWidth * currSlide;
        setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems.forEach((i) => {
                // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
            });
        }, 0);
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});



// // 드래그(스와이프) 이벤트를 위한 변수 초기화
// let startPoint = 0;
// let endPoint = 0;

// // PC 클릭 이벤트 (드래그)
// slide.addEventListener("mousedown", (e) => {
//     startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
// });

// slide.addEventListener("mouseup", (e) => {
//     endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
//     if (startPoint < endPoint) {
//         // 마우스가 오른쪽으로 드래그 된 경우
//         prevMove();
//     } else if (startPoint > endPoint) {
//         // 마우스가 왼쪽으로 드래그 된 경우
//         nextMove();
//     }
// });

// // 모바일 터치 이벤트 (스와이프)
// slide.addEventListener("touchstart", (e) => {
//     startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
// });
// slide.addEventListener("touchend", (e) => {
//     endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
//     if (startPoint < endPoint) {
//         // 오른쪽으로 스와이프 된 경우
//         prevMove();
//     } else if (startPoint > endPoint) {
//         // 왼쪽으로 스와이프 된 경우
//         nextMove();
//     }
// });

// // 기본적으로 슬라이드 루프 시작하기
// let loopInterval = setInterval(() => {
//     nextMove();
// }, 3000);

// // 슬라이드에 마우스가 올라간 경우 루프 멈추기
// slide.addEventListener("mouseover", () => {
//     clearInterval(loopInterval);
// });

// // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
// slide.addEventListener("mouseout", () => {
//     loopInterval = setInterval(() => {
//         nextMove();
//     }, 3000);
// });

/* 새 게시글 업로드 */

const NewBoardBackground = document.querySelector(".NewBoardBackground"); 

newContent.addEventListener("click", () => {
    NewBoardBackground.style.display = "flex";

    NewBoardBackground.classList.remove('BoardBackground-close');

})
const newContentClose = document.querySelector(".newContentClose");

newContentClose.addEventListener("click", () => {

    NewBoardBackground.style.display = "none";
})

/* 게시글 파일 첨부 버튼 */
const inputFileBtn = document.querySelector(".inputFileBtn");
const BoardBackground2 = document.querySelector(".BoardBackground2");
const BoardPicture = document.querySelector(".BoardPicture");

inputFileBtn.addEventListener("change", () => {
    BoardBackground2.style.display = "flex";
    BoardBackground2.classList.remove('BoardBackground-close');

});

// const ContentNewFile = document.querySelector('#ContentNewFile');
const upload = document.querySelector('#ContentNewFile');
// upload.addEventListener('click', () => {
//     NewBoardBackground.style.display = "none";
//     BoardBackground2.style.display = "flex";
//     BoardBackground2.classList.remove('BoardBackground-close');
// });
const NewWriteTextArea = document.querySelector(".NewWriteTextArea");
function getImageFiles(e) {
    // 이미지 배열로 받아서 검사 (아래부분 늘려주고 요소 추가하는 코드 넣으면 여러 개 가능)
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const slidePrevButton = document.querySelector('.slide_prev_button2');
    const docFrag = new DocumentFragment();

    console.log(files);


    // 이미지 6개 이상 들어오면 돌려보내주기
    if ([...files].length > 7) {
        alert('이미지는 6개까지만 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach((file, i) => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return;
        }

        // 파일 갯수 검사 이미지 1개 들어온게 맞다면 요소 추가
        if ([...files].length >= 1) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const preview = createElement(e, file);
                // BoardPicture2.innerHTML = "";
                slidePrevButton.before(preview);
                
                if([...files].length -1== i){
                    slide2Fn();
                }
            };
            BoardBackground2.style.display = "flex";
            BoardBackground2.classList.remove('BoardBackground-close');
            // hashtagInput.focus();
            NewWriteTextArea.focus();
        }
        
    });
    
}

function createElement(e, file) {
    const div = document.createElement('div');
    div.classList.add("slide_item2");
    const img = document.createElement('img');
    img.classList.add("slide-img");
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    div.appendChild(img);

    return div;
}

upload.addEventListener('change', getImageFiles);


/* 게시글 작성 화면 이전 버튼 */
const BackIcon = document.querySelector("#BackIcon");

BackIcon.addEventListener("click", () => {
    NewBoardBackground.style.display = "flex";
    BoardBackground2.style.display = "none";
    upload.value = "";
    pagination2.innerHTML = '';
    const slide_item2 = document.querySelectorAll('.BoardPicture2 .slide_item2');
    for(let i=0;i<slide_item2.length;i++){
        slide_item2[i].remove();
    }
})
/* 새 게시글 작성 내용 글자수 카운트 */

const NewWriteTextAreaCount = document.querySelector(".NewWriteTextAreaCount");

NewWriteTextArea.addEventListener("input", () => {
    const count = NewWriteTextArea.innerText.length;

    NewWriteTextAreaCount.innerHTML = count;
})
// -----------------------------------------------------------------------------------------

let slideWidth2;
let slideItems2;
let currSlide2;
let prevBtn2;
let nextBtn2; 
let maxSlide2;
let paginationItems2;
let pagination2;
const slide2 = document.querySelector(".slide2");

function slide2Fn(){

    // 게시글 업로드 슬라이드
    // 슬라이크 전체 크기(width 구하기)
    slideWidth2 = slide2.clientWidth;

    // 버튼 엘리먼트 선택하기
    prevBtn2 = document.querySelector(".slide_prev_button2");
    nextBtn2 = document.querySelector(".slide_next_button2");

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    slideItems2 = document.querySelectorAll(".slide_item2");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    maxSlide2  = slideItems2.length;

    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    currSlide2 = 1;

    // 페이지네이션 생성
    pagination2 = document.querySelector(".slide_pagination2");

    for (let i = 0; i < maxSlide2; i++) {
        if (i === 0) pagination2.innerHTML += `<li class="active">•</li>`;
        else pagination2.innerHTML += `<li>•</li>`;
    }

    paginationItems2 = document.querySelectorAll(".slide_pagination2 > li");

    // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
    const startSlide2 = slideItems2[0];
    const endSlide2 = slideItems2[slideItems2.length - 1];
    const startElem2 = document.createElement("div");
    const endElem2 = document.createElement("div");

    endSlide2.classList.forEach((c) => endElem2.classList.add(c));
    endElem2.innerHTML = endSlide2.innerHTML;

    startSlide2.classList.forEach((c) => startElem2.classList.add(c));
    startElem2.innerHTML = startSlide2.innerHTML;

    // 각 복제한 엘리먼트 추가하기
    slideItems2[0].before(endElem2);
    slideItems2[slideItems2.length - 1].after(startElem2);

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    slideItems2 = document.querySelectorAll(".slide_item2");
    //
    let offset2 = slideWidth2 + currSlide2;
    slideItems2.forEach((i) => {
        i.setAttribute("style", `left: ${-offset2}px`);
    });

    nextBtn2.removeEventListener("click", ()=>{});
    prevBtn2.removeEventListener("click", ()=>{});

    if(nextBtn2!=null){
        // 버튼 엘리먼트에 클릭 이벤트 추가하기
        nextBtn2.addEventListener("click", () => {
            // 이후 버튼 누를 경우 현재 슬라이드를 변경
            nextMove2();
        });
    }
    
    if(prevBtn2!=null){        
        // 버튼 엘리먼트에 클릭 이벤트 추가하기
        prevBtn2.addEventListener("click", () => {
            // 이전 버튼 누를 경우 현재 슬라이드를 변경
            prevMove2();
        });
    }

    // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
    for (let i = 0; i < maxSlide2; i++) {
        // 각 페이지네이션마다 클릭 이벤트 추가하기
        paginationItems2[i].addEventListener("click", () => {
            // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
            currSlide2 = i + 1;
            // 슬라이드를 이동시키기 위한 offset 계산
            const offset2 = slideWidth2 * currSlide2;
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems2.forEach((i) => {
                i.setAttribute("style", `left: ${-offset2}px`);
            });
            // 슬라이드 이동 시 현재 활성화된 pagination 변경
            paginationItems2.forEach((i) => i.classList.remove("active"));
            paginationItems2[currSlide2 - 1].classList.add("active");
        });
    }
}


function nextMove2() {
    currSlide2++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide2 <= maxSlide2) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset2 = slideWidth2 * currSlide2;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems2.forEach((i) => {
            i.setAttribute("style", `left: ${-offset2}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems2.forEach((i) => i.classList.remove("active"));
        paginationItems2[currSlide2 - 1].classList.add("active");
    } else {
        // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
        currSlide2 = 0;
        let offset2 = slideWidth2 * currSlide2;
        slideItems2.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset2}px`);
        });
        currSlide2++;
        offset2 = slideWidth2 * currSlide2;
        // 각 슬라이드 아이템의 left에 offset 적용
        setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems2.forEach((i) => {
                // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset2}px`);
            });
        }, 0);
        // // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems2.forEach((i) => i.classList.remove("active"));
        paginationItems2[currSlide2 - 1].classList.add("active");
    }
}
function prevMove2() {
    currSlide2--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide2 > 0) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset2 = slideWidth2 * currSlide2;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems2.forEach((i) => {
            i.setAttribute("style", `left: ${-offset2}px`);
        });
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems2.forEach((i) => i.classList.remove("active"));
        paginationItems2[currSlide2 - 1].classList.add("active");
    } else {
        // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
        currSlide2 = maxSlide2 + 1;
        let offset2 = slideWidth2 * currSlide2;
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems2.forEach((i) => {
            i.setAttribute("style", `transition: ${0}s; left: ${-offset2}px`);
        });
        currSlide2--;
        offset2 = slideWidth2 * currSlide2;
        setTimeout(() => {
            // 각 슬라이드 아이템의 left에 offset 적용
            slideItems2.forEach((i) => {
                // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
                i.setAttribute("style", `transition: ${0.15}s; left: ${-offset2}px`);
            });
        }, 0);
        // 슬라이드 이동 시 현재 활성화된 pagination 변경
        paginationItems2.forEach((i) => i.classList.remove("active"));
        paginationItems2[currSlide2 - 1].classList.add("active");
    }
}

if(nextBtn2!=null){
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    nextBtn2.addEventListener("click", () => {
        // 이후 버튼 누를 경우 현재 슬라이드를 변경
        nextMove2();
    });
}

if(prevBtn2!=null){        
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    prevBtn2.addEventListener("click", () => {
        // 이전 버튼 누를 경우 현재 슬라이드를 변경
        prevMove2();
    });
}

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
    if(slideWidth2!=null){
        slideWidth2 = slide2.clientWidth;
    }
});



// // 드래그(스와이프) 이벤트를 위한 변수 초기화
// let startPoint2 = 0;
// let endPoint2 = 0;

// // PC 클릭 이벤트 (드래그)
// slide2.addEventListener("mousedown", (e) => {
//     startPoint2 = e.pageX; // 마우스 드래그 시작 위치 저장
// });

// slide2.addEventListener("mouseup", (e) => {
//     endPoint2 = e.pageX; // 마우스 드래그 끝 위치 저장
//     if (startPoint2 < endPoint2) {
//         // 마우스가 오른쪽으로 드래그 된 경우
//         prevMove2();
//     } else if (startPoint2 > endPoint2) {
//         // 마우스가 왼쪽으로 드래그 된 경우
//         nextMove2();
//     }
// });

// // 모바일 터치 이벤트 (스와이프)
// slide2.addEventListener("touchstart", (e) => {
//     startPoint2 = e.touches[0].pageX; // 터치가 시작되는 위치 저장
// });
// slide2.addEventListener("touchend", (e) => {
//     endPoint2 = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
//     if (startPoint2 < endPoint2) {
//         // 오른쪽으로 스와이프 된 경우
//         prevMove2();
//     } else if (startPoint2 > endPoint2) {
//         // 왼쪽으로 스와이프 된 경우
//         nextMove2();
//     }
// });

// // 기본적으로 슬라이드 루프 시작하기
// let loopInterval2 = setInterval(() => {
//     nextMove2();
// }, 3000);

// // 슬라이드에 마우스가 올라간 경우 루프 멈추기
// slide2.addEventListener("mouseover", () => {
//     clearInterval(loopInterval2);
// });

// // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
// slide2.addEventListener("mouseout", () => {
//     loopInterval2 = setInterval(() => {
//         nextMove2();
//     }, 3000);
// });

// const uploadBtn = document.querySelector("#uploadBtn");

// uploadBtn.addEventListener("click", ()=>{
//     uploadBoard();
// });

// function uploadBoard() {
//     let form = document.getElementById("uploadForm");
//     let formData = new FormData(form);
  
//     let hashtagList = document.getElementsByClassName("hashtag-value");
//     for (let i = 0; i < hashtagList.length; i++) {
//       formData.append(`hashtagList[${i}]`, hashtagList[i].innerText);
//     }
  
//     fetch("/board2/boardInsert", {
//       method: "POST",
//       headers : {"Content-Type" : false, "processData" : false},
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((resp) => {
//         console.log(resp);
//         location.href = `http://localhost:8080/user/${resp.data}`;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

function addHashtag() {
    let hashtag = document.getElementById("hashtag").value;
    let item = getHashtagItem(hashtag);

    document.getElementById("hashtagList").insertAdjacentHTML("beforeend", item);
}

function removeHashtag(hashtag) {
    document.getElementById(hashtag).remove();
}

function getHashtagItem(hashtag) {

    hashtag = hashtag.replaceAll(' ', '');
    let item = `
        <div class="hashtag" id="${hashtag}">
            <span class="hashtag-value">#${hashtag}</span>
            <button type="button" onclick="removeHashtag('${hashtag}')">×</button>
        </div>
    `;

    return item;
}
