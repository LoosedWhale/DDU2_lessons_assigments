"use strict";

let names = ["Jimi", "Janis"];

// Utgå från arrayen ovan och, med hjälp av for-loopar, skapa en array med namnet namesx10
// som ser ut så här: ["Jimi", "Janis", ... varje namn 10 ggr]
// Du får inte arrayen manuellt.

// För att kontrollera att arrayen blev korrekt:
// 1) Logga den i slutet 
// 2) Skriv alla element på webbsidan

let namesx10 = [];

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < names.length; j++) {
        namesx10.push(names[j]);
    }

}

console.log(namesx10);

document.body.innerHTML = namesx10.join("<br>");