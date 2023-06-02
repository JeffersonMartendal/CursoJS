let num = [5, 8, 2, 9, 3]
num.push(1)
//num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//indexOf serve para procurar um valor dentro de um array, não confundir valor com key(chave de indíce) caso ele não encontre o valor ele irá retornar -1 caso ele encontre ele vai retornar a key(chave índice que seria a posição do valor dentro do array) 
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 8 está na posição ${pos}`)
}