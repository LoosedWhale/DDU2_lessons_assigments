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

let a = f1(1) + f2(3);
console.log(a + f2(a));