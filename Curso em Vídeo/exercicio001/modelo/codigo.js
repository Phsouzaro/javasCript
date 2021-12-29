function carregar(){
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('div#foto')
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if(minuto < 10){
        minuto = '0' + minuto
    }
    if(segundo < 10){
        segundo = '0' + segundo
    }

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas`
    if(hora >= 6 && hora < 12){
        foto.style.backgroundImage = 'url("manhã.jpg")'
        document.body.style.backgroundColor = '#a0ccf9'
    }else if(hora >=12 && hora < 18){
        foto.style.backgroundImage = 'url("tarde.jpg")'
        document.body.style.backgroundColor = '#edc497'
    }else{
        foto.style.backgroundImage = 'url("noite.jpg")'
        document.body.style.backgroundColor = '#4c74a5'
    }
}
setInterval( function(){
    carregar()
}, 1000)

