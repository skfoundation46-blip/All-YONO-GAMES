
// ==============================
// DISPLAY ALL GAMES
// ==============================

const gamesContainer = document.getElementById("gamesContainer");

function displayGames(list){

    gamesContainer.innerHTML = "";

    list.forEach(game=>{

        gamesContainer.innerHTML += `

        <div class="game-card">

            <img src="${game.image}" alt="${game.name}">

            <div class="game-info">

                <h3>${game.name}</h3>

                <p>⭐ ${game.rating}</p>

                <p>🎁 ${game.bonus}</p>

                <p>💸 Withdraw ${game.withdraw}</p>

                <a href="${game.download}" target="_blank" class="download-btn">

                    Download

                </a>

            </div>

        </div>

        `;

    });

}

displayGames(games);


// ==============================
// SEARCH
// ==============================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const result=games.filter(game=>

game.name.toLowerCase().includes(keyword)

);

displayGames(result);

});


// ==============================
// SCROLL BUTTON
// ==============================

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==============================
// LOADER
// ==============================

window.onload=function(){

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

};
