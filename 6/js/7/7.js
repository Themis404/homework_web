img = document.getElementById("myimg");
let numImg = 1;

setInterval(function(){
    if (numImg > 7){
        numImg = 0;
    }
    img.src =  numImg + ".gif";
    console.log( numImg + ".gif")
    numImg++;
    }, 180)
