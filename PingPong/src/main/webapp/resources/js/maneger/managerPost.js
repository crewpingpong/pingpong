/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */
/* 체크박스 전체 선택/해제 */
const chkSelectAll = document.getElementById("chkSelectAll");
chkSelectAll.addEventListener("click", ()=>{
  const choiceBoxes = document.getElementsByName("choicebox");;
  choiceBoxes.forEach((checkbox) => {
    checkbox.checked = chkSelectAll.checked;
  })
}); // https://hianna.tistory.com/432 참고

/* ***** 페이지 네이션 부분 ***** */
const rowsPerPage = 10;  // 보여줄 행의 갯수
const maxPageNum = 10;  // 페이지그룹 개수

const rows = document.querySelectorAll('#oneToOneTable tbody tr');  // 데이터 행
const rowsCount = rows.length;  // 100/8  12.5 -> 13                // 총 행의 개수
const pageCount = Math.ceil(rowsCount/rowsPerPage); // 올림처리     // 총 페이지 개수
const paginationNumbers = document.querySelector('#paginationNumbers');  // 전체 페이지 리스트
const arrowLeftBtn = document.querySelector(".fa-arrow-left");  // 왼쪽화살표
const arrowRightBtn = document.querySelector(".fa-arrow-right");  // 오른쪽화살표
let pageActiveIdx = 0; // 현재 보고있는 페이지그룹 번호
let currentPageNum = 0; // 현재 보고 있는 페이지네이션 번호

//페이지네이션 생성
for(let i=1;i<=pageCount;i++){
  paginationNumbers.innerHTML += `<li><a href="">${i}</a></li>`;  // 페이지수 나타낼 HTML 추가
}
const paginationNumberBtn = paginationNumbers.querySelectorAll('a');  // 페이지네이션 숫자들(a태그)

for(nb of paginationNumberBtn){  // 페이지네이션 번호 감추기
  nb.style.display = 'none';
}

paginationNumberBtn.forEach((item,idx)=>{  // 페이지네이션 전부 중에
                          // item = for문 중 현재 요소 / idx = 현재 요소의 인덱스
  item.addEventListener('click', e=>{  // 선택 옵션있으면
    e.preventDefault();  // a태그 깜빡거림 없애기
    // 테이블 출력 함수
    displayRow(idx);
  });
});

function displayRow(idx){
  // let rowsArray = Array.from(rows);
  let start = idx*rowsPerPage;  // 인덱스번호부터
  let end = start+rowsPerPage;  // 보여줄 행의 개수
  let rowsArray = [...rows]; // 데이터 행 배열로 바꾸기(slice 하기 위함)
  
  for(ra of rowsArray){  // 전체 행 감추기
    ra.style.display = 'none';
  }

  let newRows = rowsArray.slice(start,end);  // 인덱스 행부터 보여줄 행의 개수 만큼의 배열
  for(nr of newRows){  // 이만큼만 감춘것 없애기
    nr.style.display = '';
  }
  for(let pnb of paginationNumberBtn){  // 페이지네이션 전부 active 클래스 제거
    pnb.classList.remove('active');
  }
  paginationNumberBtn[idx].classList.add('active');  // 선택한 페이지네이션만 active 클래스 추가
}  // displayRow 함수 끝
displayRow(0);  // 페이지 새로고침하면 0 첫화면

// 페이지네이션 그룹 표시 함수
function displayPage(num){
  for(nb of paginationNumberBtn){  // 페이지네이션 번호 감추기
    nb.style.display = 'none';
  }
  let totalPageCount = Math.ceil(pageCount/maxPageNum);  // 화면에 보여줄 페이지 네이션 수

  let pageArr = [...paginationNumberBtn];  // 페이지네이션 번호 배열로 만들기
  let start = num*maxPageNum;  // 페이지네이션 인덱스번호부터
  let end = start+maxPageNum;  // 보여줄 페이지네이션 갯수
  let pageListArr = pageArr.slice(start, end);  // 이만큼 자른 배열

  for(let item of pageListArr){  // 페이지네이션 자른 배열들만 보이게 하기
    item.style.display = 'block';
  }
  if(pageActiveIdx == 0){  // 첫화면이면 화살표 왼쪽 안보이게 오른쪽 보이게
    arrowLeftBtn.style.display = 'none';
  } else{
    arrowLeftBtn.style.display = 'block';
  }

  if(pageActiveIdx == totalPageCount-1){  // 마지막 화면이면 화살표 왼쪽 보이게 오른쪽 안보이게
    arrowRightBtn.style.display = 'none';
  } else{
    arrowRightBtn.style.display = 'block';
  }
}
displayPage(0);  // 페이지 새로고침하면 첫 페이지네이션

arrowRightBtn.addEventListener("click",()=>{
  let nextPageNum = pageActiveIdx*maxPageNum+maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});

arrowLeftBtn.addEventListener("click",()=>{
  let nextPageNum = pageActiveIdx*maxPageNum-1;
  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});  // https://www.youtube.com/watch?v=drXZCq3Y9d8&list=PL-qMANrofLyvzqz2yYzNectJnYo5ZifE7&index=74&ab_channel=Rock%27sEasyweb
