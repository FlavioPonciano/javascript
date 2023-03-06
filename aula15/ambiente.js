let num = [5, 8, 2, 9, 3]
num.push(1) // se eu adicionar esse comando antes do sort ele vai alinhar os itens e depois adicionar o elemento
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo elemento do vetor é ${num[1]}`)

console.log('------')

// Mostrar os elementos de um vetor utilizando estrutura de repetição
let valores = [8, 1, 7, 4, 2, 9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('------')

// Formato menor e mais utilizado
let vetor = [8, 1, 7, 4, 2, 9]
vetor.sort()
for(let pos in vetor) { // para cada posição em vetor, vou mostrar o vetor[pos]. todo array é um objeto no js
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

console.log('------')

let procura = [5, 8, 2, 9, 3]
let pos = procura.indexOf(9) // vai mostrar no resultado a posição desse elemento
let naoContem = procura.indexOf(10) // vai retornar -1 pois o valor não será encontrado dentro do array
console.log(`O valor 9 está na posiçãp ${pos}`) // retornou a posição
console.log(`O valor 10 está na posiçãp ${naoContem}`) // retornou -1

if (naoContem == -1) { // posso unir o index com uma condicional para mostrar uma mensagem mais amigavel ao usuario
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 10 está na posiçãp ${naoContem}`) 
}