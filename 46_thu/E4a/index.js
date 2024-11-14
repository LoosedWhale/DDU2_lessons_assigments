// Skriv ett program som frågar efter en siffra (prompt)
// Om siffran är delbar med 2 så ska det skrivas i <main>:
//    "siffran X är delbar med 2" (där X är siffran som användaren angav)
// Om siffran är delbar med 3 så ska det skrivas i <main>:
//    "siffran X är delbar med 3" (där X är siffran som användaren angav)
// Om siffran är delbar med 4 så ska det skrivas i <main>:
//    "siffran X är delbar med 4" (där X är siffran som användaren angav)

// Notera att det finns en del siffror som är delbara med 2, 3 och 4, och då
// måste alla texter komma på webbsidan.
// Se videon.

const number = prompt("Ange en siffra");
const main = document.querySelector("main");

for (let i = 2; i <= 4; i++) {
    if (number % i === 0) {
        main.innerHTML += `<p>siffran ${number} är delbar med ${i}</p>`;
    }
}
