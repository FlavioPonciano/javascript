function contar() {
    var recebe_inicio = document.getElementById('recebeInicio')
    var recebe_fim = document.getElementById('recebeFim')
    var recebe_passo = document.getElementById('recebePasso')
    var resultado = document.querySelector('div#resultado')

    var inicio = Number(recebe_inicio.value)
    var fim = Number(recebe_fim.value)
    var passo = Number(recebe_passo.value)
    
     // Verifica se os valores digitados são válidos
    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('[Erro] Digite um número válido!')
    } else {
        var contador = 0
        var numeros = ''
        // Loop para construir a string com os números
        for (contador = inicio; contador <= fim; contador += passo) {
            numeros += contador + '👉'
            
        }
         // Exibe a string com os números no elemento "resultado" - precisa estar fora do laço para mostrar cada elemento e não só o ultimo
        resultado.innerHTML = `${numeros} ${fim + '🏁'}`
    }
}
