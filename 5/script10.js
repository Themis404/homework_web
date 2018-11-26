function Array18() {
    document.getElementById('array18').value = '';
    let ak = null;
    let randomArr = [];
    let i = 0;
    while (i < 10) {
        randomArr[i] = (Math.floor(Math.random() * (100 - 0)) + 0);
        i += 1;
    }
    i = 0;
    while (i < 9) {
        if ((randomArr[9] > randomArr[i])&&(ak == null)) {
            ak = randomArr[i];
        }
        i += 1;
    }
    document.getElementById('array18').value = randomArr;
    document.getElementById('a10').value = randomArr[9];
    document.getElementById('ak').value = ak;
}
