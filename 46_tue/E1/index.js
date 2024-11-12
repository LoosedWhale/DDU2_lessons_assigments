"use strict";

// Koda en for-loop vars kropp består endast av instruktionen console.log(counter);
// och som loggar följande siffror på konsolen:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// OBS I videorna har vi använt variabelnamnet i istället för counter.

for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}

// Samma som ovan men dessa siffror istället:
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (let counter = 10; counter > 0; counter--) {
    console.log(counter);
}

// Samma som ovan men dessa siffror istället:
// 2, 4, 6, 8
for (let counter = 2; counter <= 8; counter += 2) {
    console.log(counter);
}


// Samma som ovan men dessa siffror istället:
// 42, 36, 30
for (let counter = 42; counter >= 30; counter -= 6) {
    console.log(counter);
}