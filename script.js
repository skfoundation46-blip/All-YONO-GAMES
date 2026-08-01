const games = [
  {
    name: "Game Rummy",
    image: "gamerummy.png",
    bonus: "Welcome Bonus ₹300",
    rating: "4.9",
    downloads: "10M+",
    trusted: true,
    link: "games/gamerummy.html"
  },
  {
    name: "Go Spin",
    image: "gospin.png",
    bonus: "Welcome Bonus ₹450",
    rating: "4.8",
    downloads: "8M+",
    trusted: true,
    link: "games/gospin.html"
  },
  {
    name: "Hindi 777",
    image: "Hindi777.png",
    bonus: "Welcome Bonus ₹500",
    rating: "4.9",
    downloads: "12M+",
    trusted: true,
    link: "games/hindi777.html"
  },
  {
    name: "Hi Rummy",
    image: "HiRummy.png",
    bonus: "Welcome Bonus ₹500",
    rating: "4.9",
    downloads: "9M+",
    trusted: true,
    link: "games/hirummy.html"
  },
  {
    name: "Ind Club",
    image: "indclub.png",
    bonus: "Welcome Bonus ₹250",
    rating: "4.8",
    downloads: "7M+",
    trusted: true,
    link: "games/indclub.html"
  },
  {
    name: "Ind Slots",
    image: "indslots.png",
    bonus: "Welcome Bonus ₹400",
    rating: "4.8",
    downloads: "6M+",
    trusted: true,
    link: "games/indslots.html"
  },
  {
    name: "MQM Bet",
    image: "mqmbet.png",
    bonus: "Welcome Bonus ₹500",
    rating: "4.7",
    downloads: "5M+",
    trusted: true,
    link: "games/mqmbet.html"
  },
  {
    name: "INR Rummy",
    image: "inrrummy.png",
    bonus: "Welcome Bonus ₹500",
    rating: "4.9",
    downloads: "11M+",
    trusted: true,
    link: "games/inrrummy.html"
  }
];

const gameList = document.getElementById("gameList");
const searchInput = document.getElementById("searchInput");

function renderGames(list) {
  gameList.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="images/${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>

      <div class="meta">
        <span>⭐ ${game.rating}</span>
        <span>📥 ${game.downloads}</span>
      </div>

      <p class="bonus">${game.bonus}</p>

      ${game.trusted ? '<div class="trusted">✔ Trusted</div>' : ''}

      <a href="${game.link}" class="download-btn">Download</a>
    `;

    gameList.appendChild(card);
  });
}

renderGames(games);

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = games.filter(game =>
    game.name.toLowerCase().includes(value)
  );

  renderGames(filtered);
});
