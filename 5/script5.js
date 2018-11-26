function For1() {
    document.getElementById('answer').value = '';
    let k = document.getElementById('num_K').value;
    let n = document.getElementById('num_N').value;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
          document.getElementById('answer').value += k;
        }
    }
    else {
      document.getElementById('num_N').value = '';
      document.getElementById('num_N').placeholder = 'ПОЛОЖИТЕЛЬНОЕ ЧИСЛО';
    }
}
