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

    



}

window.addEventListener("load", loadEvent);