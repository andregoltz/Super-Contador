function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if ( i < f){
            //Contagem crescente
            for (var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F3C8}`
            }
        }else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F3C8}`
            }
            
        }
        res.innerHTML += ` \u{1f3c6}`
        img.setAttribute('src', 'comemoracao.jpg')
        res.appendChild(img)
    }


}