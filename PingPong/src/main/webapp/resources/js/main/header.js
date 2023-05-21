
const headerOpenSearchBox1 = document.getElementById("headerOpenSearchBox");

if (headerOpenSearchBox1 != null) {

    headerOpenSearchBox1.addEventListener("input", (e) => {

        const headerSearchBoxValue = headerOpenSearchBox1.value;

        if (headerSearchBoxValue.charAt(0) === '#') {
            console.log("# 있어요");
            // # 있을때
            // fetch("/selectNickname", {
            //     method : "POST",
            //     headers : {"Content-Type" : "application/text"}, // 문자열 하나를 파라미터로 전달
            //     body : input.value // 보내질 문자열 하나
            // })
            // .then(resp => resp.json())
            // .then(memberList => {
            //     console.log(memberList);

            //     result3.innerHTML="";
            //     if(memberList.length == 0){
            //         result3.innerHTML = "조회 결과가 없습니다";
            //         return;
            //     }

            //     for(let member of memberList){

            //         // tr, td 만들어서 result3에 추가
            //         const tr = document.createElement("tr");

            //         const td1 = document.createElement("td");
            //         td1.innerText = member.memberNo;

            //         const td2 = document.createElement("td");
            //         td2.innerText = member.memberEmail;

            //         const td3 = document.createElement("td");
            //         td3.innerText = member.memberNickname;

            //         // 1) tr의 자식으로 td1~3 추가
            //         tr.append(td1, td2, td3);

            //         // 2) result3의 자식으로 tr 추가
            //         result3.append(tr);
            //     }

            // })
            // .catch(err => {
            //     console.log(err);

            // });
        } else {
            // # 없을때
            console.log("# 없어요");
        }


    });
}