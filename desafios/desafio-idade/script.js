function verificar() { //puxando a function
    var data = new Date() // trazendo informações de data e hora
    var ano = data.getFullYear() // puxando o ano com o valor completo
    var fano = document.getElementById('txtano') // puxando o ano que o usuario digitou
    var res = document.querySelector('div#res') // puxando a div de resultado
    if (fano.value.length == 0 || Number(fano.value) > ano) { // se o ano for igual a zero ou maiior que o ano atual
        window.alert('Verifique os dados e tente novamente!') // mensagem de erro
    } else { // se não, segue o código
        var fsex = document.getElementsByName('radsex') // trazendo os elementos do input radio
        var idade = ano - Number(fano.value) // calculando a idade
        var genero = '' // abrindo uma variavel 
        var img = document.createElement('img') // criando uma tag img como se fosse no html
        img.setAttribute('id', 'foto') // atribuindo um id foto para a tag img
        if (fsex[0].checked) { // condicional do botao radio na posicao 0
            genero = 'Homem' // se a posicao do botão radio for 0 fsex recebe um variavel homem
            if (idade >= 0 && idade < 10) { // se idade for maior ou igual a zero e menor que dez
                //Criança
                img.setAttribute('src', 'imagens/crianca-m.png') // a tag imagem vai puxar a imagem selecionada
            } else if (idade < 21) { // se não se a idade for menor que 21
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) { // se não se a idade for menor que 50
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else { // se não for nenhuma das opções acima
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) { // no mesmo formato se a posicao do radio for 1
            genero = 'Mulher' // genero recebe a variavel mulher
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // fazendo o alinhamento ao centro na div res
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // escrevendo na div res
        res.appendChild(img) // mostrando a tag imagem na div res
    }
}