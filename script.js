const gamesContainer = document.getElementById("gamesContainer");
const searchInput = document.getElementById("searchInput");

function displayGames(list){

gamesContainer.innerHTML="";

list.forEach(game=>{

gamesContainer.innerHTML+=`

<div class="game-card">

<div class="game-image">

<img src="${game.image}" alt="${game.name}">

<div class="trending-badge">HOT</div>

</div>

<div class="game-content">

<h3 class="game-title">${game.name}</h3>

<div class="rating">

⭐⭐⭐⭐⭐

<span>${game.rating}</span>

</div>

<div class="download-count">

📥 ${game.downloads} Downloads

</div>

<div class="bonus-box">

🎁 Welcome Bonus ${game.bonus}

</div>

<div class="withdraw-box">

🏦 Min Withdraw ${game.withdraw}

</div>

<a href="${game.page}" class="download-btn">

Download APK

</a>

</div>

</div>

`;

});

}

displayGames(games);

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const result=games.filter(game=>

game.name.toLowerCase().includes(value)

);

displayGames(result);

});
/* ==========================
   SCROLL TO TOP
========================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.display = "flex";

}else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================
   PAGE LOADER
========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},800);

}

});


/* ==========================
   AUTO IMAGE SLIDER
========================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

if(slides.length > 0){

showSlide(0);

setInterval(nextSlide,3000);

}


/* ==========================
   ACTIVE MENU
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(item=>{

item.classList.remove("active");

});

this.classList.add("active");

});

});


/* ==========================
   CARD FADE ANIMATION
========================== */

const cards=document.querySelectorAll(".game-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});
