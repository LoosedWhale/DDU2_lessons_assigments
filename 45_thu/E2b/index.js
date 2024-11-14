// Med hjälp endast av JS skapa en sida som den i bilden
// Använd innerHTML för att skapa de nya elementen

document.addEventListener("DOMContentLoaded", function() {
    const main = document.createElement('main');
    const colors = ['red', 'green', 'blue', 'yellow'];
    
    main.style.display = 'grid';
    main.style.gridTemplateColumns = '1fr 1fr';
    main.style.gridTemplateRows = '1fr 1fr';
    main.style.width = '400px';
    main.style.height = '400px';
    main.style.margin = 'auto';
    main.style.marginTop = '60px';

    let innerHTMLContent = '';
    for (let i = 0; i < colors.length; i++) {
        innerHTMLContent += `<div style="background-color: ${colors[i]}; display: inline-block;"></div>`;
    }
    main.innerHTML = innerHTMLContent;

    document.body.appendChild(main);
});
