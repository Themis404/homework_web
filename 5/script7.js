function While1() {
    document.getElementById('answer').value = '';
    let a = document.getElementById('num_A').value;
    let b = document.getElementById('num_B').value;
    let copy_a = +(a);
    if (+(a) > +(b)) {
        while (copy_a >= +(b)) {
          copy_a -= +(b);
        }
        document.getElementById('answer').value = copy_a;
    }
    else {
      document.getElementById('num_A').value = '';
      document.getElementById('num_A').placeholder = 'A > B';
      document.getElementById('num_B').value = '';
      document.getElementById('num_B').placeholder = 'A > B';
    }
}
