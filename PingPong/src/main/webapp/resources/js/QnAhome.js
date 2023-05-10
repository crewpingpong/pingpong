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