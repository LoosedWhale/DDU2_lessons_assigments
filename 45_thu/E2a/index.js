// Med hjälp endast av JS skapa en sida som den i bilden
// Använd INTE innerHTML

// Skapa en main med 4 divar i sig som ska ha olika färger och vara lika stora i bredd och höjd

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

    for (let i = 0; i < colors.length; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = colors[i];
        div.style.display = 'inline-block';
        main.appendChild(div);
    }

    document.body.appendChild(main);
});
