img = document.getElementsByClassName('img');
main = document.getElementById('main');
let numImg = 0;

$('.img').bind('click', function(e){
    $('#main').attr("src", this.src);
});
