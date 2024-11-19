"use strict";

/*

Skapa en funktion som tar emot följande argument:
  path: en sträng
  parent: en referens till ett HTML-element

Funktionen ska skapa ett img-element, placera det i elementet
som refereras till i argumentet parent och se till att img-elementet
visar bilden som finns på argumentet path.

Testa funktionen genom att lägga till en bildfil i mappen och, med
hjälp av din funktion, skapa ett <img> som visar den bilden.

*/

const userInputToImage = prompt("Input a path to an image and Input a parent element");  

const path = userInputToImage.split(" ")[0];
let parent = userInputToImage.split(" ")[1];
parent = document.querySelector(parent);


function createImage(path, parent) {
  const img = document.createElement('img');
  img.src = path;
  parent.appendChild(img);
}

createImage(path, parent);
