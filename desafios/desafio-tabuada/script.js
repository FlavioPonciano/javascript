function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpando a area de resultado caso peça um novo resultado
        while (c <= 10) {
            let item = document.createElement('option') // criando um option dentro do select no html
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}` // gerando um value dentro do item que é um option <option value="numero do c" pra saber qual item foi selecionado 
            tab.appendChild(item) // adicionando o elemento filho na tab que é o select
            c++
        }
    }
        
}