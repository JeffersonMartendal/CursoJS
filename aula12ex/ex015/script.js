function verificar() {
    //variável para pegar a data atual
    var data = new Date()
    //variável para pegar o ano completo com 4 dígitos
    var ano = data.getFullYear()
    //variável para pegar o ano digitado pelo usuario | está atrelado ao HTML 
    var fano = document.getElementById('txtano')
    //variável para pegar o texto / modificar o texto da div
    var res = document.querySelector('div#res')
    //condição para saber se foi digitado um valor acima do ano atual ou se é igual a 0 para informar uma mensagem de erro
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { //então
        //variável para poder saber qual foi a seleção de sexo M ou F
        var fsex = document.getElementsByName('radsex')
        //variável para saber a idade da pessoa com o ano atual menos o ano digitado pela pessoa
        var idade = ano - Number(fano.value)
        //variável para inserir a informação homem ou mulher logo abaixo
        var gênero = ''
        //variável para criar uma tag img como se fosse em HTML porém em JS
        var img = document.createElement('img')
        //atribuindo um id = 'foto' para a imagem criada acima
        img.setAttribute('id', 'foto')
        //condição para saber se foi marcado masculino ou feminino, 0 masculino, 1 feminino
        if (fsex[0].checked) {
            gênero = 'Homem'
            //condição para saber idade
            if (idade >= 0 && idade < 10) {
                // Criança
                // Atribuindo informçaõ a IMG com a referência da imagem indicada abaixo
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        // Alinhando o texto ao centro
        res.style.textAlign = 'center'
        // Colocando o texto abaixo e exibindo as variáveis
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        // Exibindo a imagem
        res.appendChild(img)
    }
}