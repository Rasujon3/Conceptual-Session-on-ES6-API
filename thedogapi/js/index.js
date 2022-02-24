const loadDog = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};

const displayDog = (dogsList) => {
  const main = document.getElementById("main");
  const first10Data = dogsList.slice(0, 10);
  for (const dog of dogsList) {
    const div = document.createElement("div");
    div.className =
      "col-lg-4 col-md-6 col-sm-12 border border-5 border-light rounded";
    div.innerHTML = `
        <h2>${dog.name}</h2>
        <p>${dog.temperament}</p>
        <h5>Weight: ${dog.weight.imperial} kg</h5>
        <img width='400px' height='250px' src="${dog.image.url}" />
    `;
    main.appendChild(div);
  }
};
