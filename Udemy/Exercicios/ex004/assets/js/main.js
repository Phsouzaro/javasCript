const titulo = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
 weekday: 'long', 
 year: 'numeric', 
 month: 'long', 
 day: 'numeric', 
 hour: 'numeric',
 minute: 'numeric',
}
 titulo.innerHTML = data.toLocaleDateString(undefined, opcoes)




