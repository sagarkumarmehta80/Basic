let tab_btns = document.querySelectorAll(".tab_wrap .tab_btn");

let tabClickEvent = () => {
    tab_btns.forEach((elem) => {
        elem.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                displayContent(this.attributes["data-check"].value)
                this.classList.add("active")
            }
        })
    })
}

let displayContent = (val) => {
    document.querySelectorAll(".content_wrap div").forEach((elem) => {
        elem.classList.remove("active")
    })
    document.querySelector(`.content_wrap #content${val}`).classList.add("active")
    tab_btns.forEach((elem) => {
        elem.classList.remove("active")
    })
}



let menuClickHandler = () => {
    let clicked = false;
    let menu = document.querySelector("header .menu_wrap");
    if (window.innerWidth <= 700) {
        menu.style.display = "none"
        document.querySelector(".menu_icon_wrap").addEventListener("click", () => {
            if (!clicked) {
                menu.style.display = "block"
            } else {
                menu.style.display = "none"
            }
            clicked = !clicked
        })
    } else {
        menu.style.display = "block"
    }
}

tabClickEvent();
menuClickHandler();
window.onresize = menuClickHandler