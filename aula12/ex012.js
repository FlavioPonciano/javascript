var agora = new Date() // para puxar informações de data e hora do sistema sempre usar Date()
var hora = agora.getHours() // para puxar alguma das funções do Date() puxar com o .get()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) { // se hora for menor que 12
    console.log('Bom dia!')
} else if (hora <=18) { // se não, se hora for menor ou igual a 18
    console.log('Boa tarde!')
} else { // se hora não for menor que 12 e se não for menor ou igual a 18
    console.log('Boa noite!')
}