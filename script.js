// Search Games

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".game-card");

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ===============================
// Display Games
// ===============================

const gamesContainer = document.getElementById("gamesContainer");

if (gamesContainer && typeof games !== "undefined") {

    games.forEach(game => {

        gamesContainer.innerHTML += `

        <div class="game-card">

            <img src="${game.image}" alt="${game.name}">

            <div class="game-info">

                <h3>${game.name}</h3>

                <p>⭐ ${game.rating}</p>

                <p>🎁 Welcome Bonus: ${game.bonus}</p>

                <p>💰 Withdraw: ${game.withdraw}</p>

                <a href="${game.downloadUrl}" target="_blank" class="download-btn">
                    Download
                </a>

            </div>

        </div>

        `;

    });

}

// ===============================
// Loader
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// ===============================
// Banner Slider
// ===============================

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    if (slides.length === 0) return;

    slides.forEach(slide => {

        slide.style.display = "none";

    });

    slideIndex++;

    if (slideIndex > slides.length) {

        slideIndex = 1;

    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}

showSlides();
