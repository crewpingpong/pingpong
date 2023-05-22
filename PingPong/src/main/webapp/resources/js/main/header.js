const headerSearchModContainer = document.getElementById("headerSearchModContainer");
const headerOpenSearchBox1 = document.getElementById("headerOpenSearchBox");

if (headerOpenSearchBox1 != null) {

    headerOpenSearchBox1.addEventListener("input", (e) => {

        const headerSearchBoxValue = headerOpenSearchBox1.value;

        if (headerSearchBoxValue.charAt(0) === '#') {
            console.log("# 있어요");
            fetch("/selectAllNickname", {
                method: "POST",
                headers: { "Content-Type": "application/text" }, // 문자열 하나를 파라미터로 전달
                body: headerSearchBoxValue.value // 보내질 문자열 하나
            })
                .then(resp => resp.json())
                .then(memberList => {
                    console.log(memberList);

                    if (memberList.length == 0) {

                        return;
                    }

                    for (let member of memberList) {

                        let newLink = document.createElement("a");
                        newLink.href = "";

                        let mainBox = createElementWithClass("div", "search-result-main-box");
                        let innerBox = createElementWithClass("div", "search-result-inner-box");
                        let modRound1 = createElementWithClass("div", "searchModRound1");

                        let svg = createElementWithNS("svg", "http://www.w3.org/2000/svg");
                        svg.setAttribute("aria-label", "해시태그");
                        svg.classList.add("search-tag-icon");

                        let svgElements = [
                            { tag: "line", attributes: [["fill", "none"], ["stroke", "currentColor"], ["stroke-linecap", "round"], ["stroke-linejoin", "round"], ["stroke-width", "2"], ["x1", "4.728"], ["x2", "20.635"], ["y1", "7.915"], ["y2", "7.915"]] },
                            { tag: "line", attributes: [["fill", "none"], ["stroke", "currentColor"], ["stroke-linecap", "round"], ["stroke-linejoin", "round"], ["stroke-width", "2"], ["x1", "3.364"], ["x2", "19.272"], ["y1", "15.186"], ["y2", "15.186"]] },
                            { tag: "line", attributes: [["fill", "none"], ["stroke", "currentColor"], ["stroke-linecap", "round"], ["stroke-linejoin", "round"], ["stroke-width", "2"], ["x1", "17.009"], ["x2", "13.368"], ["y1", "2"], ["y2", "22"]] },
                            { tag: "line", attributes: [["fill", "none"], ["stroke", "currentColor"], ["stroke-linecap", "round"], ["stroke-linejoin", "round"], ["stroke-width", "2"], ["x1", "10.64"], ["x2", "7"], ["y1", "2"], ["y2", "22"]] }
                        ];

                        svgElements.forEach(function (element) {
                            let svgElement = createElementWithNS(element.tag, "http://www.w3.org/2000/svg");
                            element.attributes.forEach(function (attribute) {
                                svgElement.setAttribute(attribute[0], attribute[1]);
                            });
                            svg.appendChild(svgElement);
                        });

                        modRound1.appendChild(svg);
                        innerBox.appendChild(modRound1);

                        let tagBox = createElementWithClass("div", "search-input-tag-box");
                        let tagName = createElementWithClassText("span", "search-input-tag-name", "검색했어요");

                        tagBox.appendChild(tagName);
                        innerBox.appendChild(tagBox);

                        mainBox.appendChild(innerBox);
                        newLink.appendChild(mainBox);

                        headerSearchModContainer.appendChild(newLink);

                        // 헬퍼 함수들

                        function createElementWithClass(tagName, className) {
                            let element = document.createElement(tagName);
                            element.classList.add(className);
                            return element;
                        }

                        function createElementWithClassText(tagName, className, textContent) {
                            let element = createElementWithClass(tagName, className);
                            element.textContent = textContent;
                            return element;
                        }

                        function createElementWithNS(tagName, namespace) {
                            return document.createElementNS(namespace, tagName);
                        }
                        ////////////////////////////////////////////////////

                        // tr, td 만들어서 result3에 추가
                        const tr = document.createElement("tr");

                        const td1 = document.createElement("td");
                        td1.innerText = member.memberNo;

                        const td2 = document.createElement("td");
                        td2.innerText = member.memberEmail;

                        const td3 = document.createElement("td");
                        td3.innerText = member.memberNickname;

                        // 1) tr의 자식으로 td1~3 추가
                        tr.append(td1, td2, td3);

                        // 2) result3의 자식으로 tr 추가
                        result3.append(tr);
                    }

                })
                .catch(err => {
                    console.log(err);

                });
        } else {
            // # 없을때
            console.log("# 없어요");
            fetch("/selectAllNickname", {
                method: "POST",
                headers: { "Content-Type": "application/text" }, // 문자열 하나를 파라미터로 전달
                body: headerSearchBoxValue.value // 보내질 문자열 하나
            })
                .then(resp => resp.json())
                .then(memberList => {
                    console.log(memberList);

                    if (memberList.length == 0) {

                        return;
                    }

                    for (let member of memberList) {

                        // 새로운 a 태그 생성
                        let newLink = document.createElement("a");
                        newLink.href = ""; // href 속성 값 설정

                        let mainBox = document.createElement("div");
                        mainBox.classList.add("search-result-main-box");

                        let innerBox = document.createElement("div");
                        innerBox.classList.add("search-result-inner-box");

                        let modRound1 = document.createElement("div");
                        modRound1.classList.add("searchModRound1");

                        let userPicture = document.createElement("img");
                        userPicture.classList.add("search-user-picture");
                        userPicture.src = "https://via.placeholder.com/45";
                        userPicture.alt = "";

                        modRound1.appendChild(userPicture);
                        innerBox.appendChild(modRound1);

                        let userBox = document.createElement("div");
                        userBox.classList.add("search-input-user-box");

                        let userName = document.createElement("span");
                        userName.classList.add("search-input-tag-name");
                        userName.textContent = member.memberNickname;

                        userBox.appendChild(userName);
                        innerBox.appendChild(userBox);

                        mainBox.appendChild(innerBox);
                        newLink.appendChild(mainBox);

                        // headerSearchModContainer에 새로운 요소 추가
                        headerSearchModContainer.appendChild(newLink);

                    }
                })
                .catch(err => {
                    console.log(err);

                });

        }


    });
}