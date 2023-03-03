var idade = 25
console.log(`Você tem ${idade} anos`)
if (idade < 16) { // se idade for menor que 16
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) { // se idade for menor que 18 ou maior que 65
    console.log('Voto opcional')
} else { // se idade não for nenhuma das outras opções
    console.log('Voto obrigatório')
}