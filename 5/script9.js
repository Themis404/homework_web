function Array1() {
    document.getElementById('arr').value = '';
    let n = document.getElementById('num_N').value;
    let arrey = [];
    let i = 1;
    if (i < n) {
        while (i <= n) {
          arrey += (i*2 - 1) + ' ';
          i += 1;
        }
        document.getElementById('arr').value = arrey;
    }
    else {
        document.getElementById('num_N').placeholder = 'ПОЛОЖИТЕЛЬНОЕ N';
        document.getElementById('num_N').value = '';
        document.getElementById('arr').value = '';
    }
}
