let naam = prompt("Welkom! wat is je naam?");
console.log(naam);

// COMPUTER KIES RANDOM NUMMER
const min = 1;
const max = 25;
let computedNumber = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const numberToGuess = computedNumber(min, max);
console.log(numberToGuess);

//TE RADEN NUMMER INVOEREN
let guess = prompt("Hey " + naam + ", voer een nummer in tussen 1 en 25.");
console.log(guess);

//Checken of nummers overeenkomen
let checkNumber = function(guess, numberToGuess) {
    if (guess != numberToGuess) {
        alert("Helaas, dat is niet correct. Probeer het nog een keer.")
        let guess = prompt("Voer nogmaals een nummer in tussen 1 en 25.");
        checkNumber(guess, numberToGuess);
    }
    else {
        alert("Gefeliciteerd, je hebt gewonnen!")
        alert("Dag " + naam + ". Tot de volgende keer!")
    }
}

checkNumber(guess, numberToGuess);



