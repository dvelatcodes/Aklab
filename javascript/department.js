const hamburgerCover = document.querySelector(".hamburger-cover");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const aside = document.querySelector(".aside");
const body = document.querySelector("body");
let check = true;
let swap = true;
const mech = document.querySelector(".mech");
const mech1 = document.querySelector(".mech__icon1");
const mech2 = document.querySelector(".mech__icon2");
const mechH3 = document.querySelector(".mech__content");
const elect1 = document.querySelector(".elect__icon1");
const elect2 = document.querySelector(".elect__icon2");
const electH3 = document.querySelector(".elect__content");
let swap2 = true;
const thermal1 = document.querySelector(".thermal__icon1");
const thermal2 = document.querySelector(".thermal__icon2");
const thermalH3 = document.querySelector(".thermal__content");
let swap3 = true;
const piping1 = document.querySelector(".piping__icon1");
const piping2 = document.querySelector(".piping__icon2");
const pipingH3 = document.querySelector(".piping__content");
let swap4 = true;
const building1 = document.querySelector(".building__icon1");
const building2 = document.querySelector(".building__icon2");
const buildingH3 = document.querySelector(".building__content");
let swap5 = true;


mech2.addEventListener("click", () => {
    if (swap) {
        mech1.className = "mech__icon1__swap";
        mech2.className = "mech__icon2__swap";
        mechH3.className = "mech__content__swap";
        swap = false
    }

    else if (!swap){
        mech1.className = "mech__icon1";
        mech2.className = "mech__icon2";
        mechH3.className = "mech__content";
        swap = true;
    }
})

elect2.addEventListener("click", () => {
    if (swap2) {
        elect1.className = "elect__icon1__swap";
        elect2.className = "elect__icon2__swap";
        electH3.className = "elect__content__swap";
        swap2 = false
    }

    else if (!swap2){
        elect1.className = "elect__icon1";
        elect2.className = "elect__icon2";
        electH3.className = "elect__content";
        swap2 = true;
    }
})

thermal2.addEventListener("click", () => {
    if (swap3) {
        thermal1.classList = "thermal__icon1__swap";
        thermal2.classList = "thermal__icon2__swap";
        thermalH3.classList = "thermal__content__swap";
        swap3 = false
    }

    else if (!swap3){
        thermal1.classList = "thermal__icon1";
        thermal2.classList = "thermal__icon2";
        thermalH3.classList = "thermal__content";
        swap3 = true;
    }
})

piping2.addEventListener("click", () => {
    if (swap4) {
        piping1.className = "piping__icon1__swap";
        piping2.className = "piping__icon2__swap";
        pipingH3.className = "piping__content__swap";
        swap4 = false
    }

    else if (!swap4){
        piping1.className = "piping__icon1";
        piping2.className = "piping__icon2";
        pipingH3.className = "piping__content";
        swap4 = true;
    }
})


building2.addEventListener("click", () => {
    if (swap5) {
        building1.className = "building__icon1__swap";
        building2.className = "building__icon2__swap";
        buildingH3.className = "building__content__swap";
        swap5 = false
    }

    else if (!swap5){
        building1.className = "building__icon1";
        building2.className = "building__icon2";
        buildingH3.className = "building__content";
        swap5 = true;
    }
})


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