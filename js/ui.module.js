export class Ui {
  displayGames(data) {
    let box = "";
    for (let i = 0; i < data.length; i++) {
      box += `<div class="col">
      <div data-id="${
        data[i].id
      }" class="card bg-transparent h-100" role="button">
        <div class="card-body">
          <figure>
            <img class="card-img-top object-fit-cover h-100" src="${
              data[i].thumbnail
            }"
              alt="Game poster" />
          </figure>
          <figcaption>
            <div class="hstack justify-content-between mb-2">
              <h3 class="h6 small mb-0">${data[i].title}</h3>
              <span class="badge p-2 text-bg-primary">Free</span>
            </div>
            <p class="card-text small text-center opacity-50">
              ${data[i].short_description.split(" ", 8)}
            </p>
          </figcaption>
        </div>
        <footer class="card-footer small hstack justify-content-between">
          <span class="badge badge-color">${data[i].genre}</span>
          <span class="badge badge-color">${data[i].platform}</span>
        </footer>
      </div>
    </div>`;
    }
    document.getElementById("gameData").innerHTML = box;
  }

  displayDetails(data) {
    let box = "";
    box += `<div class="col-md-4">
    <img class="w-100" src="${data.thumbnail}" alt="Game details" />
  </div>
  <div class="col-md-8">
    <h3>Title: ${data.title}</h3>
    <p>
      Category:
      <span class="badge text-bg-info">${data.genre}</span>
    </p>
    <p>
      Platform:
      <span class="badge text-bg-info">${data.platform}</span>
    </p>
    <p>
      Status:
      <span class="badge text-bg-info">${data.status}</span>
    </p>
    <p class="small">
      ${data.description}
    </p>
    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show
      Game</a>
  </div>`;
    document.getElementById("detailsData").innerHTML = box;
  }
}
