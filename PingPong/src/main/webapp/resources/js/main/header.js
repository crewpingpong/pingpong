// 검색(태그, 닉네임) 펑션
function handleSearchInput(headerSearchModContainer, headerOpenSearchBox) {
    let tempTimeout;

    if (headerOpenSearchBox != null) {
        headerOpenSearchBox.addEventListener("input", (e) => {
            if (e.target.value.trim().length == 0) return;

            clearTimeout(tempTimeout);

            tempTimeout = setTimeout(() => {
                if (headerOpenSearchBox.value == '' || headerOpenSearchBox.value == '#') {
                    headerSearchModContainer.style.display = "none";
                } else {
                    headerSearchModContainer.style.display = "block";
                }
                headerSearchModContainer.innerHTML = '';

                if (headerOpenSearchBox.value.charAt(0) != '#') {
                    fetch("/selectAllNickname", {
                        method: "POST",
                        headers: { "Content-Type": "application/text" },
                        body: headerOpenSearchBox.value
                    })
                        .then(resp => resp.json())
                        .then(memberList => {
                            console.log(memberList);

                            if (memberList.length == 0) {
                                headerSearchModContainer.style.display = "none";
                                return;
                            } else {
                                headerSearchModContainer.style.display = "block";
                            }
                            for (let member of memberList) {
                                let newLink = document.createElement("a");
                                newLink.href = "/mypage/" + member.memberNo;

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

                                headerSearchModContainer.appendChild(newLink);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    fetch("/selectAllTag", {
                        method: "POST",
                        headers: { "Content-Type": "application/text" },
                        body: e.target.value.substring(1)
                    })
                        .then(resp => resp.json())
                        .then(tagList => {
                            if (tagList.length == 0) {
                                headerSearchModContainer.style.display = "none";
                                return;
                            } else {
                                headerSearchModContainer.style.display = "block";
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

                                headerSearchModContainer.appendChild(newLink);

                                // Helper functions
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
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }, 1);
        });
    }
}

const headerSearchModContainer1 = document.getElementById("headerSearchModContainer");
const headerOpenSearchBox1 = document.getElementById("headerOpenSearchBox");

const navSearchModContainer = document.getElementById("navSearchModContainer");
const navSearchBox = document.getElementById("navSearchBox");
handleSearchInput(headerSearchModContainer1, headerOpenSearchBox1);
handleSearchInput(navSearchModContainer, navSearchBox);

