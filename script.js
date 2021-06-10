let naam = prompt("Welkom! wat is je naam?");
console.log(naam);

// COMPUTER KIES RANDOM NUMMER
const min = 1;
const max = 25;

let computedNumber = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

const numberToGuess = computedNumber(min, max);
console.log(computedNumber(min, max));

//TE RADEN NUMMER INVOEREN
let guess = prompt("Hey " + naam + ", voer een nummer in tussen 1 en 25.");
console.log(guess);

//Checken of nummers overeenkomen
let checkNumber = function(guess, numberToGuess) {
    if(guess != numberToGuess) {
        alert("Helaas, probeer het nog een keer.")
    }
    else {
        alert("Gefeliciteerd, je hebt gewonnen!")
    }
};

let result = checkNumber(guess, numberToGuess);
console.log(result);





