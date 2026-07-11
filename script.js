/* =====================================
   ALL YONO GAMES
   script.js
===================================== */

/* Search Games */

const searchBox = document.getElementById("searchBox");

const gameCards = document.querySelectorAll(".game-card");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        gameCards.forEach(function(card){

            const title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(value)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}

/* Back To Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* Card Hover Animation */

gameCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.transform = "translateY(0px)";

    });

});

/* Fade In Animation */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".game-card").forEach((el)=>{

    observer.observe(el);

});
/* ===========================
   LOADING ANIMATION
=========================== */

window.addEventListener("load", function(){

    document.body.classList.add("loaded");

});

/* ===========================
   WELCOME MESSAGE
=========================== */

setTimeout(function(){

    console.log("Welcome to All YONO Games");

},1000);

/* ===========================
   DOWNLOAD BUTTON EFFECT
=========================== */

const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(function(button){

    button.addEventListener("click",function(){

        button.innerHTML="Opening...";

        setTimeout(function(){

            button.innerHTML="Download";

        },2000);

    });

});

/* ===========================
   SHARE WEBSITE
=========================== */

function shareWebsite(){

    if(navigator.share){

        navigator.share({

            title:"All YONO Games",

            text:"Download Latest YONO Games",

            url:window.location.href

        });

    }

}

/* ===========================
   COPY LINK
=========================== */

function copyLink(){

    navigator.clipboard.writeText(window.location.href);

    alert("Website Link Copied");

}

/* ===========================
   CURRENT YEAR
=========================== */

const year=document.getElementById("year");

if(year){

    year.innerHTML=new Date().getFullYear();

}

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("All YONO Games Loaded Successfully");
