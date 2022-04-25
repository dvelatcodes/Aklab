const hamburgerCover = document.querySelector(".hamburger-cover");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const aside = document.querySelector(".aside");
let check = true;

const videoMain = document.querySelector(".main__videomain");
const media1 = document.querySelector(".media1-swap");
const clipsectTop = document.querySelector(".clipsect__top");
const clipsectH3 = document.querySelector(".clipsect__h3");
const clipsectH4 = document.querySelector(".clipsect__h4");
const subhead = document.querySelector(".subhead");
const main = document.querySelector(".main");
const contact = document.querySelector(".contact")
const footer = document.querySelector("footer");
const body = document.querySelector("body");
let initialScroll = 0;



const img1 = document.querySelector(".media1__pic1");
const leftArror = document.querySelector(".press-left");
const rightArror = document.querySelector(".press-right");
let pressArror = true;
let pressArrorChecker = 0;



const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("Gmail");
const website = document.getElementById("website");
const compName = document.getElementById("compname");
const dial = document.getElementById("dial");
const info = document.getElementById("info");
const valid = document.getElementById("valid");
const invalid = document.getElementById("invalid");
const valid2 = document.getElementById("valid2");
const invalid2 = document.getElementById("invalid2");
const buttons = document.querySelector(".form1__form__btn");
const lastval = document.querySelector(".lastval");
const lasterr = document.querySelector(".lasterr");
const emailval = document.querySelector(".emailval");
const emailerr = document.querySelector(".emailerr");
const compval = document.querySelector(".compval");
const comperr = document.querySelector(".comperr");
const webval = document.querySelector(".webval");
const weberr = document.querySelector(".weberr");
const dialval = document.querySelector(".dialval");
const dialerr = document.querySelector(".dialerr");




let checker1 = "";
let checker2 = "";
let checker3 = "";
let checker4 = "";
let checker5 = "";
let checker6 = "";
let checker7 = "";



firstName.addEventListener("keyup", () => {
    let store = firstName.value
    let red = /[a-zA-Z]+[\D\S]$/;
    if (store.match(red)) {
        invalid.style.display = "none";
        valid.style.display = "block";
        checker1 = true;
    }
    
    if (store.length > 15 || store.length < 3) {
        invalid.style.display = "block";
        valid.style.display = "none";
        checker1 = false;
    }

    if(store.match(/[!-@]|[\[-`]|[\{-~]|[0-9]|\s/)) {
        invalid.style.display = "block";
        valid.style.display = "none";
        checker1 = false;
    }
})


lastName.addEventListener("keyup", () => {
    let store2 = lastName.value
    let black = /[a-zA-Z]+[\D\S]$/;
    if (store2.match(black)) {
        lasterr.style.display = "none";
        lastval.style.display = "block";
        checker2 = true;
    }
    
    if (store2.length > 15 || store2.length < 3) {
        lasterr.style.display = "block";
        lastval.style.display = "none";
        checker2 = false;
    }

    if(store2.match(/[!-@]|[\[-`]|[\{-~]|[0-9]|\s/)) {
        lasterr.style.display = "block";
        lastval.style.display = "none";
        checker2 = false;
    }
})



email.addEventListener("keyup", () => {
    let store3 = email.value;
    if (store3.match(/[A-Za-z]|[0-9]{0,4}|@gmail\.com/)) {
        emailval.style.display = "block";
        emailerr.style.display = "none";
        checker3 = true;
    }

    if (!store3.match(/@gmail\.com/)) {
        emailval.style.display = "none";
        emailerr.style.display = "block";
        checker3 = false;
    }

    if (store3.length < 11 || store3.length > 40 || store3.match(/[!-\-]|[:-\?]|[\[-`]|[\{-~]|\s|\//)) {
        emailval.style.display = "none";
        emailerr.style.display = "block";
        checker3 = false;
    }
})



website.addEventListener("keyup", () => {
     let store4 = website.value;
     if (store4.length < 4 || store4.length > 25 || !store4.match(/[a-zA-Z]/)) {
         weberr.style.display = "block";
         webval.style.display = "none";
         checker4 = false
     }
     else {
        weberr.style.display = "none";
        webval.style.display = "block";
        checker4 = true;
     }
})

compName.addEventListener("keyup", () => {
    let store5 = compName.value;
    if (store5.length < 4 || store5.length > 25 || !store5.match(/[a-zA-Z]/)) {
        comperr.style.display = "block";
        compval.style.display = "none";
        checker5 = false
    }
    else {
       comperr.style.display = "none";
       compval.style.display = "block";
       checker5 = true;
    }
})


dial.addEventListener("keyup", () => {
    let store6 = dial.value;
    if (store6.match(/[0-9]{6,15}/) && store6.match(/\-{3,6}|/)) {
        dialval.style.display = "block";
        dialerr.style.display = "none";
        checker6 = true;
    }

    if (store6.length < 5 || store6.length > 17 || store6.match(/[a-zA-Z]|[!-,]|[:-@]|[\[-`]|[\{-~]|\s|\/|\./)) {
        dialval.style.display = "none";
        dialerr.style.display = "block";
        checker6 = false;
    }
})


info.addEventListener("keyup", () => {
    let store6 = info.value;
    if(store6.match(/[a-zA-Z]|[0-9]{0,3}/)) {
        invalid2.style.display = "none";
        valid2.style.display = "block";
        checker7 = true;
    }

    if(!store6.match(/([a-zA-Z])/)) {
        invalid2.style.display = "block";
        valid2.style.display = "none";
        checker7 = false;
    }

    if (store6.length < 10 || store6.length > 230 || store6.match(/[\[-`]|[\{-~]|[0-9]/)) {
        invalid2.style.display = "block";
        valid2.style.display = "none";
        checker7 = false;
    }

})




buttons.addEventListener("click", () => {
    if (checker1 == true && checker2 == true && checker3 == true && checker4 == true && checker5 == true && checker6 == true && checker7 == true) {
        firstName.value = "";
        lastName.value = "";
        website.value = "";
        dial.value = "";
        compName.value = "";
        info.value = "";
        email.value = "";
        alert("Thank You For Reaching Out to Aklab, processing request")
    }
})



window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll >= 3) {
        videoMain.classList.add("swap-main-video");
        videoMain.classList.remove("main__videomain");
        media1.classList.add("media1");
        media1.classList.remove("media1-swap");
        clipsectTop.style.background="rgb(11, 109, 255)";
        clipsectH3.style.display="none";
        clipsectH4.style.display="block";
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


rightArror.addEventListener("click", () => {
        if (img1.classList.contains("media1__pic1")) {
            img1.className = "media1__pics2";
            rightArror.style.display = "block";
            leftArror.style.display = "none";
        }
       else if (img1.classList.contains("media1__pics2")) {
            img1.className = "media1__pics3";
            rightArror.style.display = "block";
            leftArror.style.display = "block";
        } 
        else if (img1.classList.contains("media1__pics3")) {
            img1.className = "media1__pics4";
            rightArror.style.display = "none";
            leftArror.style.display = "block";
        }
})

leftArror.addEventListener("click", () => {
    if (img1.classList.contains("media1__pics4")) {
        img1.className = "media1__pics3";
        leftArror.style.display = "block";
        rightArror.style.display = "none";
    }
   else if (img1.classList.contains("media1__pics3")) {
        img1.className = "media1__pics2";
        leftArror.style.display = "block";
        rightArror.style.display = "block";
    } 
    else if (img1.classList.contains("media1__pics2")) {
        img1.className = "media1__pic1";
        leftArror.style.display = "none";
        rightArror.style.display = "block";
    }
})

