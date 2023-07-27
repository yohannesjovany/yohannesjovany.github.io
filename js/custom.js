let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".nav-list")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("active");
}


window.onscroll = () => {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("active");
}