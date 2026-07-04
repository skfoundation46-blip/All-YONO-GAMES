const search = document.getElementById("search");
const container = document.getElementById("games");

search.addEventListener("keyup", function () {
  const value = search.value.toLowerCase();

  const cards = document.querySelectorAll(".game-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
