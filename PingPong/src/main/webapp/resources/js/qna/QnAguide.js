const tabList = document.querySelectorAll('.ch-tabMenu>.ch-list>li');
const contList = document.querySelectorAll('.ch-tabMenu>.ch-cont_area>.ch-cont');
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  
  tabList[i].querySelector('.ch-guideBtn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('ch-is_on');

      // 나머지 컨텐츠 display:none 처리
      contList[j].style.display = 'none';
    }
    // 버튼 관련 이벤트
    this.parentNode.classList.add('ch-is_on');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display='block';
  });
}