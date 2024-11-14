// Gör samma sak som i E4a men denna gång ska programmet
// kontrollera om siffran är delbar med alla siffror mellan 2 och 99

// Du måste använda en for-loop, du kan inte skriva en
// if-sats för varje siffra.

// Se videon.


const number = prompt("Ange en siffra");

const main = document.querySelector("main");

for (let i = 2; i < 100; i++) {
    if (number % i === 0) {
        main.innerHTML += `<p>siffran ${number} är delbar med ${i}</p>`;
    }
}



