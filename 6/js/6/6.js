div = document.getElementById("mydiv")
div.onmousemove = function(e){
    img1 = document.getElementById("myimg1");
    img2 = document.getElementById("myimg2");
    img3 = document.getElementById("myimg3");
    if((e.clientY + img1.clientHeight <= div.offsetTop + div.clientHeight)&&(
        e.clientY >= div.offsetTop)
        ){
            img1.style.top = e.clientY+"px";
            img2.style.top = e.clientY+"px";
            img3.style.top = e.clientY+"px";
    }
    if((e.clientX + img1.clientWidth <= div.offsetLeft + div.clientWidth)&&(
        e.clientX >= div.offsetLeft)
        ){
            img1.style.left = e.clientX+"px";
            img2.style.left = e.clientX+"px";
            img3.style.left = e.clientX+"px";
    }
}
