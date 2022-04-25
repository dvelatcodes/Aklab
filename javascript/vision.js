const hamburgerCover = document.querySelector(".hamburger-cover");
const ham1 = document.querySelector(".ham1");
const ham2 = document.querySelector(".ham2");
const ham3 = document.querySelector(".ham3");
const aside = document.querySelector(".aside");
const body = document.querySelector("body");
let check = true;
const vision = document.querySelector(".vision");

const visionHead = document.querySelector(".vision-head");

const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio > 0) {
        entries[0].target.className = "vision-headswap";  
    }
})

observer.observe(visionHead);











const words = ["To ", "Provide ", "High ", "Quality, ", "Innovative ", "and ", "Safe ", "Industrial ", "Engineering ", "and ", "Technical ", "Services ", "With ", "a ", "Motivated ", "Workforce ", "and ", "a ", "Happy ", "Host ", "Community."];

let showbiz = "";
let i = 0;
let j = 0;
let letters = "";

setTimeout(() => {
    setInterval(function types() {
        if(i < words.length) {
            showbiz = words[i][j];
            letters += showbiz;
            vision.textContent += showbiz;
            j++; 
            if (words[i].length == letters.length) {
                i++;
                j = 0;
                letters = "";
               }
           } 
   }, 300);
   
   
   if (i == words.length - 1) {
       clearInterval(types)
   }
}, 3550) 











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