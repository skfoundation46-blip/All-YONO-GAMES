document.addEventListener("DOMContentLoaded", () => {

  const gameList = document.getElementById("gameList");
  const searchInput = document.getElementById("searchInput");
  const gameCounter = document.getElementById("gameCounter");
  const totalGames = document.getElementById("totalGames");
  const noResults = document.getElementById("noResults");

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  const backToTop = document.getElementById("backToTop");
  const tabs = document.querySelectorAll(".game-tab");

  let games = [];
  let activeCategory = "all";


  /* ================= LOAD GAMES ================= */

  async function loadGames() {

    try {

      const response = await fetch("data/games.json");

      if (!response.ok) {
        throw new Error("Unable to load games.json");
      }

      games = await response.json();

      if (!Array.isArray(games)) {
        throw new Error("games.json must contain an array");
      }

      updateTotal();
      renderGames();

    } catch (error) {

      console.error(error);

      gameList.innerHTML = `
        <div class="loading-card">
          <p>Unable to load games.</p>
          <small>
            Please check data/games.json
          </small>
        </div>
      `;

    }

  }


  /* ================= TOTAL ================= */

  function updateTotal() {

    const count = games.length;

    gameCounter.textContent = `${count} Games`;

    totalGames.textContent = `${count}+`;

  }


  /* ================= CATEGORY ================= */

  function getCategory(game) {

    const text = `${game.name || ""} ${game.category || ""}`.toLowerCase();

    if (
      text.includes("rummy")
    ) {
      return "rummy";
    }

    if (
      text.includes("slot") ||
      text.includes("spin")
    ) {
      return "slots";
    }

    return "other";

  }


  /* ================= FILTER ================= */

  function getFilteredGames() {

    const searchValue =
      searchInput.value
        .trim()
        .toLowerCase();


    return games.filter(game => {

      const name =
        String(game.name || "")
          .toLowerCase();

      const category =
        getCategory(game);


      const matchesSearch =
        name.includes(searchValue);


      const matchesCategory =
        activeCategory === "all" ||
        category === activeCategory;


      return matchesSearch && matchesCategory;

    });

  }


  /* ================= RENDER ================= */

  function renderGames() {

    const filteredGames = getFilteredGames();

    gameList.innerHTML = "";

    gameCounter.textContent =
      `${filteredGames.length} Games`;


    if (filteredGames.length === 0) {

      noResults.hidden = false;

      return;

    }


    noResults.hidden = true;


    filteredGames.forEach((game, index) => {

      const card =
        document.createElement("article");

      card.className = "game-card";


      /* IMAGE */

      const image =
        document.createElement("img");

      image.src =
        `images/${game.image}`;

      image.alt =
        game.name || "Game";

      image.loading =
        index < 4 ? "eager" : "lazy";


      image.onerror = function () {

        this.src =
          "images/allyonogamesnew.png";

      };


      /* NAME */

      const title =
        document.createElement("h3");

      title.textContent =
        game.name || "Game";


      /* META */

      const meta =
        document.createElement("div");

      meta.className =
        "game-meta";


      const rating =
        document.createElement("span");

      rating.textContent =
        `⭐ ${game.rating || "N/A"}`;


      const downloads =
        document.createElement("span");

      downloads.textContent =
        `📥 ${game.downloads || "N/A"}`;


      meta.appendChild(rating);
      meta.appendChild(downloads);


      /* BONUS */

      const bonus =
        document.createElement("p");

      bonus.className =
        "game-bonus";

      bonus.textContent =
        game.bonus || "Game Information";


      /* DOWNLOAD BUTTON */

      const button =
        document.createElement("a");

      button.className =
        "download-btn";

      button.textContent =
        "View Game";


      button.href =
        game.link || "#";


      /* BUILD CARD */

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(bonus);
      card.appendChild(button);


      gameList.appendChild(card);

    });

  }


  /* ================= SEARCH ================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderGames
    );

  }


  /* ================= TABS ================= */

  tabs.forEach(tab => {

    tab.addEventListener("click", () => {

      tabs.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      activeCategory =
        tab.dataset.category || "all";

      renderGames();

    });

  });


  /* ================= MOBILE MENU ================= */

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      mainNav.classList.toggle("open");

    });


    mainNav.querySelectorAll("a")
      .forEach(link => {

        link.addEventListener("click", () => {

          mainNav.classList.remove("open");

        });

      });

  }


  /* ================= BACK TO TOP ================= */

  window.addEventListener("scroll", () => {

    if (!backToTop) return;


    if (window.scrollY > 400) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  });


  if (backToTop) {

    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* ================= START ================= */

  loadGames();

});
