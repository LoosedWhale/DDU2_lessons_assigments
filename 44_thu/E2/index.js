
const c1 = "blue";
const c2 = "#AA0000"; // red
const c3 = "rgb(0,255,0)"; // green
const c4 = "hotpink";
const n1 = "20px";

/* Använd konstanterna ovan för att:
    - A-lådan ska fyllas med blå färg
    - D-lådan ska fyllas med röd färg
 */

/* Använd konstanterna ovan för att:
    - kanten (border) av lådorna i första raden ska bli grön
    - kanten (border) av lådorna i andra kolumnen ska ha en radie på 20px
 */

document.getElementById('A').style.backgroundColor = c1;
document.getElementById('D').style.backgroundColor = c2;

const firstRowBoxes = document.querySelectorAll('.rad1');
firstRowBoxes.forEach(box => {
    box.style.borderColor = c3;
});

const secondColumnBoxes = document.querySelectorAll('.col2');
secondColumnBoxes.forEach(box => {
    box.style.borderRadius = n1;
});
