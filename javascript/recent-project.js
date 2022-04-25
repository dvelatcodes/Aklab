const hamburgerCover = document.querySelector(".hamburger-cover");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const aside = document.querySelector(".aside");
const body = document.querySelector("body");
let check = true;
const line = document.querySelector(".line");
const image = document.querySelector(".image");
const h3 = document.querySelector(".cover__h3");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        entries[0].target.className = "image-swap";
        line.className = "lineswap";
        h3.className = "cover__h3swap";
    }
})

observer.observe(image);











function burger() {
    if (check) {
    ham2.style.display = "none";
    ham1.style.transform = "rotate(-45deg) translate(-11px, 29px)";
    ham3.style.transform = "rotate(45deg) translate(9px, -8px)";
    aside.style.transform = "translateY(0)";
    body.style.overflow = "hidden";
    check = false;
    }
    else {
        ham2.style.display = "block";
        ham1.style.transform = "none";
        ham3.style.transform = "none";
        aside.style.transform = "translateY(-100%)";
        body.style.overflowY = "scroll";
        check = true;
    }
}

hamburgerCover.addEventListener("click", burger);