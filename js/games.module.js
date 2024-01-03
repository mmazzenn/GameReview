import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class GAME {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
        this.getGames(link.getAttribute("aria-category"));
      });
    });

    this.ui = new Ui();
  }
  async getGames(category) {
    let load = document.querySelector(".loading");
    load.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "810731500emsh325c3de2272d98cp12446cjsne3344067baf2",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let res = await fetch(url, options);
    let resData = await res.json();
    this.ui.displayGames(resData);
    this.detailsEvent();
    load.classList.add("d-none");
  }

  detailsEvent() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.showDetails(card.getAttribute("data-id"));
      });
    });
  }

  showDetails(gameId) {
    const details = new Details(gameId);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
