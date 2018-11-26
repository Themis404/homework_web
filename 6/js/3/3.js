let main = document.getElementsByTagName('th')
let cell = document.getElementsByTagName('td')

for (let i=0; i < main.length; i++){
    main[i].style.background = 'blue';
    main[i].style.color = 'darkblue';
    main[i].style.border = '2px solid #00005A';
    main[i].style.borderCollapse = 'collapse '
    main[i].style.textAlign = 'center'; 
}
for (let i=0; i < cell.length; i++){
    cell[i].style.background = 'white';
    cell[i].style.color = 'blue';
    cell[i].style.border = '2px solid LightBlue'; 
    cell[i].style.borderCollapse = 'collapse '
    cell[i].style.textAlign = 'center'; 
}

form.addEventListener('click', () => {
    for (let i=0; i < main.length; i++){
        main[i].style.background = 'blue';
        main[i].style.color = 'darkblue';
    }
    for (let i=0; i < cell.length; i++){
        cell[i].style.background = 'white';
        cell[i].style.color = 'blue';
    }
})

form.addEventListener('contextmenu', () => {
    for (let i=0; i < main.length; i++){
        main[i].style.background = 'darkblue';
        main[i].style.color = 'blue';
    }
    for (let i=0; i < cell.length; i++){
        cell[i].style.background = 'blue';
        cell[i].style.color = 'white';
    }
})
