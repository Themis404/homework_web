function Case1() {
    let info = document.getElementById('num_day').value;
        switch (+(info)) {
            case 1:
              document.getElementById('day').value = 'понедельник';
              break;
            case 2:
              document.getElementById('day').value = 'вторник';
              break;
            case 3:
              document.getElementById('day').value = 'среда';
              break;
            case 4:
              document.getElementById('day').value = 'четверг';
              break;
            case 5:
              document.getElementById('day').value = 'пятница';
              break;
            case 6:
              document.getElementById('day').value = 'суббота';
              break;
            case 7:
              document.getElementById('day').value = 'воскресенье';
              break;
            default:
            document.getElementById('num_day').value = '';
            document.getElementById('day').value = '';
            document.getElementById('num_day').placeholder = 'ВВЕДИТЕ ЧИСЛО 1-7';
            break;
        }
}
