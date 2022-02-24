/* 
1. button eventHandler add
2. get input value
    error handling for string value
    error handling for empty value

*/

const searchButton = () => {
  const input = document.getElementById("input-value");
  const error = document.getElementById("error");

  const inputValue = input.value;
  console.log(inputValue);
  if (isNaN(inputValue) || inputValue == "") {
    // isNaN check nuber or string or others-true
    // alert("Please enter a number");
    error.innerText = "Please enter a number";
  } else if (inputValue <= 0) {
    error.innerText = "Please enter a positive number";
  } else {
    error.style.display = "none";
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
      .then((res) => res.json())
      .then((data) => console.log(data.cards));
  }

  input.value = "";
};

const cardsDisplay = (cards) => {
  for (const card of cards) {
    console.log(card);
  }
};
