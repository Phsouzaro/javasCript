function mostraHora() {
 const data = new Date();

 return data.toLocaleTimeString('pt-BR', {
  hour12: false
 })
}
setInterval(function () {
 console.log(`Hora Atual: ${mostraHora()}`)
}, 1000
)
