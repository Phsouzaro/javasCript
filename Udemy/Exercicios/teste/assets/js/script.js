const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const data = new Date();

function attHora() {
 let hora = data.getHours();
 
 return (hora < 10)? hora = '0' + hora: hora;
}
function attMinutos() {
 let minuto = data.getMinutes();
 
 return (minuto < 10)? minuto = '0' + minuto: minuto;
}
function attSegundos() {
 let segundo = data.getSeconds();
 return (segundo < 10)? segundo = '0' + segundo: segundo;
}

function adicionaHoraMinutoSegundoAoSpan(){
 horas.innerHTML = attHora()
 minutos.innerHTML = attMinutos()
 segundos.innerHTML = attSegundos()
}

function mostrarHoraCompleta(){
 setInterval(function(){
  console.log(`${attHora()}:${attMinutos()}:${attSegundos()}`)
  adicionaHoraMinutoSegundoAoSpan()
 }, 1000)
}

mostrarHoraCompleta();

