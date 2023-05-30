
// 개인 홈 프로필 js
// 홈프로필 배경 변경
let secondComment;

const preview = document.getElementsByClassName("preview");  // img 태그
const background = document.getElementById("background");  // 배경화면 file input태그
const selectBackground = document.getElementById("selectBackground");  // 배경화면 선택 버튼
const afterChoice = document.getElementById("afterChoice");  // 돌아가기, 변경하기
const deleteBackground = document.getElementById("deleteBackground"); // 돌아가기
const updateBackground = document.getElementById("updateBackground"); // 변경하기
const bgimageBox = document.querySelector(".bgimageBox");  // 기존의 배경화면
let beforeBack;  // 배경화면을 복사해두기 위한 변수
// 프로필 배경화면 변경
if(background != null){  // 배경화면 파일 input 태그가 있으면
    background.addEventListener("change", e=>{  // 파일 change 이벤트가 있으면
        beforeBack = bgimageBox.innerHTML;  // 기존의 배경화면을 복사해둠
        const file = e.target.files[0];  // 선택한 첫번째 파일
        if(file != undefined){  // 파일이 있다면
            const reader = new FileReader();  // 사용자의 파일을 읽기위한 개체
            reader.readAsDataURL(file);  // 파일을 문자열로 변환
            reader.onload = e => {  // img 태그에 배경화면 이미지를 넣음
                preview[0].setAttribute("src", e.target.result);
            }
            selectBackground.style.display = 'none';  // 배경화면 선택 버튼 안보이게 처리
            afterChoice.style.display = 'block';  // 돌아가기, 변경하기 버튼 보이게 처리
        } else {  // 파일이 없다면(이미지 파일이 아니라면)
            preview[0].removeAttribute("src");  // 배경화면 없앰
            selectBackground.style.display = 'block';  // 배경화면 선택 버튼 보이게 처리
            afterChoice.style.display = 'none';  // 돌아가기, 변경하기 버튼 안보이게 처리
        }
    
    });
    
    // 돌아가기 버튼 클릭 시
    deleteBackground.addEventListener('click', ()=>{
        if(preview[0].getAttribute("src") != ""){  // img태그의 src 속성 값이 있으면
            preview[0].removeAttribute("src");  // src 속성 제거
            background.value = "";  // 파일 제거
            selectBackground.style.display = 'block';  // 배경화면 선택 보이게 처리
            afterChoice.style.display = 'none';  // 변경하기, 돌아가기 안보이게 처리
            bgimageBox.innerHTML = beforeBack;  // 기존 화면으로 돌려놓기
        }
    });

    // 변경하기 버튼 클릭 시
    updateBackground.addEventListener("click", () => {
        if(background.value == ''){  // 이미지 파일이 없으면
            alert("배경화면을 지정해주세요");
            e.preventDefault();  // 클릭 제출 막기
            return;
        }
        location.href = "/mypage/background";  // GET방식 요청
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

if(messageBox!=null){
    messageBox.addEventListener("click", () => {
        messageBoXrecive.style.display = "flex";
    })
    
    messageBoxClose.addEventListener("click", () => {
        messageBoXrecive.style.display = "none";
    })
}


let BoardIconReport = document.querySelector(".BoardIconReport").parentElement;  // 게시글의 신고 버튼
const BoardIconReportMod = document.querySelector(".BoardIconReportMod #grayBackground");  // 신고 모달창
const ReportModX = document.querySelector(".BoardIconReportMod #oneToOne>div>svg:nth-child(2)");  // 신고창 X버튼

BoardIconReport.addEventListener("click", (e) => {  // 신고 버튼을 누르면
    const reportNo= e.currentTarget.parentElement.parentElement.children[0].children[1];  // 게시글 구역
    const reportBoardNo= reportNo.getAttribute("currentBoardNo");  // 게시글 번호
    const boardNo = document.querySelector(".boardNo");  // hidden input 게시글 번호
    boardNo.setAttribute("value",reportBoardNo);  // hidden input 태그에 게시글 번호 값 대입
    BoardIconReportMod.style.display = "flex";  // 신고 모달창 보이게
    ReportModX.addEventListener("click",()=>{  // 신고 X버튼 클릭 시
        BoardIconReportMod.style.display = "none";  // 신고 모달창 사라지게
    })
})



const Boardcontent = document.querySelector(".Boardcontent");  // 게시글 내용 + 좋아요 수
const Boardcontent1 = document.querySelector(".Boardcontent1");  // 게시글 내용 + 좋아요 수
const BoardHeartBox = document.querySelector(".BoardHeartBox");  // 좋아요 하트 + 좋아요 수
const BoardCommentBox = document.querySelector(".BoardCommentBox");  // 댓글 Div
const BoardComment = document.querySelector(".BoardComment");  // 댓글 작성 Div
const BoardPost1 = document.querySelector(".BoardPost1")  // 게시글 프로필 Div
const newContent = document.querySelector(".newContent");  // 새 게시글 버튼


/* 게시글 닫기 버튼으로 닫기 */
const BoardClose = document.querySelector(".BoardClose");  // 게시글 X 버튼

const BoardBackground = document.querySelector(".BoardBackground");  // 게시글 모달
BoardClose.addEventListener("click", () => {  // 게시글 X 버튼 클릭했을 때
    BoardBackground.style.display = "none";  // 게시글 모달 안보이게 처리
});

/* 게시글 클릭했을 때 게시글 열기 */
const contentBox = document.querySelectorAll(".contentBox>div>a");  // 게시글 썸네일
for(let i=0;i<contentBox.length;i++){
    contentBox[i].addEventListener("click", () => {  // 썸네일 클릭 시
        BoardBackground.style.display = "flex";  // 게시글 모달 보이게
        BoardBackground.classList.remove('BoardBackground-close');  // 안보이게
    });
}

//*** */ 게시글 슬라이드****

const slide = document.querySelector(".slide");
// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");
const boardDeleteBtn = document.querySelector(".boardDeleteBtn");

let slideWidth; // 슬라이크 전체 크기(width 구하기)
let currSlide; // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수

let startSlide;
let endSlide;
let maxSlide; // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수

let paginationItems;
let FirstPagination;
let parentComment;
// let boardCont;

let commentParentNo;

const checkSlideDiv = document.getElementsByClassName("slide_item");
let slideItems; // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const BoardHeart = document.querySelector(".BoardHeart");
const BoardRedHeart = document.querySelector(".BoardRedHeart");
const markOn = document.querySelector(".markOn");
const markOff = document.querySelector(".markOff");
let arr = [];
let boardNumber;
let boardMember;

function selectBoardList(boardNo){  // 게시글 선택 함수

    fetch("/boardDetail?boardNo="+boardNo)  // GET 방식 요청 파라미터 boardNo AJAX
    .then(response => response.json())  // 결과를 Json 객체로 변환
    .then(board => {

        boardNumber = board.boardNo;  // 게시글의 boardNo 를 변수에 담음
        boardMember = board.memberNo;  // 게시글의 memberNo 를 변수에 담음
        tempBoardNo = board.boardNo;  // 게시글의 boardNo 를 변수에 담음

        const BoardContainerright = document.querySelector(".BoardContainerright");  // 게시글 오른쪽 영역
        BoardContainerright.setAttribute("currentBoardNo",board.boardNo);  // 게시글을 식별할 번호
        document.querySelectorAll('.slide_item').forEach(function(slideItem) {
            slideItem.remove();
        });

        let flagHeart = 0;  // 좋아요를 구별할 변수

        for(let i of board.likeList){  // 좋아요 리스트에 로그인한 회원의 번호가 있으면 변수++
            if(loginMemberNo == i.memberNo){
                flagHeart++;
                break;
            }
        }
        BoardRedHeart.style.display = "none";  // 빨간 하트 안보이게(초기화)
        BoardHeart.style.display = "none";  // 빈 하트 안보이게(초기화)
        if(flagHeart>0){  // 좋아요를 했으면
            BoardRedHeart.style.display = "block";  // 빨간 하트 보이게
        } else {  // 안 했으면
            BoardHeart.style.display = "block";  // 빈 하트 보이게
        }

        let flagBookmark = 0;  // 북마크를 구별할 변수
        for(let i of board.bookmarkList){  // 북마크 리스트에 로그인한 회원의 번호가 있으면 변수++
            if(loginMemberNo == i.memberNo){
                flagBookmark++;
                break;
            }
        }
        markOn.style.display = "none";  // 파란 북마크 안보이게 초기화
        markOff.style.display = "none";  // 흰 북마크 안보이게 초기화
        if(flagBookmark>0){  // 북마크를 했으면
            markOn.style.display = "block";  // 파란 북마크 보이게
        } else {  // 안 했으면
            markOff.style.display = "block";  // 흰 북마크 보이게
        }

        // 게시글 편집 버튼 나타나게 하기
        const editing = document.querySelectorAll(".editing");

        for(let i=0;i<editing.length;i++){  // 편집, 삭제 버튼 감추기
            editing[i].style.display = 'none';
        }

        if(loginMemberNo == boardMember){  // 로그인회원과 게시글회원이 같으면 보여주기
            for(let i=0;i<editing.length;i++){
                editing[i].style.display = 'block';
            }
        }


        const porfileRac = document.querySelector(".porfileRac");  // 게시글 오른쪽 프로필 이미지
        const boardMemberInfo = document.querySelector(".boardMemberInfo");  // 게시글 오른쪽 닉네임, 한줄 소개
        const BoardPost = document.querySelector(".BoardPost");  // 게시글 내용
        const likeCountSpan = document.querySelector(".likeCount");  // 좋아요 수
        likeCountSpan.innerHTML = '';  // 좋아요 수 초기화
        porfileRac.innerHTML = '';  // 게시글 프로필 초기화
        boardMemberInfo.innerHTML = '';  // 게시글 닉네임, 한줄 소개 초기화
        BoardPost.innerHTML = '';  // 게시글 내용 초기화
        Boardcontent1.innerHTML = '';  // 게시글 내용+좋아요 수 초기화
        
        for(let i=0; i<board.imageList.length;i++){  // 게시글 이미지리스트를 하나씩
            const slideDiv = document.createElement("div");  // div 생성
            slideDiv.classList.add("slide_item");  // div 에 클래스 추가
            
            const img = document.createElement("img");  // img 태그 추가
            img.src = board.imageList[i].imgAddress;  // scr 속성 으로 imgAddress
            img.classList.add("slide-img");  // 클래스 추가
            slideDiv.append(img);  // 슬라이드에 추가
            
            prevBtn.before(slideDiv);  // 이전버튼 요소 전에 추가
        }

        

        for(let i=0; i<board.commentList.length;i++){  // 댓글 리스트 하나씩
            if(board.commentList[i].parentNo == 0){  // 부모 댓글이 없으면

                arr.push(board.commentList[i].commentNo);  // 배열에 댓글번호 하나씩 담기
                const postContentDiv = document.createElement("div");  // 댓글 구역 만들어서 추가
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
                div.classList.add("parentNo"+board.commentList[i].commentNo);


                const innerDiv = document.createElement("div");
                innerDiv.classList.add("innerDiv");

                const nameA = document.createElement("a");
                nameA.href = "/mypage/"+board.commentList[i].memberNo;
                nameA.innerText = board.commentList[i].memberNickname;


                let beforeCommentContent = board.commentList[i].commentContent;  // 댓글 내용 XSS 돌려놓기
                beforeCommentContent =  beforeCommentContent.replaceAll("&amp;", "&");
                beforeCommentContent =  beforeCommentContent.replaceAll("&lt;", "<");
                beforeCommentContent =  beforeCommentContent.replaceAll("&gt;", ">");
                beforeCommentContent =  beforeCommentContent.replaceAll("&quot;", "\"");

                const contentP = document.createElement("p");
                contentP.innerText = beforeCommentContent;

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
                    secondDiv.classList.add("commentNo"+board.commentList[i].commentNo);
                    secondDiv.innerText = "—— 답글 보기(" + board.commentList[i].childCheck + ")";
                    div.append(secondDiv);
                }
                
                for(let j=0; j<board.commentList.length;j++){
                    if(board.commentList[i].commentNo == board.commentList[j].parentNo){  // 자식 댓글들 부모 댓글 아래로 구역 만들어서 추가
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

                        let beforeContent = board.commentList[j].commentContent;
                        beforeContent =  beforeContent.replaceAll("&amp;", "&");
                        beforeContent =  beforeContent.replaceAll("&lt;", "<");
                        beforeContent =  beforeContent.replaceAll("&gt;", ">");
                        beforeContent =  beforeContent.replaceAll("&quot;", "\"");

                        contentP1.innerHTML = beforeContent;

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
                        if(board.commentList[j].memberNo == loginMemberNo){  // 로그인한 회원이 쓴 자식 댓글이면 x버튼 추가

                            let item = 
                                `<div class="deleteComment">
                                    <button type="button" onclick="removeChildComment(event, ${board.commentList[j].commentNo})">×</button>
                                </div>`;
                            lastDiv1.insertAdjacentHTML("beforeend", item);
        
                        }
                        postContentDiv1.append(lastDiv1);
                        div.append(postContentDiv1);
                    }
                }
                const lastDiv = document.createElement("div");
                lastDiv.classList.add("lastDivadd")
                lastDiv.append(boardPostDiv, div);
                if(board.commentList[i].memberNo == loginMemberNo){  // 로그인 회원이 쓴 부모 댓글이면 X버튼 추가
                    let item = 
                        `<div class="deleteComment">
                            <button type="button" onclick="removeComment(event, ${board.commentList[i].commentNo})">×</button>
                        </div>`;
                    lastDiv.insertAdjacentHTML("beforeend", item);
                }
                postContentDiv.append(lastDiv);
                Boardcontent1.append(postContentDiv);
            }
        }  // 댓글 창 구현 끝


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

        
        const hashDiv = document.createElement("div");
        hashDiv.classList.add("hashPost");
        // 게시글 해시태그 구역에 해시태그 추가
        if(board.hashtagList != null){
            for(let i=0;i<board.hashtagList.length;i++){
                const hashSpan = document.createElement("span");
                hashSpan.innerHTML = `<a href="#" class="hashs">#${board.hashtagList[i].hashtagName}</a>`;
                hashDiv.append(hashSpan);
            }
        }

        const div = document.createElement("div");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");

        const nameA = document.createElement("a");
        nameA.href = "/mypage/"+board.memberNo;
        nameA.innerText = board.memberNickname;
        const contentP = document.createElement("p");

        if(board.boardContent != null){  // 게시글 내용 XSS 처리 다시 보여주기
            
            let beforeMainContent = board.boardContent;
            beforeMainContent =  beforeMainContent.replaceAll("&amp;", "&");
            beforeMainContent =  beforeMainContent.replaceAll("&lt;", "<");
            beforeMainContent =  beforeMainContent.replaceAll("&gt;", ">");
            beforeMainContent =  beforeMainContent.replaceAll("&quot;", "\"");
            contentP.innerText = beforeMainContent;
        }

        // 게시글, 수정, 취소 버튼
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



        innerDiv.append(nameA, contentP, input, hashDiv, editingDiv);
        div.append(innerDiv, dateDiv);
        const lastDiv = document.createElement("div");
        lastDiv.classList.add("lastDivadd")
        lastDiv.append(boardPostDiv, div);
        postContentDiv.append(lastDiv);
        
        BoardPost.append(postContentDiv);

        likeCountSpan.innerText = board.likeCount+"명이 좋아합니다";


        // 게시글 수정 (내용 / 태그)
        const boardEditing = document.querySelectorAll(".boardEditing>*");
        const hiddenEditing = document.querySelector(".hiddenEditing");
        const editingSubmit = document.querySelector(".editingSubmit");
        const editingCancel = document.querySelector(".editingCancel");
        const hashPost = document.querySelectorAll(".hashs");
        // 게시글 편집 버튼 클릭 시
        for(let i=0;i<boardEditing.length;i++){
            boardEditing[i].addEventListener("click", ()=>{
                BoardPost.querySelector(".innerDiv>p").style.display = 'none';
                hiddenEditing.style.display = 'block';
                editingSubmit.style.display = 'inline';
                editingCancel.style.display = 'inline';
                hiddenEditing.focus();
                const whitecontent = BoardPost.querySelector(".innerDiv>p").innerHTML;
                
                if(hashPost.length != 0){
                    if(hashPost[0].nextElementSibling == null){
                        for(let j=0;j<hashPost.length;j++){
                            let item = 
                                `<button type="button" onclick="removeHash(event, ${board.boardNo})">×</button>`;
                            hashPost[j].parentNode.insertAdjacentHTML("beforeend", item);
                        }
                    }
                }

                const textWithLineBreaks = whitecontent.replace(/<br[^>]*>/gi, "\n");
                hiddenEditing.value = textWithLineBreaks;
            });
        }

        // 편집 취소
        editingCancel.addEventListener("click", ()=>{
            BoardPost.querySelector(".innerDiv>p").style.display = 'block';
            hiddenEditing.style.display = 'none';
            editingSubmit.style.display = 'none';
            editingCancel.style.display = 'none';

            for(let i=0;i<document.querySelector(".hashPost").children.length;i++){
                document.querySelector(".hashPost").children[i].querySelector("button").remove();
            }
        });

        // 게시물 수정 버튼
        editingSubmit.addEventListener("click", ()=>{

            if(board.boardContent == hiddenEditing.value){
                BoardPost.querySelector(".innerDiv>p").style.display = 'block';
                hiddenEditing.style.display = 'none';
                editingSubmit.style.display = 'none';
                editingCancel.style.display = 'none';
                for(let i=0;i<document.querySelector(".hashPost").children.length;i++){
                    document.querySelector(".hashPost").children[i].querySelector("button").remove();
                }
                return;
            }

            if(confirm("수정하시겠습니까?")){

                const data = {"boardNo" : board.boardNo, "boardContent" : hiddenEditing.value};

                fetch("/board/editing", {
                    method : "POST",
                    headers : {"Content-Type" : "application/json"},
                    body : JSON.stringify(data)}
                )
                .then(resp => resp.json())
                .then(board=>{

                    if(board == null){
                        alert("게시글 업로드에 실패하였습니다")
                        return;
                    }
                    BoardPost.querySelector(".innerDiv>p").style.display = 'block';
                    hiddenEditing.style.display = 'none';
                    editingSubmit.style.display = 'none';
                    editingCancel.style.display = 'none';
                    if(board.boardContent != null){
                        
                        board.boardContent =  board.boardContent.replaceAll("&amp;", "&");
                        board.boardContent =  board.boardContent.replaceAll("&lt;", "<");
                        board.boardContent =  board.boardContent.replaceAll("&gt;", ">");
                        board.boardContent =  board.boardContent.replaceAll("&quot;", "\"");
    
                        BoardPost.querySelector(".innerDiv>p").innerHTML = board.boardContent;
                        for(let i=0;i<document.querySelector(".hashPost").children.length;i++){
                            document.querySelector(".hashPost").children[i].querySelector("button").remove();
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })

            }
        });
        // 게시글 삭제
        if(boardDeleteBtn!=null){
            boardDeleteBtn.addEventListener("click", e=>{
                if(confirm("정말 삭제하시겠습니까?")){
                    location.href = "/board2/delete/"+boardNo+"?memberNo="+boardMember;
                } else{
                    e.target.querySelector("a").preventDefault();
                }
            })
        }
        
        slideInitFn();
        
    })
    .catch(err => console.log(err));
}




// 해시 삭제 함수
function removeHash(event, boardNo){
    if(confirm('완전 삭제하시겠습니까?')){
        let tagName = event.target.previousElementSibling.innerText.slice(1);
        const data = {"boardNo" : boardNo, "hashtagName" : tagName};

        fetch("/board/deleteHash", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })
        .then(resp=>resp.text())
        .then(result=>{
            if(result>0){
                event.target.parentNode.innerHTML = '';
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
}



// 댓글 삭제 함수
function removeComment(event, commentNo) {

    fetch("/board/deleteComment", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(commentNo)
    })
    .then(resp=>resp.text())
    .then(result=>{
        if(result>0){
            event.target.parentNode.parentNode.parentNode.innerHTML = '';
        }
    })
    .catch(err=>{
        console.log(err);
    })
}

// 댓댓글 삭제 함수
function removeChildComment(event, commentNo) {

    fetch("/board/deleteChildComment", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(commentNo)
    })
    .then(resp=>resp.text())
    .then(result=>{
        if(result>0){
            // selectBoardList(boardNumber)
            let a = event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".secondComment").innerText;  // 버튼의 부모의 부모의 부모의 부모의 답글 보기
            if(Number(a.match(/\d+/)[0]) == 1){
                event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".secondComment").remove();

            } else {

                event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".secondComment").innerText = "—— 답글 보기(" + (Number(a.match(/\d+/)[0]) -1) + ")";
            }


            event.target.parentNode.parentNode.parentNode.remove();
            
        }
    })
    .catch(err=>{
        console.log(err);
    })
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
    if(commentContentArea.value == ""){
        alert("댓글을 입력해주세요");
        return;
    }
    let data;
    if(commentContentArea.value[0] == "@"){
        const parentNickname = commentContentArea.value.split(" ")[0].substring(1);
        const commentContent = commentContentArea.value.split(" ").slice(1).join(' ');
        const parentNo2 = document.querySelector(".co")
        data = {"commentContent" : commentContent, "memberNo" : loginMemberNo, "boardNo" : boardNumber, "parentNo" : commentParentNo};
    } else{
        data = {"commentContent" : commentContentArea.value, "memberNo" : loginMemberNo, "boardNo" : boardNumber, "parentNo" : 0};
    }
    
    commentContentArea.value ='';
    commentContentArea.focus();

    fetch("/board/comment", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(comment => {
        if(comment.commentNo > 0){
            sendComment(comment.boardNo);
            if(comment.parentNo == 0){
                arr.push(comment.commentNo);
                const postContentDiv = document.createElement("div");  // 댓글 감싸는 div
                postContentDiv.classList.add("postcontent1");
                const lastDiv = document.createElement("div");      // 한번더 댓글 감싸는 div
                lastDiv.classList.add("lastDivadd");


                // --------------------------- 부모댓글 프로필 이미지 담기 -----------------------------
                const boardPostDiv = document.createElement("div");  // 프로필 사진 div
                boardPostDiv.classList.add("BoardPost1");
                const boardProfileA = document.createElement("a");  // 프로필 사진 a태그
                boardProfileA.href = "/mypage/"+comment.memberNo;
                boardProfileA.classList.add("Boardprofile1");       
                const profileImg = document.createElement("img");   // 프로필 이미지 img태그
                profileImg.src = comment.profileImg;
                boardProfileA.append(profileImg);                   
                boardPostDiv.append(boardProfileA);                 // div에 담기
                // -------------------------------------------------------------------------------------



                // ---------------------------- 부모댓글 구성들 담기 -----------------------------------
                const div = document.createElement("div");          // 댓글 글부분 div
                div.classList.add("commentbox");
                div.classList.add("parentNo"+comment.commentNo);
                const innerDiv = document.createElement("div");     // 댓글 닉네임과 내용 div
                innerDiv.classList.add("innerDiv");
                const nameA = document.createElement("a");          // 닉네임 클릭시 프로필 이동 a태그
                nameA.href = "/mypage/"+ comment.memberNo;
                nameA.innerText = comment.memberNickname;
                const contentP = document.createElement("p");       // 댓글 내용 p태그
                contentP.innerText = comment.commentContent;
                const dateDiv = document.createElement("div");      // 날짜, 답글 달기 div
                dateDiv.classList.add("dateDiv");
                const cDateP = document.createElement("p");         // 날짜 p태그
                cDateP.innerText = comment.commentDate;
                const replSpan = document.createElement("span");    // 답글 span 태그
                replSpan.innerText = "답글 달기";
                replSpan.classList.add("replyCommentInsert");
                dateDiv.append(cDateP, replSpan);                   // 날짜, 답글 div에 담기
                innerDiv.append(nameA, contentP);                   // 닉네임, 내용 div에 담기
                div.append(innerDiv, dateDiv);                      // 날짜, 답글, 닉네임, 내용
                // -----------------------------------------------------------------------------------

                
                
                // ---------------------------- 버튼 생성 후 담기 ------------------------------
                let item =   // 버튼 생성
                `<div class="deleteComment">
                <button type="button" onclick="removeComment(event, ${comment.commentNo})">×</button>
                </div>`;
                lastDiv.append(boardPostDiv, div);                  // 프로필, 구성들 담기
                lastDiv.insertAdjacentHTML("beforeend", item);      // 버튼 담기
                postContentDiv.append(lastDiv);
                Boardcontent1.append(postContentDiv);  // 댓글창에 넣기
                // ----------------------------------------------------------------------------


                const replyCommentInsert = document.querySelectorAll(".replyCommentInsert");
                for(let i=0;i<replyCommentInsert.length;i++){
                    replyCommentInsert[i].addEventListener("click", e=>{
                        let nickName = e.target.parentNode.previousElementSibling.children[0].innerText;
                        commentContentArea.focus();
                        commentContentArea.value = "@" + nickName+" ";
                        commentParentNo = arr[i];
                    })
                }

            } else {

                const postContentDiv1 = document.createElement("div");  // 댓댓글을 감싸는 div (display : block)
                postContentDiv1.classList.add("postcontent2");
                const lastDiv1 = document.createElement("div");         // 한번더 댓댓글을 감싸는 div
                lastDiv1.classList.add("lastDivadd1")

                // --------------------------- 댓댓글 프로필 이미지 담기 -----------------------------
                const boardPostDiv1 = document.createElement("div");    // 댓댓글 프로필 부분 div
                boardPostDiv1.classList.add("BoardPost2");

                const boardProfileA1 = document.createElement("a");     // 프로필 이미지 a태그
                boardProfileA1.href = "/mypage/"+comment.memberNo;      // 프로필페이지 연결
                boardProfileA1.classList.add("Boardprofile2");          
                const profileImg1 = document.createElement("img");      // 프로필 이미지 부분
                profileImg1.src = comment.profileImg;
                boardProfileA1.append(profileImg1);
                boardPostDiv1.append(boardProfileA1);                   // div에 담기
                // -----------------------------------------------------------------------------------



                // ----------------------------- 자식댓글 구성들 담기 --------------------------------
                const div1 = document.createElement("div");             // 댓댓글 글부분
                const innerDiv1 = document.createElement("div");        // 닉네임, 내용 부분
                innerDiv1.classList.add("innerDiv");
                const nameA1 = document.createElement("a");             // 닉네임 프로필페이지 연결
                nameA1.href = "/mypage/"+comment.memberNo;
                nameA1.innerText = comment.memberNickname;
                const contentP1 = document.createElement("p");          // 댓댓글 내용 p태그
                contentP1.innerText = comment.commentContent;
                const dateDiv1 = document.createElement("div");         // 날짜 div
                dateDiv1.classList.add("dateDiv");
                const cDateP1 = document.createElement("p");            // 날짜
                cDateP1.innerText = comment.commentDate;
                dateDiv1.append(cDateP1);                               // 날짜 div에 날짜 담기
                innerDiv1.append(nameA1, contentP1);                    // 닉네임, 내용 담기
                div1.append(innerDiv1, dateDiv1);                       // 닉네임, 내용, 날짜 담기
                // -----------------------------------------------------------------------------------
                

                // ------------------------------ 버튼 생성 후 담기 -----------------------------------
                let item = 
                `<div class="deleteComment">
                <button type="button" onclick="removeChildComment(event, ${comment.commentNo})">×</button>
                </div>`;
                lastDiv1.append(boardPostDiv1, div1);                   // 프로필, 구성들 담기
                lastDiv1.insertAdjacentHTML("beforeend", item);         // 버튼 담기
                postContentDiv1.append(lastDiv1);                       // 댓댓글 감싸는 div에 담기
                // -----------------------------------------------------------------------------------

                const prntCommentNode = document.querySelector(".commentNo"+comment.parentNo);
                const prntParentNo = document.querySelector(".parentNo"+comment.parentNo);
                
                if(prntCommentNode == null){  // 답글 보기가 없으면
                    const secondDiv = document.createElement("div");    // 답글 보기 만들기
                    secondDiv.classList.add("secondComment");
                    secondDiv.classList.add("commentNo"+comment.parentNo);
                    secondDiv.innerText = "—— 답글 보기(1)";
                    prntParentNo.append(secondDiv, postContentDiv1);

                    secondDiv.addEventListener("click", e=>{
                        let siblings = getSiblings(e.target);
                        for(let j=0;j<siblings.length;j++){
                            siblings[j].classList.toggle("postcontent2");
                        }
                    });
                    
                } else{
                    const a = prntCommentNode.innerText;
                    prntCommentNode.innerText = "—— 답글 보기(" + (Number(a.match(/\d+/)[0]) +1) + ")";
                    prntParentNo.append(postContentDiv1);
                    
                }
                const postcontent2s = document.querySelectorAll(".parentNo"+comment.parentNo+" .postcontent2");
                for(let i=0;i<postcontent2s.length;i++){
                    postcontent2s[i].classList.toggle("postcontent2");
                }
                
                // postContentDiv1.classList.toggle("postcontent2");

                
            }
            
        }
    })
    .catch(err => {
        console.log(err);
    })

})
}

// 해시태그 입력하면 리스트 나오는 함수
const hashtagInput = document.getElementById("hashtag");
const hashList1 = document.querySelector(".hashList");
hashtagInput.addEventListener("keyup", e=>{
    hashList1.innerHTML = '';
    const data = e.target.value;
    if(data.length>0 && data[0] != '#'){  // 해시태그를 1자 이상 입력하고 #으로 시작하지 않을 때
        fetch("/board/hashtag?hashtagName="+data)
        .then(resp => resp.json())
        .then(hashList => {
            for(let i=0;i<hashList.length;i++){
                hashList1.innerHTML += `<li onclick="addHashList(this)">#${hashList[i].hashtagName}</li>`  // 기존에 있는 해시태그를 리스트로 보여줌
            }
        })
    }
})    




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


// 좋아요 AJAX
const boardLike = document.querySelectorAll(".boardLike");
const likeCount = document.querySelector(".likeCount");
for(let i=0;i<boardLike.length;i++){
    boardLike[i].addEventListener("click", e=>{
        console.log(boardNumber);
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
        .then(resp => resp.json())
        .then(board => {
            const likeposttab = document.querySelector("#posttab2>div");
            const postlist = document.querySelector(".postlist>li:nth-child(2)>a>span");
            if(board == null){  // INSERT, DELETE 실패 시
                console.log("좋아요 처리 실패");
                return;
            }
            if(check==0){
                BoardRedHeart.style.display = "block";
                BoardHeart.style.display = "none";
                sendLike(boardNumber);
            } else {
                BoardRedHeart.style.display = "none";
                BoardHeart.style.display = "block";
            }
            likeCount.innerText = board.likeCount+"명이 좋아합니다";

            if(window.location.pathname.split("/")[window.location.pathname.split("/").length-1] == loginMemberNo){   // 게시글이 로그인 회원의 게시글이면
                // 좋아요 구역에 게시물 추가
                if(check == 0 && likeposttab.querySelector(`* [src="${board.thumbnail}"]`) == null){

                    if(likeposttab.querySelector("div").innerText == "게시글이 존재하지 않습니다."){
                        likeposttab.querySelector("div").remove();
                    }

                    const div = document.createElement("div");  // 게시글 div태그
                    const a = document.createElement("a");  // 게시글 a태그
                    a.onclick = "selectBoardList("+boardNumber+")";
                    const img = document.createElement("img");  // 게시글 썸네일 img태그
                    img.classList.add("list-thumbnail");
                    img.src = board.thumbnail;
                    
                    
                    postlist.innerText = parseInt(postlist.innerText) + 1;
        
                    a.append(img);
                    a.addEventListener("click", () => {
                        BoardBackground.style.display = "flex";
                        BoardBackground.classList.remove('BoardBackground-close');
                    });
                    div.append(a);
                    likeposttab.append(div);
                } else {
                    if(likeposttab.querySelector(`* [src="${board.thumbnail}"]`) != null){
                        likeposttab.querySelector(`* [src="${board.thumbnail}"]`).parentNode.parentNode.remove();
                        postlist.innerText = parseInt(postlist.innerText) - 1;
                    }
                    if(likeposttab.querySelector("div") == null){
                        likeposttab.innerHTML = "<div>게시글이 존재하지 않습니다.</div>";
                    }
                }
            } 
            boardNumber = board.boardNo;
            tempBoardNo = board.boardNo;
        })
        .catch(err => {
            console.log(err);
        })
    });
}

const boardMark = document.querySelectorAll(".boardMark>*");


// 북마크 AJAX
for(let i=0;i<boardMark.length;i++){
    boardMark[i].addEventListener("click", e=>{
        if(loginMemberNo == ""){
            alert("로그인 후 이용해주세요");
            return;
        }
        let check1;
        console.log(boardNumber);
        
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
        .then(response => response.json())
        .then(board => {

            const bookmarkposttab = document.querySelector("#posttab3>div");
            const postlist = document.querySelector(".postlist>li:nth-child(3)>a>span");
            if(board == null){
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

            if(window.location.pathname.split("/")[window.location.pathname.split("/").length-1] == loginMemberNo){

                // 컬렉션 구역에 게시물 추가
                if(check1 == 0 && bookmarkposttab.querySelector(`* [src="${board.thumbnail}"]`) == null){

                    if(bookmarkposttab.querySelector("div").innerText == "게시글이 존재하지 않습니다."){
                        bookmarkposttab.querySelector("div").remove();
                    }

                    const div = document.createElement("div");  // 게시글 div태그
                    const a = document.createElement("a");  // 게시글 a태그
                    a.onclick = "selectBoardList("+boardNumber+")";
                    const img = document.createElement("img");  // 게시글 썸네일 img태그
                    img.classList.add("list-thumbnail");
                    img.src = board.thumbnail;
                    
                    
                    postlist.innerText = parseInt(postlist.innerText) + 1;
        
                    a.append(img);
                    a.addEventListener("click", () => {
                        BoardBackground.style.display = "flex";
                        BoardBackground.classList.remove('BoardBackground-close');
                    });
                    div.append(a);
                    bookmarkposttab.append(div);
                } else {
                    if(bookmarkposttab.querySelector(`* [src="${board.thumbnail}"]`) != null){
                        bookmarkposttab.querySelector(`* [src="${board.thumbnail}"]`).parentNode.parentNode.remove();
                        postlist.innerText = parseInt(postlist.innerText) - 1;
                    }
                    if(bookmarkposttab.querySelector("div") == null){
                        bookmarkposttab.innerHTML = "<div>게시글이 존재하지 않습니다.</div>";
                    }
                }
            } 

            boardNumber = board.boardNo;

        })
        .catch(err => {
            console.log(err);
        })
    })
}

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
    
    const startSlide = slideItems[0];
    const endSlide = slideItems[slideItems.length - 1];
    
    const startElem = document.createElement("div");
    const endElem = document.createElement("div");
    

    // 엘리먼트에 클래스 적용 동일하게 하기
    endSlide.classList.forEach((c) => endElem.classList.add(c));
    endElem.innerHTML = endSlide.innerHTML;
    startSlide.classList.forEach((c) => startElem.classList.add(c));
    startElem.innerHTML = startSlide.innerHTML;

    // 각 복제한 엘리먼트를 각 위치에 추가하기
    slideItems[0].before(endElem);
    slideItems[slideItems.length - 1].after(startElem);



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



/* 새 게시글 업로드 */

const NewBoardBackground = document.querySelector(".NewBoardBackground"); 
if(newContent != null){
    newContent.addEventListener("click", () => {
        NewBoardBackground.style.display = "flex";

        NewBoardBackground.classList.remove('BoardBackground-close');

    })
    const newContentClose = document.querySelector(".newContentClose");

    newContentClose.addEventListener("click", () => {

        NewBoardBackground.style.display = "none";
    })
}
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
// 슬라이드 요소 생성 추가
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
const NewWriteTextAreaCount = document.querySelector(".NewWriteTextAreaCount");

BackIcon.addEventListener("click", () => {
    NewBoardBackground.style.display = "flex";
    BoardBackground2.style.display = "none";
    upload.value = "";
    NewWriteTextAreaCount.value= "";
    pagination2.innerHTML = '';
    document.querySelector('[name="hashtagLists"]').value = '';
    document.querySelector('.hashtagList').innerText = '';
    const slide_item2 = document.querySelectorAll('.BoardPicture2 .slide_item2');
    for(let i=0;i<slide_item2.length;i++){
        slide_item2[i].remove();
    }
})

/* 새 게시글 작성 내용 글자수 카운트 */
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

// 추가버튼 클릭시 해시태그 추가
function addHashtag() {

    let hashtag = document.getElementById("hashtag").value; // 해시태그 입력 input 태그
    if (/[,#%\s]/.test(hashtag)){                             // ,#% 들어가 있으면 리턴
        document.querySelector("#hashtag").value = '';      // input 태그 값 없앰
        document.querySelector(".hashList").innerHTML = '';      // 리스트 값 없앰
        return;                                             // 함수 종료
    }

    let flag = 0;                                                                               // 플래그 변수
    if(document.querySelector('[name="hashtagLists"]').value.includes(",")){                    // 숨겨둔 해시태그리스트에 ,가 있다면
        const splitHash = document.querySelector('[name="hashtagLists"]').value.split(",");     // ,를 기준으로 나눠서 배열을 만들어라
        for(let i=0;i<splitHash.length;i++){                                                    // 배열 만든거에서 하나씩 비교해서 값이 같으면 flag++
            if(splitHash[i] == hashtag){
                flag++;
            }
        }
    } else {
        if(document.querySelector('[name="hashtagLists"]').value == hashtag){  // 이미 값이 있다면 flag++
            flag++;
        }

    }
    if(flag == 0){  // 리스트에 값이 없다면
        let item = getHashtagItem(hashtag);  // 해시태그 만들기
        document.getElementById("hashtagList").insertAdjacentHTML("beforeend", item);  // 리스트에 추가
    }
    document.querySelector("#hashtag").value = '';  // input 태그 내용 삭제
    document.querySelector(".hashList").innerHTML = '';  // 리스트 삭제

}
// 해시 리스트 클릭 시 해시태그 추가
function addHashList(event){
    let hashtag = event.innerText.slice(1);
    if (/[,#%\s]/.test(hashtag)){                             // ,#% 들어가 있으면 리턴
        document.querySelector("#hashtag").innerHTML = '';      // input 태그 값 없앰
        document.querySelector(".hashList").innerHTML = '';      // 리스트 값 없앰
        return;                                             // 함수 종료
    }
    let flag = 0;                                                                               // 플래그 변수
    if(document.querySelector('[name="hashtagLists"]').value.includes(",")){                    // 숨겨둔 해시태그리스트에 ,가 있다면
        const splitHash = document.querySelector('[name="hashtagLists"]').value.split(",");     // ,를 기준으로 나눠서 배열을 만들어라
        for(let i=0;i<splitHash.length;i++){                                                    // 배열 만든거에서 하나씩 비교해서 값이 같으면 flag++
            if(splitHash[i] == hashtag){
                flag++;
            }
        }
    } else {
        if(document.querySelector('[name="hashtagLists"]').value == hashtag){  // 이미 값이 있다면 flag++
            flag++;
        }
    }
    if(flag == 0){  // 리스트에 값이 없다면
        let item = getHashtagItem(hashtag);
        document.getElementById("hashtagList").insertAdjacentHTML("beforeend", item);
    }
    document.querySelector("#hashtag").value = '';      // input 태그 값 없앰
    document.querySelector(".hashList").innerHTML = '';      // 리스트 값 없앰
}


// 해시태그 제거
function removeHashtag(hashtag) {
    document.getElementById(hashtag).remove();
    
    if(document.querySelector('[name="hashtagLists"]').value.includes(",")){                    // 숨겨둔 해시태그리스트에 ,가 있다면
        const splitHash = document.querySelector('[name="hashtagLists"]').value.split(",");     // ,를 기준으로 나눠서 배열을 만들어라
        for(let i=0;i<splitHash.length;i++){                                                    // 배열 만든거에서 하나씩 비교해서 값이 같으면 flag++
            if(splitHash[i] == hashtag){
                document.querySelector('[name="hashtagLists"]').value = splitHash.filter((value) => value !== splitHash[i]);
            }
        }
    } else {
        if(document.querySelector('[name="hashtagLists"]').value == hashtag){  // 이미 값이 있다면 flag++
            document.querySelector('[name="hashtagLists"]').value = '';
        }
    }
}

// 해시태그 한줄 만드는 함수
function getHashtagItem(hashtag) {

    hashtag = hashtag.replaceAll(' ', '');
    const hashtagList = document.querySelector('[name="hashtagLists"]');
    if(hashtagList.value == ''){
        hashtagList.value = hashtag;
    } else {
        hashtagList.value += ","+hashtag;
    }


    let item = `
        <div class="hashtag" id="${hashtag}">
            <span class="hashtag-value">#${hashtag}</span>
            <button type="button" onclick="removeHashtag('${hashtag}')">×</button>
        </div>
    `;

    return item;
}


// 팔로우 버튼이 클릭 되었을 때
let followUser;
let nufollow;
let profileBtn; 
let followBtn;

document.addEventListener("DOMContentLoaded",()=>{
})

    followBtn = document.querySelectorAll(".followBtn>svg.fb");

    followUser = document.querySelector(".followUser");
    nufollow = document.querySelector(".nufollow");
    profileBtn = document.querySelector(".followBtn");

    if(followCheck != null){
        if(followCheck == 1){ // 팔로우 된 유저
            if(followUser!=null){
                followUser.classList.remove("followshow");
            }
            if(nufollow!=null){
                nufollow.classList.add("followshow");
            }
        } else if(followCheck == 0){ // 팔로우 안된 유저
            if(followUser!=null){
                followUser.classList.add("followshow");
            }
            if(nufollow!=null){
                nufollow.classList.remove("followshow");
            }
        }
    }

    for(let i=0;i<followBtn.length;i++){
        followBtn[i].addEventListener("click", ()=>{
            followFn()
        });
    }    
    

function followFn(){
    // 로그인 여부 검사
    if(loginMemberNo==""){
        alert("로그인 후 이용해주세요.");
        return;
    }

    let check; // 기존에 팔로우 X(노란색) : 0, followUser
               //        팔로우 0(하늘색) : 1 nufollow
    // contains("클래스명") : 클래스가 있으면 true, 없으면 false
    if(followUser.classList.contains("followshow")){ // followshow 보여주는 클래스
        check = 0; // 팔로우 X(노란색) : 0, followUser
    } else{
        check = 1;  // 팔로우 0(하늘색) : 1 nufollow
    }

    // 팔로우 할 대상 
    const followerNo = profileBtn.getAttribute("follow");

    // ajax로 서버로 제출할 파라미터를 모아둔 JS 객체
    const data = {"memberNo": followerNo, // 회원 번호
                "followerNo":loginMemberNo, // 팔로우한 사람 번호
                "check":check
                };

    // ajax 코드 작성
    fetch("/alarm/follow", {
        method : "POST",
        headers : {"Content-Type" : "application/json"}, // 우리가 지금 보낼 거는 json이야
        body : JSON.stringify(data)
    })
    .then(response=>response.text()) // 응답 객체를 필요한 형태로 파싱하여 리턴
    .then(count =>{

        if(count == -1){ // INSERT, DELETE 실패 시
            console.log("팔로우 처리 실패");
            return;
        }
        if(count == 0){ // 자기 자신
            console.log("자신은 팔로우 하지 못합니다.");
            return;
        }

        if(check==0){ // 팔로우 성공
            sendFollow(followerNo);
            followUser.classList.remove("followshow");
            nufollow.classList.add("followshow");
        } else {
            followUser.classList.add("followshow");
            nufollow.classList.remove("followshow");
        }

    }) // 파싱한 데이터를 받아서 처리하는 코드 작성
    .catch(err=>{
        console.log("예외 발생");
        console.log(err);
    }) // 예외 발생 시 처리하는 부분
}

// 게시글, 좋아요, 컬렉션 숫자
document.addEventListener("DOMContentLoaded",()=>{ 
    const params = new URL(location.href).searchParams;
    const boardNo = params.get("boardNo");
    
    if(boardNo == null){
        return;
    }

    let no;
    let target;
    const list = document.querySelectorAll(".contentBox a");
    for(let a of list){
        const tmp = a.getAttribute("onclick");
        no = tmp.substring(tmp.indexOf("(")+1, tmp.indexOf(")"));

        if(boardNo == no){
            target = a;
            break;
        }
    }

    if(target != undefined){
        target.click();
        history.replaceState({}, null, location.pathname);
    }
})


/* 지식/기술 아이콘 */
techImgList = techImgList.replace(/\[|\]/g, '').trim();
let urlList = techImgList.split(', ');
if(urlList != ""){
    for (let i = 0; i < urlList.length; i++) {
        let imgElement = document.createElement('img');
        imgElement.className = 'tech-img-list';
        imgElement.src = urlList[i];
        imgElement.alt = '';

        let subConElement = document.createElement('div');
        subConElement.className = 'certificate-sub-con';
        subConElement.appendChild(imgElement);

        let mainConElement = document.querySelector('.certificate-main-con');
        mainConElement.appendChild(subConElement);
    }
}

