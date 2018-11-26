img = document.getElementsByClassName('img');
main = document.getElementById('main');
let numImg = 0;

for (let i = 0; i < img.length; i++){
    console.log(img[i]);
    img[i].addEventListener('click', () => {
        main.src = img[i].src;
    })
}