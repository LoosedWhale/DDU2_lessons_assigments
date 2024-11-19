/*
Koda en sida som den du ser på bilden.
Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/

function separatedLetters(name) {
  const div = document.createElement("div");
  div.classList.add("name");
  for (let letter of name) {
    const letterDiv = document.createElement("div");
    letterDiv.textContent = letter;
    div.append(letterDiv);
  }
  return div;
}


const names = [
  "Alina", "Anahita", "Anna", "Anoli", "Artin", "Asir", "Elias", "Elin", "Ellen", "Emira", "Felicia", "Gustaf", "Henrik", "Jennifer", "Jonah", "Josefin", "Judy", "Katarina", "Klara", "Leith", "Linus", "Maja", "Markus", "Medina", "Michelle", "Moa", "Monique", "Neo", "Omaimaa", "Oscar", "Peggy", "Philip", "Rawad", "Rebecca", "Robin", "Sala", "Sara", "Sebastian", "Sigge", "Simon", "Theodor", "Tiffany", "Tilde", "Yehor", "Zahra", "Zoie"
];

const Main = document.querySelector("main");

for (let name of names) {
  Main.append(separatedLetters(name));
}


