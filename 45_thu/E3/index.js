// Med hjälp endast av JS skapa en sida som den i bilden (image)
// Notera att HTML-elementen har redan skapats i HTML-filen
// Du behöver fixa färgerna och lite annat formatering (med JS).
// Du behöver också se till att <img> pekar på bildfilen i mappen media (också det med JS).


document.getElementById('firstLine').style.color = 'red';
document.getElementById('firstLine').style.textAlign = 'center';
document.getElementById('secondLine').style.textAlign = 'center';


const firstItems = document.querySelectorAll('.first');
firstItems.forEach(item => {
    item.style.color = 'blue';
    item.style.textAlign = 'center';
});

const lastItems = document.querySelectorAll('.last');
lastItems.forEach(item => {
    item.style.color = 'green'; 
    item.style.textAlign = 'center';

});

document.querySelector('img').src = 'media/heart.png';

