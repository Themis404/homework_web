let li = document.getElementsByClassName('in_main')

for (let i=0; i < li.length; i++) {
    li[i].addEventListener('mouseenter', showNavElements, false);
    li[i].addEventListener('mouseleave', hideNavElements, false);
}

function showNavElements(e) {
    this.children[0].style.overflow = 'visible';
    this.children[0].style.opacity = '0.9';
    this.children[0].style.height = 'auto';
    this.children[0].style.top = '0';
    this.children[0].style.transform = 'translateY(100%)';
    this.children[0].style.maxHeight = '100%';
}

function hideNavElements(e) {
    this.children[0].style.overflow = 'hidden';
    this.children[0].style.opacity = '0';
    this.children[0].style.height = '0';
    this.children[0].style.top = '-40px';
    this.children[0].style.transform = 'translateY(0%)';
    this.children[0].style.maxHeight = '0%';
}
