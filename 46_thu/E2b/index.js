// Skriv ett program som frågar efter en text (prompt)
// Om texten startar med "A" (notera versal) 
// eller med "B" eller med "C" så ska det loggas på
// konsolen "Texten startar med A" (eller B eller C, beroende på)
// Annars ska det loggas "Texten startar inte med A , B eller C".

text = prompt("Skriv en text");

if (text.charAt(0) === "A" || text.charAt(0) === "B" || text.charAt(0) === "C") {
    console.log(`Texten startar med ${text.charAt(0)}`);
}
else {
    console.log("Texten startar inte med A, B eller C");
}
