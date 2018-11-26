let bgMain = document.getElementById('bgMain')
let main = document.getElementById('main')
let button = document.getElementById('button')
let img = document.getElementsByTagName('img')

button.addEventListener('click', () => {
    main.style.display = 'none';
    bgMain.style.display = 'none';
})

bgMain.addEventListener('click', () => {
    main.style.display = 'none';
    bgMain.style.display = 'none';
})

for (let i = 0; i < img.length; i++){
    img[i].addEventListener('click', () => {
        main.src = img[i].src;
        main.style.display = 'block';
        bgMain.style.display = 'block';
    })
}