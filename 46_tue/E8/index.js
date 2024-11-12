// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

const main = document.querySelector("main");
const nRows = prompt("Ange antal rader");
const nCols = prompt("Ange antal kolumner");


// Svar till E8
document.head.innerHTML += '<link rel="stylesheet" href="index.css">';

main.style.gridTemplateRows = `repeat(${nRows}, 1fr)`;
main.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;

for (let i = 1; i <= nRows; i++) {
    for (let j = 1; j <= nCols; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = `(${i}, ${j})`;
        main.appendChild(cell);
    }
}
