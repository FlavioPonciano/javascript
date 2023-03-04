function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando um elemento img no html
        img.setAttribute('id', 'foto') // atribuindo um id foto para o elemento img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/crianca-h.jpg')
            } else if (idade > 21) {
                img.setAttribute('src', 'imagens/jovem-h.jpg')
            } else if (idade > 50) {
                img.setAttribute('src', 'imagens/adulto-h.jpg')
            } else {
                img.setAttribute('src', 'imagens/velho-h.jpg')
            }
         }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                
            } else if (idade > 21) {

            } else if (idade > 50) {

            } else {

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} ${idade}`
        res.appendChild(img)
    }
}