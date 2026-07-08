const gamesContainer = document.getElementById("gamesContainer");
const searchInput = document.getElementById("searchInput");

function createCard(game) {
    return `
    <div class="game-card">
        <img src="${game.image}" alt="${game.name}">
        <div class="game-info">
            <h3>${game.name}</h3>
            <p>⭐ ${game.rating}</p>
            <p>🎁 Bonus ${game.bonus}</p>
            <p>💰 Withdraw ${game.withdraw}</p>

            <a href="${game.page}" class="download-btn">
                Download
            </a>
        </div>
    </div>`;
}

function loadGames(list) {
    gamesContainer.innerHTML = "";
    list.forEach(game => {
        gamesContainer.innerHTML += createCard(game);
    });
}

loadGames(games);

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const filter = games.filter(game =>
            game.name.toLowerCase().includes(value)
        );

        loadGames(filter);

    });
}

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});

const topBtn = document.getElementById("scrollTopBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
