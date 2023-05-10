// 개인 홈 프로필 js
// 홈프로필 배경 변경
const profileBgUpload = document.querySelector('.profileBgupload');
const upload = document.querySelector('.profileBackground p');
upload.addEventListener('click', () => profileBgUpload.click());
// 파일 첨부 버튼 위임

function getImageFiles(e) {
    // 이미지 배열로 받아서 검사 (아래부분 늘려주고 요소 추가하는 코드 넣으면 여러 개 가능)
    const uploadFiles = [];
    const files = e.currentTarget.files;
    const bgimageBox = document.querySelector('.bgimageBox');
    const docFrag = new DocumentFragment();

    // 이미지 1개 이상 들어오면 돌려보내주기
    if ([...files].length > 1) {
        alert('이미지는 하나만 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach(file => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return
        }

        // 파일 갯수 검사 이미지 1개 들어온게 맞다면 요소 추가
        if ([...files].length == 1) {
            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);
                bgimageBox.innerHTML = "";
                bgimageBox.appendChild(preview);
            };
            reader.readAsDataURL(file);
        }
    });
}

function createElement(e, file) {
    // const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    // div.appendChild(img);

    return img;
}

profileBgUpload.addEventListener('change', getImageFiles);


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

for (var i = 0; i < posttabList.length; i++) {
    posttabList[i].querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault();
        for (var j = 0; j < posttabList.length; j++) {
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

messageBox.addEventListener("click", () => {
    messageBoXrecive.style.display = "flex";
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



// 홈 프로필 설정 할 때 자격증 아이콘 설정 할 수 있게 해주기
// 대표 자격 이미지로 추가해서 배열로 넣어주면 될듯 최대 6개
// const certificate = document.getElementById("certificate");
// 임시로 지식/기술 버튼 누르면 배열에 추가되게
// certificate.addEventListener("click",()=>{
//     let certList = ["PsCert.png", "AiCert.png", "PrCert.png", "XdCert.png"];
// });


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
const BoardCommentBox1 = document.querySelector(".BoardCommentBox1");

const BoardComment = document.querySelector(".BoardComment");
const BoardCommentBtn1 = document.querySelector(".BoardCommentBtn1").firstElementChild
const BoardCommentBtn2 = document.querySelector(".BoardCommentBtn1").lastElementChild
const BoardPost1 = document.querySelector(".BoardPost1")
let BoardCommentText1 = document.querySelector(".BoardCommentText1");

const newContent = document.querySelector(".newContent");
/* 댓글 달기 버튼 */
BoardComment.addEventListener("click", () => {

    Boardcontent.style.display = "none";
    Boardcontent1.style.display = "flex";

    BoardHeartBox.style.display = "none";

    BoardCommentBox.style.display = "none";
    BoardCommentBox1.style.display = "block";


})
/* 이전 버튼 */
BoardCommentBtn2.addEventListener("click", () => {
    // console.log("dddddd")
    Boardcontent.style.display = "flex";
    Boardcontent1.style.display = "none";

    BoardHeartBox.style.display = "flex";

    BoardCommentBox.style.display = "flex";
    BoardCommentBox1.style.display = "none";

});

/* 확인 버튼 */


BoardCommentBtn1.addEventListener("click", () => {

    const check = confirm("댓글을 등록하시겠습니까?");
    let text = document.querySelector(".BoardCommentText1").value;

    if (check && text.trim() !== "") {
        alert("등록되었습니다")

        const div1 = document.createElement("div");
        div1.classList.add("postcontent1");

        const div2 = document.createElement("div");
        div2.classList.add("BoardPost1");

        const a1 = document.createElement("a");
        a1.classList.add("BoardProfile1")

        const div3 = document.createElement("div");

        const a2 = document.createElement("a")

        const p = document.createElement("p")

        const span = document.createElement("span");
        span.classList.add("BoardComment-remove-row");

        span.innerHTML = "&times;"

        text = text.replaceAll(/(\n|\r\n)/g, "<br>");

        p.innerHTML = text
        a2.innerHTML = "김핑퐁" /* 추후 프로필명 으로 수정 */

        Boardcontent1.prepend(div1);
        div1.prepend(div2);
        div2.append(a1);
        div1.append(div3);
        div1.append(span);
        div3.prepend(a2);
        div3.append(p);

        document.querySelector(".BoardCommentText1").value = "";

        span.addEventListener("click", e => {

            const check1 = confirm("삭제하시겠습니까?")

            if (check1) {
                alert("댓글 삭제 완료")
                e.target.parentElement.remove();

            } else alert("취소되었습니다")
        });

    }
    else alert("취소되었습니다")

});

/* 게시글 닫기 버튼으로 닫기 */
const BoardClose = document.querySelector(".BoardClose");

const BoardBackground = document.querySelector(".BoardBackground");
BoardClose.addEventListener("click", () => {
    BoardBackground.style.display = "none";
    FirstPagination.click();
});

/* 게시글 클릭했을 때 게시글 열기 */
const contentBox = document.querySelector(".contentBox");
contentBox.addEventListener("click", () => {
    BoardBackground.style.display = "flex";

    BoardBackground.classList.remove('BoardBackground-close');
});

// -----------------------------------------------------------------------------------------
// 게시글 슬라이드
// 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

const FirstPagination = document.querySelector(".slide_pagination > li");
// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".slide_item");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
});

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

// 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
for (let i = 0; i < maxSlide; i++) {
    // 각 페이지네이션마다 클릭 이벤트 추가하기
    paginationItems[i].addEventListener("click", () => {
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

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
        // 마우스가 오른쪽으로 드래그 된 경우
        prevMove();
    } else if (startPoint > endPoint) {
        // 마우스가 왼쪽으로 드래그 된 경우
        nextMove();
    }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
    if (startPoint < endPoint) {
        // 오른쪽으로 스와이프 된 경우
        prevMove();
    } else if (startPoint > endPoint) {
        // 왼쪽으로 스와이프 된 경우
        nextMove();
    }
});

// 기본적으로 슬라이드 루프 시작하기
let loopInterval = setInterval(() => {
    nextMove();
}, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
        nextMove();
    }, 3000);
});

/* 새 게시글 클릭 */
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

inputFileBtn.addEventListener("click", () => {
    NewBoardBackground.style.display = "none";
    BoardBackground2.style.display = "flex";
    BoardBackground2.classList.remove('BoardBackground-close');

});
/* 게시글 작성 화면 이전 버튼 */
const BackIcon = document.querySelector("#BackIcon");

BackIcon.addEventListener("click", () => {
    NewBoardBackground.style.display = "flex";

    BoardBackground2.style.display = "none";
})
/* 새 게시글 작성 내용 글자수 카운트 */
const NewWriteTextArea = document.querySelector(".NewWriteTextArea");
const NewWriteTextAreaCount = document.querySelector(".NewWriteTextAreaCount");

NewWriteTextArea.addEventListener("input", () => {
    const count = NewWriteTextArea.value.length;

    NewWriteTextAreaCount.innerHTML = count;
})
// -----------------------------------------------------------------------------------------
// 게시글 업로드 슬라이드
// 슬라이크 전체 크기(width 구하기)
const slide2 = document.querySelector(".slide2");
let slideWidth2 = slide2.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn2 = document.querySelector(".slide_prev_button2");
const nextBtn2 = document.querySelector(".slide_next_button2");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems2 = document.querySelectorAll(".slide_item2");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide2 = slideItems2.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide2 = 1;

// 페이지네이션 생성
const pagination2 = document.querySelector(".slide_pagination2");

for (let i = 0; i < maxSlide2; i++) {
    if (i === 0) pagination2.innerHTML += `<li class="active">•</li>`;
    else pagination2.innerHTML += `<li>•</li>`;
}

const paginationItems2 = document.querySelectorAll(".slide_pagination2 > li");

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

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn2.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    nextMove2();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn2.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    prevMove2();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
    slideWidth2 = slide2.clientWidth;
});

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

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint2 = 0;
let endPoint2 = 0;

// PC 클릭 이벤트 (드래그)
slide2.addEventListener("mousedown", (e) => {
    startPoint2 = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide2.addEventListener("mouseup", (e) => {
    endPoint2 = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint2 < endPoint2) {
        // 마우스가 오른쪽으로 드래그 된 경우
        prevMove2();
    } else if (startPoint2 > endPoint2) {
        // 마우스가 왼쪽으로 드래그 된 경우
        nextMove2();
    }
});

// 모바일 터치 이벤트 (스와이프)
slide2.addEventListener("touchstart", (e) => {
    startPoint2 = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide2.addEventListener("touchend", (e) => {
    endPoint2 = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
    if (startPoint2 < endPoint2) {
        // 오른쪽으로 스와이프 된 경우
        prevMove2();
    } else if (startPoint2 > endPoint2) {
        // 왼쪽으로 스와이프 된 경우
        nextMove2();
    }
});

// 기본적으로 슬라이드 루프 시작하기
let loopInterval2 = setInterval(() => {
    nextMove2();
}, 3000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slide2.addEventListener("mouseover", () => {
    clearInterval(loopInterval2);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slide2.addEventListener("mouseout", () => {
    loopInterval2 = setInterval(() => {
        nextMove2();
    }, 3000);
});

