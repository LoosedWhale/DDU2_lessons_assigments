// Skapa ett nytt p-element, lägg till det i body och sedan
// använd konstanterna för att skriva på webbsidan:
// WDU är bäst
// (notera mellanslagen)

const c1 = "WDU";
const c2 = "är";
const c3 = "bäst";
const c4 = " ";

const p = document.createElement("p");
p.textContent = c1 + c4 + c2 + c4 + c3;
document.body.appendChild(p);

