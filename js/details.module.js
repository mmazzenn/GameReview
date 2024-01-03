import { Ui } from "./ui.module.js";

export class Details {
  constructor(gameId) {
    this.ui = new Ui();

    document.querySelector("#btnClose").addEventListener("click", () => {
      document.querySelector(".details").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });

    this.getDetails(gameId);
  }

  async getDetails(id) {
    let load = document.querySelector(".loading");
    load.classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "810731500emsh325c3de2272d98cp12446cjsne3344067baf2",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let res = await fetch(url, options);
    let resData = await res.json();
    this.ui.displayDetails(resData);
    load.classList.add("d-none");
  }
}
