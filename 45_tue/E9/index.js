/*
Kolla på koden och försök att svara på ALLA frågor. Skriv ner svaren på en bit papper.
Sen kan du köra koden (ladda html-filen på webbservern) och kontrollera om du svarade rätt.
Om du inte svarade rätt, försök att förtå varför svaret blev som det blev.
Fråga gärna assisstenterna eller läraren om något är oklart.
*/

const a1 = [23, 2, 65, 1, 63, 1, 5];
let a2 = [];
let i = 0;

// Vad kommer att loggas på konsolen?
console.log(a1[i++]);
//Svar: 23

// Vad kommer att loggas på konsolen?
console.log(a1[i]);
//Svar: 2

// Vad kommer att loggas på konsolen?
a2.push(a1[++i]);
console.log(a2[i]);
//Svar: undefined

console.log(a2[0]);
//Svar: 65

console.log(i);
//Svar: 2

// Vad kommer att loggas på konsolen?
console.log(i++);
//Svar: 2

console.log(++i);
//Svar: 4

console.log(i);
//Svar: 4
