function tabuada() {
    var num = document.getElementById('num').value
    var tes = document.getElementById('test')
    tes.innerHTML = ""
    if (num === String()) {
        alert('Por favor, digite um número!')
    } else {
        var num = parseInt(document.getElementById("num").value)
        var mul = 1
        while (mul <= 10) {
            var res = num * mul
            var opt = document.createElement('option')
            opt.text = num + " x " + mul + " = " + res
            tes.add(opt)
            mul++
        }
    }
}