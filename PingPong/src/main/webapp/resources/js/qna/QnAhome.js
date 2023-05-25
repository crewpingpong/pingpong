const inquiry = document.getElementById("inquiry");

// inquiry버튼을 누르면 grayBack의 display가 flex로 변경
inquiry.addEventListener("click", () => {
    showModal(this)
})

/* Q&A 모달 구현 */
const grayBack = document.getElementById("grayBackground");
const oneToOne = document.getElementById("oneToOne");
// const oneToOnechild = document.querySelectorAll("#oneToOne>*");
function showModal(target){
    grayBack.style.display = "flex";
    // document.addEventListener("mouseup", e=>{
    //     // if(e.target!==oneToOne){
    //     if(e.target==grayBack){
    //         grayBack.style.display = "none";
    //         document.getElementById("chooseFile").value = '';
    //         document.getElementById("fileName").innerText = '';
    //     }
    // })
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
const otoContent = document.getElementById("otoContent");
const otoEmail = document.getElementById("otoEmail");

submit.addEventListener("click",e=>{

    if(otoContent.value.trim()==""){
        e.preventDefault();
        alert("내용을 입력해주세요")
        return;
    }
    if(otoEmail.value.trim()==""){
        e.preventDefault();
        alert("이메일을 입력해주세요")
        return;
    }
        alert("문의가 등록되었습니다.")
});

const inquiryX = document.querySelector("#oneToOne svg:nth-child(2)");
inquiryX.addEventListener("click",()=>{
    grayBack.style.display = "none";
});