  const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");

let games = [];

async function loadGames() {
    try {
        const response = await fetch("data/games.json");
        games = await response.json();
        renderGames(games);
    } catch (err) {
        gameList.innerHTML = "<p>Unable to load games.</p>";
        console.error(err);
    }
}

function renderGames(list) {

    gameList.innerHTML = "";

    list.forEach(game => {

        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <img src="${game.logo}" alt="${game.name}" loading="lazy">

            <h3>${game.name}</h3>

            <div class="meta">
                ⭐ ${game.rating} &nbsp; | &nbsp; 🎁 ${game.bonus}
            </div>

            <div class="trusted">
                ✔ Trusted
            </div>

            <a href="game.html?id=${game.id}" class="download-btn">
                Download Now
            </a>
        `;

        gameList.appendChild(card);

    });

}

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(value)
    );

    renderGames(filtered);

});

loadGames();
