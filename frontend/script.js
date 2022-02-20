function loadEvent() {
    
    let rootDiv = document.getElementById("root");
    let months = [
        {
            "name": "january",
            "days": 31,
            "style": "gridSection"
        },
        {
            "name": "february",
            "days": 28,
            "style": "flexSection"
        },
        {
            "name": "march",
            "days": 31,
            "style": "gridSection"
        },
        {
            "name": "april",
            "days": 30,
            "style": "flexSection"
        },
        {
            "name": "may",
            "days": 31,
            "style": "gridSection"
        },
        {
            "name": "june",
            "days": 30,
            "style": "flexSection"
        },
        {
            "name": "july",
            "days": 31,
            "style": "gridSection"
        },
        {
            "name": "august",
            "days": 31,
            "style": "flexSection"
        },
        {
            "name": "september",
            "days": 30,
            "style": "gridSection"
        },
        {
            "name": "october",
            "days": 31,
            "style": "flexSection"
        },
        {
            "name": "november",
            "days": 30,
            "style": "gridSection"
        },
        {
            "name": "december",
            "days": 31,
            "style": "blockSection"
        }
    ]
    for (const month of months) {
        let year = 2022;
        rootDiv.insertAdjacentHTML("beforeend", `<section id="${month.name}" class="${month.style}"></section>`);
        let section = document.getElementById(month.name);
        section.insertAdjacentHTML("afterbegin", `<div class="${month.name}OuterDiv"></div>`);
        let outerDiv = document.querySelector(`.${month.name}OuterDiv`);

        let monthUpper = month.name.charAt(0).toUpperCase() + month.name.slice(1);

        if (month.days === 31) {
            for (let i = 0; i < 31; i++) {
                outerDiv.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        } else if (month.days === 30) {
            for (let i = 0; i < 30; i++) {
                outerDiv.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        } else {
            for (let i = 0; i < 28; i++) {
                outerDiv.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        }
    }

    // January click
    function clickJan(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("janChange");
        } else {
            clickedItem.classList.remove("janChange");
        }
    }

    let janCards = document.querySelectorAll("#january div.card");
    for (const card of janCards) {
        card.addEventListener("click", clickJan)
    }

    // February click
    function clickFeb(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("shrink");
        } else {
            clickedItem.classList.remove("shrink");
        }
    }

    let cards = document.querySelectorAll("#february div.card");
    for (const card of cards) {
        card.addEventListener("click", clickFeb)
    }

    // March click
    function clickMar(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("marChange");
        } else {
            clickedItem.classList.remove("marChange");
        }
    }

    let marchCards = document.querySelectorAll("#march div.card");
    for (const card of marchCards) {
        card.addEventListener("click", clickMar)
    }

    // April click
    function clickApr(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("flip");
        } else {
            clickedItem.classList.remove("flip");
        }
    }

    let aprilCards = document.querySelectorAll("#april div.card");
    for (const card of aprilCards) {
        card.addEventListener("click", clickApr)
    }

    // May click
    function clickMay(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("mayChange");
        } else {
            clickedItem.classList.remove("mayChange");
        }
    }

    let mayCards = document.querySelectorAll("#may div.card");
    for (const card of mayCards) {
        card.addEventListener("click", clickMay)
    }

    // June click
    function clickJun(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("bigX");
            clickedItem.insertAdjacentHTML("afterbegin", "<p class='xmark'>&#10060;</p>")
        }
    }

    let juneCards = document.querySelectorAll("#june div.card");
    for (const card of juneCards) {
        card.addEventListener("click", clickJun)
    }

    // July click
    function clickJuly(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("julyChange");
        } else {
            clickedItem.classList.remove("julyChange");
        }
    }

    let julyCards = document.querySelectorAll("#july div.card");
    for (const card of julyCards) {
        card.addEventListener("click", clickJuly)
    }

    // August click
    function clickAug(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("augChange");
        } else {
            clickedItem.classList.remove("augChange");
        }
    }

    let augustCards = document.querySelectorAll("#august div.card");
    for (const card of augustCards) {
        card.addEventListener("click", clickAug)
    }

    // September click
    function clickSep(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("sepChange");
        } else {
            clickedItem.classList.remove("sepChange");
        }
    }

    let septemberCards = document.querySelectorAll("#september div.card");
    for (const card of septemberCards) {
        card.addEventListener("click", clickSep)
    }

    // October click
    function clickOct(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("octChange");
        } else {
            clickedItem.classList.remove("octChange");
        }
    }

    let octoberCards = document.querySelectorAll("#october div.card");
    for (const card of octoberCards) {
        card.addEventListener("click", clickOct)
    }

    // November click
    function clickNov(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("novChange");
        } else {
            clickedItem.classList.remove("novChange");
        }
    }

    let novemberCards = document.querySelectorAll("#november div.card");
    for (const card of novemberCards) {
        card.addEventListener("click", clickNov)
    }

    // December click
    function clickDec(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("decChange");
        } else {
            clickedItem.classList.remove("decChange");
        }
    }

    let decemberCards = document.querySelectorAll("#december div.card");
    for (const card of decemberCards) {
        card.addEventListener("click", clickDec)
    }

}

window.addEventListener("load", loadEvent);