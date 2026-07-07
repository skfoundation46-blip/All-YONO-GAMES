/* ==========================
   ALL YONO GAMES
   script.js
========================== */

/* Search Games */

function searchGames() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}


/* Scroll To Top Button */

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/* Scroll Button Style */

topBtn.style.position = "fixed";
topBtn.style.right = "18px";
topBtn.style.bottom = "18px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00e676";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px rgba(0,230,118,.5)";
topBtn.style.zIndex = "9999";


/* Current Year (Optional) */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
/* ==========================
   CARD ANIMATION
========================== */

const cards = document.querySelectorAll(".game-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show-card");

}

});

},{threshold:0.2});

cards.forEach(card=>{

observer.observe(card);

});


/* ==========================
   IMAGE LOADING EFFECT
========================== */

document.querySelectorAll(".game-logo").forEach(img=>{

img.onload=()=>{

img.style.opacity="1";

img.style.transform="scale(1)";

};

img.style.opacity="0";

img.style.transform="scale(.9)";

img.style.transition=".4s";

});


/* ==========================
   TELEGRAM BUTTON EFFECT
========================== */

const telegramBtn=document.querySelector(".telegram-btn");

if(telegramBtn){

setInterval(()=>{

telegramBtn.classList.toggle("pulse");

},1000);

}


/* ==========================
   HEADER SHADOW
========================== */

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});
/* ==========================
   PRELOADER
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});


/* ==========================
   DOWNLOAD BUTTON EFFECT
========================== */

document.querySelectorAll(".download-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="⏳ Opening...";

setTimeout(()=>{

btn.innerHTML="📥 Download Now";

},1500);

});

});


/* ==========================
   GAME CARD TOUCH EFFECT
========================== */

document.querySelectorAll(".game-card").forEach(card=>{

card.addEventListener("touchstart",()=>{

card.style.transform="scale(.97)";

});

card.addEventListener("touchend",()=>{

card.style.transform="scale(1)";

});

});


/* ==========================
   PAGE READY
========================== */

console.log("ALL YONO GAMES Loaded Successfully");
/* ==========================
   GAME COUNTER
========================== */

const totalGames = document.querySelectorAll(".game-card").length;

const gameCounter = document.getElementById("gameCount");

if (gameCounter) {

    gameCounter.innerHTML = totalGames + "+ Games";

}


/* ==========================
   SEARCH RESULT COUNTER
========================== */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let visible = 0;

        document.querySelectorAll(".game-card").forEach(card => {

            if (card.style.display !== "none") {

                visible++;

            }

        });

        const result = document.getElementById("resultCount");

        if (result) {

            result.innerHTML = visible + " Games Found";

        }

    });

}


/* ==========================
   DOWNLOAD BUTTON RIPPLE
========================== */

document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = e.offsetX + "px";

        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("🚀 ALL YONO GAMES - Mobile Version Loaded Successfully");
