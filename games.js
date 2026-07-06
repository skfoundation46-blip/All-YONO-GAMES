const games = [

{
name:"Diwa777",
image:"images/diwa777.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/diwa777.html"
},

{
name:"Game Rummy",
image:"images/gamerummy.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/gamerummy.html"
},

{
name:"Go Spin",
image:"images/gospin.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/gospin.html"
},

{
name:"Hindi777",
image:"images/hindi777.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/hindi777.html"
},

{
name:"Hi Rummy",
image:"images/hirummy.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/hirummy.html"
},

{
name:"IND Club",
image:"images/indclub.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/indclub.html"
},

{
name:"IND Slots",
image:"images/indslots.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/indslots.html"
},

{
name:"91 Club",
image:"images/91club.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/91club.html"
},

{
name:"55 Club",
image:"images/55club.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/55club.html"
},

{
name:"82 Lottery",
image:"images/82lottery.png",
bonus:"₹100 Bonus",
redeem:"Min ₹100",
page:"games/82lottery.html"
}

];

const gameContainer=document.getElementById("games");

games.forEach(game=>{

gameContainer.innerHTML+=`

<div class="game-card">

<a href="${game.page}" style="text-decoration:none;color:inherit;">

<img src="${game.image}" alt="${game.name}">

<h3>${game.name}</h3>

<div class="rating">⭐⭐⭐⭐⭐</div>

<div class="downloads">10M+ Downloads</div>

<div class="redeem">${game.redeem}</div>

<button class="download-btn">
Download Now
</button>

</a>

</div>

`;

});
