function timer() {
/* Variaveis e constantes*/

 let segundos = 0
 let timer;
 const span = document.querySelector('.container span')

/* Variaveis e constantes*/
/* Arrow Functions and Functions */

 const transformaTimer = (s) => {
  const data = new Date(s * 1000);
  return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' })
 }
 const mostraHora = () => {
  timer = setInterval(function () {
   segundos++;
   span.innerHTML = transformaTimer(segundos)
  }, 1000)
 }

/* Arrow Functions and Functions */
/* Eventos */

 document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('iniciar')) {
   clearInterval(timer)
   mostraHora();
   span.classList.remove('pausado')
   } if (el.classList.contains('pausar')) {
    clearInterval(timer)
    span.classList.add('pausado')
    }
  if (el.classList.contains('zerar')) {
   clearInterval(timer)
   span.classList.remove('pausado')
   span.innerHTML = '00:00:00'
   segundos = 0
   }
 })
 
/* Eventos */
}

timer();