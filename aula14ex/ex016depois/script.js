function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //nesta condição do if ele verifica se o valor da variavel tem o tamanho 0 neste caso ele consegue saber se está vazio ou se o numero que está dentro da variavel realmente é zero.
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        //cria uma variavel i para receber o valor de ini e ele converte em Number este valor de ini
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
        //contador começa no inicio, e enquanto o contador for menor do que o fim, ele recebe ele mesmo mais o passo.
            for(let c = i; c <= f; c += p) { //Contagem crescente
            //aqui temos o resultado escrevendo no corpo html e concatenando o contador pra cada repetição. 
            //a forma de colocar emoji em JS é colocando o \ (contra-barra) + o u e entre chaves a numeração então o código de emoji é assim U+1F600 porém fica assim em JS: \u{1f600}
                res.innerHTML += `${c} \u{1F449}`
            }
            //coloca uma bandeira no final
            
        }
        else {
            for(let c = i; c >= f; c -= p) { //Contagem regressiva
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}