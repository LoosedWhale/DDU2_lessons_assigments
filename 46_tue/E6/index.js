// Koda ett program som skapar en sida som den som visas på video.
// - Den frågar efter en siffra
// - Den skriver ut alla siffror i ordningen inne i <main> med en <br>-tagg
//   mellan varje siffra

// Notera att det finns en index.css men den är inte länkad från
// index.html. Du måste skapa link-elementet från JS.
// Kom ihåg att link-element ingår i head-elementet.


// Skapa en länk till css-filen
document.head.innerHTML += '<link rel="stylesheet" href="index.css">';

// Hämta befintligt main-element
const main = document.querySelector('main');

// Fråga efter en siffra med prompt
const number = prompt('Skriv en siffra');
for (let i = 1; i <= number; i++) {
    main.innerHTML += i + '<br>';
}
