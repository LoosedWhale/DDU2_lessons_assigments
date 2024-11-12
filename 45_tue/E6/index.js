let a1 = ["Jimi", "Janis"];
let a2 = ["Tina", "Peter"];
let o_format1 = { firstName: "Nina", lastName: "Simone", born: "1 May 2000" };
let o_format2 = {
  name: {
    first: "Bruce",
    last: "Springsteen"
  },
  born: {
    year: 2000,
    month: "March",
    day: 23,
  }
};


// Skapa och skriv ut en array som har dessa element och i denna ordning:
// ["Jimi", "Janis", "Nina", "Bruce", "Tina", "Peter"]
// Använd endast datan som finns ovan

// Ta bort alla pojknamn från arrayen. Skriv ut det första elementet i arrayen


let combinedArray = a1.concat(o_format1.firstName, o_format2.name.first, a2);
console.log(combinedArray);

combinedArray.splice(combinedArray.indexOf("Peter"), 1);
combinedArray.splice(combinedArray.indexOf("Bruce"), 1);
console.log(combinedArray[0]);
