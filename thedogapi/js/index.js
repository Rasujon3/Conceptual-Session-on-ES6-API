const loadDog = () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => displayDog(data));
};

const displayDog = (dogsList) => {
  for (const dog of dogsList) {
    console.log(dog);
  }
};
