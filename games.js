const games = [

{
name: "Game Rummy",
image: "images/gamerummy.png",
bonus: "₹100 Bonus",
category: "Rummy",
page: "games/gamerummy.html"
},

{
name: "Gogo Rummy",
image: "images/gospin.png",
bonus: "₹100 Bonus",
category: "Rummy",
page: "games/gogorummy.html"
},

{
name: "Go Spin",
image: "images/gospin.png",
bonus: "₹88 Bonus",
category: "Casino",
page: "games/gospin.html"
},

{
name: "91 Club",
image: "images/91club.png",
bonus: "₹200 Bonus",
category: "Color Prediction",
page: "games/91club.html"
},

{
name: "Diwa777",
image: "images/diwa777.png",
bonus: "₹150 Bonus",
category: "Casino",
page: "games/diwa777.html"
},

{
name: "Tiranga",
image: "images/tiranga.png",
bonus: "₹501 Bonus",
category: "Color Prediction",
page: "games/tiranga.html"
},

{
name: "Ind Club",
image: "images/indclub.png",
bonus: "₹100 Bonus",
category: "Color Prediction",
page: "games/indclub.html"
},

{
name: "Raja Games",
image: "images/rajagames.png",
bonus: "₹88 Bonus",
category: "Casino",
page: "games/rajagames.html"
},

{
name: "AA Game",
image: "images/aagame.png",
bonus: "₹50 Bonus",
category: "Game",
page: "games/aagame.html"
},

{
name: "Big Mumbai",
image: "images/bigmumbai.png",
bonus: "₹100 Bonus",
category: "Color Prediction",
page: "games/bigmumbai.html"
},

];
const gameGrid = document.querySelector(".game-grid");

function renderGames(list){

gameGrid.innerHTML = "";

list.forEach(game=>{

gameGrid.innerHTML += `

<a href="${game.page}" class="game-card">

<img src="${game.image}" alt="${game.name}">

<h3>${game.name}</h3>

<p>${game.category}</p>

<span class="play-btn">${game.bonus}</span>

</a>

`;

});

}

renderGames(games);

/* SEARCH */

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("input",function(){

const keyword=this.value.toLowerCase();

const filtered=games.filter(game=>

game.name.toLowerCase().includes(keyword) ||

game.category.toLowerCase().includes(keyword)

);

renderGames(filtered);

});

}
/* ==========================
   CATEGORY FILTER
========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const category=button.dataset.category;

if(category==="All"){

renderGames(games);

}else{

const filteredGames=games.filter(game=>game.category===category);

renderGames(filteredGames);

}

});

});

/* ==========================
   TRENDING GAMES
========================== */

function renderTrending(){

const cards=document.querySelectorAll(".game-card");

cards.forEach((card,index)=>{

if(index<3){

const badge=document.createElement("div");

badge.className="trending-badge";

badge.innerHTML="🔥 Trending";

card.appendChild(badge);

}

});

}

renderTrending();

/* ==========================
   PAGE LOADED
========================== */

document.addEventListener("DOMContentLoaded",()=>{

renderGames(games);

renderTrending();

});
