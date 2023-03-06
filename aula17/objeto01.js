let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
engordar(p=0){ // uma função dentro de uma variável
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2) // dando parametro para a função
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)