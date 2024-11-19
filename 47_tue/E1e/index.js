// Egentligen saknar koden nedan mening helt och hållet.
// Det är något helt abstrakt som jag har hittat på för att hjälpa dig
// förstå grunden i hur funktioner fungerar.
// Den hjälper INTE förstå varför funktioner kan vara intressanta
// eller vad man kan använda funktioner till.
// Det kommer snart! Bear with me so far!

// Vad kommer det att hända när vi kör programmet nedan?
// Försök att lista ut det och sen kontrollera det genom att köra koden på en webbläsare

function f1 (n) {
  return n - 1;
}

function f2 (n) {
  return n + 2;
}

let a = f1(f2(4));
// a = 5
console.log(a);
// 5
const b = f2(f1(a++));
// a = 5 + 1 = 6, b = f2(f1(5)) = f2(4) = 6
const c = f2(f1(++a));
// a = 5 + 1 = 6, c = f2(f1(6)) = f2(5) = 7
console.log(b, c);
// 6 7


