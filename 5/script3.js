function If1() {
    let info = document.getElementById('num').value;
    if (Number.isInteger( +(info) ) ) {
        if (info > 0) {
          document.getElementById('num').value = +(info) + 1;
        }
    }
    else {
      document.getElementById('num').value = '';
      document.getElementById('num').placeholder = 'ВВЕДИТЕ ЦЕЛОЕ ЧИСЛО';
    }
}
