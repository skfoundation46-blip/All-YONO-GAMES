// ===== SEARCH =====

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});

// ===== BACK TO TOP =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// ===== CARD ANIMATION =====

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".game-card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.5s";

observer.observe(card);

});

// ===== IMAGE ERROR =====

document.querySelectorAll(".game-card img").forEach(img=>{

img.onerror=function(){

this.src="images/default.png";

};

});
