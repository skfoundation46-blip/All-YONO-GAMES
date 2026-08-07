const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("../data/games.json")
  .then(res => res.json())
  .then(games => {

    const game = games.find(g => g.id === id);

    if (!game) {
      document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Game Not Found</h2>";
      return;
    }

    document.title = game.name;

    document.getElementById("name").textContent = game.name;

    document.getElementById("logo").src = "../" + game.logo;

    document.getElementById("rating").textContent = game.rating;

    document.getElementById("bonus").textContent = game.bonus;

    document.getElementById("download").href = game.download;

    document.getElementById("about").textContent =
      game.name +
      " is a mobile gaming app with exciting gameplay, welcome bonus, daily rewards and a smooth user experience. Download the app using the button above to get started.";
  });
