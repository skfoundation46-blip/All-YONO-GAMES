const searchBox = document.getElementById("searchBox");

const gameCards = document.querySelectorAll(".game-card");


searchBox.addEventListener("input", function(){

const searchValue = this.value.toLowerCase();


gameCards.forEach(function(card){

const gameName = card.querySelector("h3").innerText.toLowerCase();


if(gameName.includes(searchValue)){

card.style.display = "flex";

}else{

card.style.display = "none";

}

});

});
