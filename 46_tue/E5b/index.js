"use strict";

// Studera koden nedan. Vad kommer det att loggas på konsolen?

let names = ["Jim", "Jimmy", "Jimi"];
let a = 10;
for (let name of names) {
  a--;
}
console.log(a);
console.log(names[a]);

// Svar: 7, undefined (names[7] är undefined)