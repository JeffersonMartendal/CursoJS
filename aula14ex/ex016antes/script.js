function contar() {
    var ini = document.getElementById('inicio').value
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.querySelector('input#passo').value)
    var res = document.querySelector('div#res')
    var num = []
    var i = ini

    if (ini === String()) {
        res.innerHTML = `Impossível contar`
        //res.innerHTML = `Impossível contar 01`
    } 
    else if (fim == 0) {
        res.innerHTML = `Impossível contar`
    }
    else if (pas == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        var ini = Number(document.getElementById('inicio').value)
        var i = ini
        pas = 1
        while (i <= fim) {
            num.push(i)
            i += pas
        }
        res.innerHTML = `Contando:<br>` + num.join("👉") + " 👉🏴"
    }
    else {
        var ini = Number(document.getElementById('inicio').value)
        var i = ini
        while ((ini <= fim && i <= fim) || (ini >= fim && i >= fim)) {
            num.push(i)
            i += pas
        }
        res.innerHTML = `Contando:<br>` + num.join("👉") + " 👉🏴"
    }
    
    //res.innerHTML = `O valor de inicio é ${ini} o valor de fim é ${fim} e o valor de passo é ${pas}👉🏴` 
}