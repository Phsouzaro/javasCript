function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 10){
                //criança
                img.setAttribute('src','crianca-m.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idoso-m.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade < 10){
                //criança
                img.setAttribute('src','crianca-f.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','jovem-f.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}