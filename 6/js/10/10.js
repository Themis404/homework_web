let object = document.getElementById('object');
let startIndex = 100;
let endIndex = 1000;
let pressIndex = 100;

window.addEventListener('keyup', function(){
    if (event.keyCode == '39'){
        if (pressIndex < endIndex){
            pressIndex += 100;
            object.style.left = pressIndex + 'px';
        }
    }
    if (event.keyCode == '37'){
        if (startIndex + 20 < pressIndex){
            pressIndex -= 100;
            object.style.left = pressIndex + 'px';
        }
    }
})