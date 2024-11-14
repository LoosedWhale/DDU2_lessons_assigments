// Skriv ett program som ber om en sträng och 
// loggar på konsolen hur många "a"-tecken (gemene)
// som finns i strängen.

const text = prompt("Skriv en text");

let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
        count++;
    }
}

console.log(count);
