function Minmax1() {
    document.getElementById('num').value = '';
    document.getElementById('min_max_num').value = '';
    let num_random = [];
    let num_min = 100, num_max = 0;
    let n = document.getElementById('num_N').value;
    let i = 0;
    if ( n >= 0) {
        while (i < n) {
        num_random[i] = (Math.floor(Math.random() * (100 - 0)) + 0);
          i += 1;
        }
        document.getElementById('num').value = num_random;
        document.getElementById('min_max_num').value = String(Math.min.apply(null, num_random)) + ' ' + String(Math.max.apply(null, num_random));
    }
    else {
      document.getElementById('num_N').placeholder = 'ПОЛОЖИТЕЛЬНОЕ N';
      document.getElementById('num_N').value = '';
      document.getElementById('num').value = '';
      document.getElementById('min_max_num').value = '';
    }
}
