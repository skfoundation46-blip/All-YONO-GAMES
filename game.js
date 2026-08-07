const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("data/games.json")
.then(res => res.json())
.then(games => {

const game = games.find(g => g.id === id);

if(!game){
document.body.innerHTML="<h1 style='text-align:center;padding:50px'>Game Not Found</h1>";
return;
}

document.title = game.name + " | All YONO Games New";

document.getElementById("name").innerText = game.name;
document.getElementById("logo").src = game.logo;
document.getElementById("logo2").src = game.logo;
document.getElementById("logo3").src = game.logo;
document.getElementById("logo4").src = game.logo;

document.getElementById("rating").innerText = game.rating;
document.getElementById("bonus").innerText = game.bonus;

document.getElementById("download").href = game.download;
document.getElementById("stickyDownload").href = game.download;

document.getElementById("about").innerHTML =
`${game.name} is one of the most popular gaming platforms. It offers welcome bonuses, daily rewards, fast registration, and a smooth mobile gaming experience.`;

const related=document.getElementById("relatedGames");

games
.filter(g=>g.id!==game.id)
.slice(0,6)
.forEach(g=>{

related.innerHTML+=`

<a class="related-item" href="game.html?id=${g.id}">

<img src="${g.logo}" alt="${g.name}">

<h4>${g.name}</h4>

<p>⭐ ${g.rating}</p>

</a>

`;

});

});
