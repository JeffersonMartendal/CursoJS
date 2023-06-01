function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor,digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            //cria um elemento option
            let item = document.createElement('option')
            //adiciona o texto abaixo com o valor das variáveis ao item
            item.text = `${n} x ${c} = ${n*c}`
            //adiciona um valor ao item criado na repetição
            item.value = `tab${c}`
            //cria na documento html o item
            tab.appendChild(item)
            //contador recebe contador
            c++
        }
    }
}