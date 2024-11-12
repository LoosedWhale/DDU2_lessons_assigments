
let t1 = "WDU";
let t2 = "IS";
let t3 = "DA";
let t4 = "SHIT!";

/*
Använd variablerna ovan för att få webbsidan att se ut:

    WDU      IS

    DA      SHIT!

(där du alltså fyller divarna med rätt innehåll)
*/

document.getElementById('A').textContent = t1;
document.getElementById('B').textContent = t2;
document.getElementById('C').textContent = t3;
document.getElementById('D').textContent = t4;


/*

Se till (med hjälp av javascript, såklart) att griden ser istället ut såhär:

    WDU     IS      DA      SHIT!

*/

document.getElementById('container').style.gridTemplateColumns = '1fr 1fr 1fr 1fr';