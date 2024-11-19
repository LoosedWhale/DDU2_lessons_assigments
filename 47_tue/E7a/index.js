/*
Koda en sida som gör det du ser på videon.
Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/


let message = prompt("What is your message?");
let color = prompt("Which color?");

function loudSpeaker(message, color) {
    const h1 = document.querySelector('h1');

    for (let i = 0; i < message.length; i++) {
        const div = document.createElement('div');
        div.textContent = message[i];
        div.style.backgroundColor = color;
        h1.appendChild(div);
    }
}

loudSpeaker(message, color);
