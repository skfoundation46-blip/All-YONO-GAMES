// ===============================
// ALL YONO GAMES NEW
// script.js - Part 1
// ===============================

// Elements
const top3Container = document.getElementById("top3");
const gamesContainer = document.getElementById("games");
const searchInput = document.getElementById("search");

// ===============================
// TOP 3 GAMES
// ===============================

function renderTopGames(){

const topGames = games.slice(0,3);

top3Container.innerHTML = "";

topGames.forEach((game,index)=>{

const card = document.createElement("div");

card.className = `rank-card rank${index+1}`;

card.innerHTML = `

<div class="badge">${index+1}</div>

<img src="${game.image}" alt="${game.name}">

<h3>${game.name}</h3>

<p>⭐ ${game.rating}</p>

<p>🎁 ${game.bonus}</p>

<a href="games/${game.page}" class="download-btn">
Download
</a>

`;

top3Container.appendChild(card);

});

}

// ===============================
// LOAD TOP 3
// ===============================

renderTopGames();
// ===============================
// ALL GAMES
// script.js - Part 2
// ===============================

function renderGames(list = games){

gamesContainer.innerHTML = "";

list.forEach((game)=>{

const card = document.createElement("div");

card.className = "game-card";

card.innerHTML = `

<img src="${game.image}" alt="${game.name}">

<div class="game-info">

<h3>${game.name}</h3>

<p>⭐ ${game.rating}</p>

<p>🎁 ${game.bonus}</p>

<a href="games/${game.page}" class="download-btn">

Download

</a>

</div>

`;

gamesContainer.appendChild(card);

});

// Total Games Count

const totalGames = document.getElementById("totalGames");

if(totalGames){

totalGames.innerHTML = list.length + " Games";

}

}

// ===============================
// LOAD ALL GAMES
// ===============================

renderGames();
// ===============================
// SEARCH GAMES
// script.js - Part 3
// ===============================

if(searchInput){

searchInput.addEventListener("keyup",function(){

const keyword = this.value.trim().toLowerCase();

if(keyword === ""){

renderGames(games);
return;

}

const filteredGames = games.filter(game=>{

return (
game.name.toLowerCase().includes(keyword) ||
game.bonus.toLowerCase().includes(keyword)
);

});

renderGames(filteredGames);

});

}

// ===============================
// ENTER KEY SEARCH
// ===============================

searchInput?.addEventListener("keypress",function(e){

if(e.key==="Enter"){

e.preventDefault();

}

});

// ===============================
// NO RESULT
// ===============================

function renderGames(list = games){

gamesContainer.innerHTML = "";

if(list.length===0){

gamesContainer.innerHTML=`

<div class="no-result">

<h2>😔 No Game Found</h2>

<p>Please search another game.</p>

</div>

`;

return;

}

list.forEach((game)=>{

const card=document.createElement("div");

card.className="game-card";

card.innerHTML=`

<img src="${game.image}" alt="${game.name}">

<div class="game-info">

<h3>${game.name}</h3>

<p>⭐ ${game.rating}</p>

<p>🎁 ${game.bonus}</p>

<a href="games/${game.page}" class="download-btn">

Download

</a>

</div>

`;

gamesContainer.appendChild(card);

});

const totalGames=document.getElementById("totalGames");

if(totalGames){

totalGames.innerHTML=list.length+" Games";

}

}
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

}

});

// ===============================
// SCROLL TO TOP
// ===============================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

scrollTopBtn.style.display = "flex";

}else{

scrollTopBtn.style.display = "none";

}

});

scrollTopBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// ACTIVE MENU
// ===============================

const navLinks = document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>{

item.classList.remove("active");

});

link.classList.add("active");

});

});

// ===============================
// DOWNLOAD BUTTON EFFECT
// ===============================

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("download-btn")){

e.target.innerHTML="Opening...";

setTimeout(()=>{

e.target.innerHTML="Download";

},1500);

}

});

// ===============================
// TOTAL GAMES
// ===============================

const totalGames = document.getElementById("totalGames");

if(totalGames){

totalGames.innerHTML = games.length + " Games";

}
// =======================================
// script.js - Part 5 (FINAL)
// =======================================

// Card Animation
const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {
threshold: 0.2
});

// Observe Cards
function observeCards(){

document.querySelectorAll(".game-card,.rank-card").forEach((card)=>{

observer.observe(card);

});

}

// First Load
observeCards();

// Observe again after rendering
const oldRenderGames = renderGames;

renderGames = function(list = games){

oldRenderGames(list);

observeCards();

};

// Welcome Message
console.log("✅ ALL YONO GAMES NEW Loaded");

// Disable Right Click
document.addEventListener("contextmenu",function(e){

e.preventDefault();

});

// Disable Drag Images
document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

// Lazy Loading Images
document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// Refresh Total Games
const total = document.getElementById("totalGames");

if(total){

total.innerText = games.length + " Games Available";

}

// END
