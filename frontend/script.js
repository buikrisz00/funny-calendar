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
        let monthUpper = month.name.charAt(0).toUpperCase() + month.name.slice(1);
        if (month.days === 31) {
            for (let i = 0; i < 31; i++) {
                section.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        } else if (month.days === 30) {
            for (let i = 0; i < 30; i++) {
                section.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        } else {
            for (let i = 0; i < 28; i++) {
                section.insertAdjacentHTML("beforeend", `<div class="card">
                                                        <time datetime="YYYY">${year}</time>
                                                        <time datetime="MM">${monthUpper}</time>
                                                        <time datetime="DD">${i+1}</time>
                                                        </div>`)
            }
        }
    }

    // February click
    function clickFeb(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("hide");
        } else {
            clickedItem.classList.remove("hide");
        }
    }

    let cards = document.querySelectorAll("#february div.card");
    console.log(cards);
    for (const card of cards) {
        card.addEventListener("click", clickFeb)
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

    // June click
    function clickJun(event) {
        let clickedItem = event.target;
        if (clickedItem.classList[0] === "card" && clickedItem.classList.length === 1) {
            clickedItem.classList.add("colorChange");
            clickedItem.insertAdjacentHTML("afterbegin", "<p class='xmark'>&#10060;</p>")
        }
    }

    let juneCards = document.querySelectorAll("#june div.card");
    for (const card of juneCards) {
        card.addEventListener("click", clickJun)
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

}

window.addEventListener("load", loadEvent);