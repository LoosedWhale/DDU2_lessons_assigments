// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

const main = document.querySelector("main");
const n1 = 5;
const n2 = 10;

document.head.innerHTML += '<link rel="stylesheet" href="index.css">';

for (let i = 1; i <= n1; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    main.appendChild(column);

    for (let j = 1; j <= n2; j++) {
        let p = document.createElement('p');
        p.textContent = `${i} x ${j} = ${i * j}`;
        column.appendChild(p);
    }
}


