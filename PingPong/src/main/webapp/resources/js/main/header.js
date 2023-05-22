const headerSearchModContainer1 = document.getElementById("headerSearchModContainer");
const headerOpenSearchBox1 = document.getElementById("headerOpenSearchBox");

let tempTimeout;

if (headerOpenSearchBox1 != null) {

    headerOpenSearchBox1.addEventListener("input", (e) => {

        if(e.target.value.trim().length == 0) return;

        clearTimeout(tempTimeout);

        tempTimeout = setTimeout(() => {
            if (headerOpenSearchBox1.value == '' || headerOpenSearchBox1.value == '#') {
                headerSearchModContainer1.style.display = "none";
            } else {
                headerSearchModContainer1.style.display = "block";
            }
            headerSearchModContainer1.innerHTML = '';

            if (headerOpenSearchBox1.value.charAt(0) != '#') {
                fetch("/selectAllNickname", {
                    method: "POST",
                    headers: { "Content-Type": "application/text" }, // 문자열 하나를 파라미터로 전달
                    body: headerOpenSearchBox1.value // 보내질 문자열 하나
                })
                    .then(resp => resp.json())
                    .then(memberList => {
                        console.log(memberList);

                        if (memberList.length == 0) {
                            headerSearchModContainer1.style.display = "none";
                            return;
                        }else{
                            headerSearchModContainer1.style.display = "block";
                        }
                        for (let member of memberList) {

                            // 새로운 a 태그 생성
                            let newLink = document.createElement("a");
                            newLink.href = "/mypage/" + member.memberNo; // href 속성 값 설정

                            let mainBox = document.createElement("div");
                            mainBox.classList.add("search-result-main-box");

                            let innerBox = document.createElement("div");
                            innerBox.classList.add("search-result-inner-box");

                            let modRound1 = document.createElement("div");
                            modRound1.classList.add("searchModRound1");

                            let userPicture = document.createElement("img");
                            userPicture.classList.add("search-user-picture");
                            userPicture.src = member.profileImage;
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

                            // headerSearchModContainer1에 새로운 요소 추가
                            headerSearchModContainer1.appendChild(newLink);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                // # 없을때

                // "가나다라" 를 검색 시
                // "가나다" 의 결과값이 사라지지 않고 
                // "가나다라" 의 결과값과 같이 출력됨

                // "가나다라" 를 입력 후 "라"를 하나 지워 "가나다" 를 만든 후 "가나다라"를 출력하면 
                // 제대로 출력됨
                fetch("/selectAllTag", {
                    method: "POST",
                    headers: { "Content-Type": "application/text" }, // 문자열 하나를 파라미터로 전달
                    body: e.target.value.substring(1) // 보내질 문자열 하나 # 없애고 보냄
                })
                    .then(resp => resp.json())
                    .then(tagList => {
                        // console.log(tagList);
                        if (tagList.length == 0) {
                            headerSearchModContainer1.style.display = "none";
                            return;
                        }else{
                            headerSearchModContainer1.style.display = "block";
                        }
                        for (let tag of tagList) {
                            let newLink = document.createElement("a");
                            newLink.href = "/";

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
                            let tagName = createElementWithClassText("span", "search-input-tag-name", tag.hashtagName);

                            tagBox.appendChild(tagName);
                            innerBox.appendChild(tagBox);

                            mainBox.appendChild(innerBox);
                            newLink.appendChild(mainBox);

                            headerSearchModContainer1.appendChild(newLink);

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

                            // // 새로운 a 태그 생성
                            // let newLink = document.createElement("a");
                            // newLink.href = ""; // href 속성 값 설정

                            // let mainBox = document.createElement("div");
                            // mainBox.classList.add("search-result-main-box");

                            // let innerBox = document.createElement("div");
                            // innerBox.classList.add("search-result-inner-box");

                            // let modRound1 = document.createElement("div");
                            // modRound1.classList.add("searchModRound1");

                            // let userPicture = document.createElement("img");
                            // userPicture.classList.add("search-user-picture");
                            // userPicture.src = "https://via.placeholder.com/45";
                            // userPicture.alt = "";

                            // modRound1.appendChild(userPicture);
                            // innerBox.appendChild(modRound1);

                            // let userBox = document.createElement("div");
                            // userBox.classList.add("search-input-user-box");

                            // let userName = document.createElement("span");
                            // userName.classList.add("search-input-tag-name");
                            // userName.textContent = tag.hashtagName;

                            // userBox.appendChild(userName);
                            // innerBox.appendChild(userBox);

                            // mainBox.appendChild(innerBox);
                            // newLink.appendChild(mainBox);

                            // // headerSearchModContainer1에 새로운 요소 추가
                            // headerSearchModContainer1.appendChild(newLink);

                        }
                    })
                    .catch(err => {
                        console.log(err);

                    });

            }
        }, 1);

    });
}