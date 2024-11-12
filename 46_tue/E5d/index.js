"use strict";

// Utgå från arrayerna nedan.
// Koda ett program som resulterar i en webbsida som den som visas på bilden.

const names = ["Janis", "Nina", "Jimi"];
const surnames = ["Joplin", "Simone", "Hendrix"];

for (let i = 0; i < names.length; i++) {
    document.body.innerHTML += `<p>${names[i]} ${surnames[i]}</p>`;
}


// Skapa en ny array som innehåller för- och efternamn tillsammans. Alternativ lösning 

/*
const fullName = [];

for (let i = 0; i < names.length; i++) {
  fullName.push(`${names[i]} ${surnames[i]}`);
}

// Skriv ut arrayen på webbsidan.
for (let i = 0; i < fullName.length; i++) {
    document.body.innerHTML += `<p>${fullName[i]}</p>`;
}
*/