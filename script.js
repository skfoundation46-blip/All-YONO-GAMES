// ===== Search Games =====

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".game-card");

cards.forEach(card => {

let title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

// ===== Back To Top =====

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
