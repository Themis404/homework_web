let text = document.getElementById('text')

text.onkeypress = function (){
    this.value = this.value.replace(/[A-ZА-ЯЁ]+/g,'')
}