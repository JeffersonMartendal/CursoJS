let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //window.alert('Tudo OK')
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!');
        return;
    }
    let quantidade = valores.length
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = valores.reduce((a,b) => a + b, 0)
    let media = soma / quantidade

    res.innerHTML = `</br> Ao todo, temos ${quantidade} números cadastrados. </br>
                    </br>
                    O maior valor informado foi ${maior} </br>
                    </br>
                    O menor valor informado foi ${menor} </br>
                    </br>
                    Somando todos os valores, temos ${soma} </br>
                    </br>
                    A média dos valores digitados é ${media.toFixed(1)} </br>`
    
}
