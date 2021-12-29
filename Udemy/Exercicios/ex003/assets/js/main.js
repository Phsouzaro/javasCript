function meuEscopo(){
 /**constantes declaradas */
const form = document.querySelector('#formulario')
const peso = form.querySelector('#peso')
const altura = form.querySelector('#altura')
const resultado = document.querySelector('#resultado')
const grauIMC = {abaixoPeso: 'Abaixo do Peso',pesoNormal: 'Peso normal',pesoIdeal: 'Peso ideal',
obeso1: 'Obesidade Grau 1',obeso2: 'Obesidade Grau 2',obeso3: 'Obesidade Grau 3'}
 /**constantes declaradas */

 function calculaImc(){
  let resultadoIMC = Number(peso.value) / Number((altura.value.replace(',', '.') * altura.value.replace(',', '.')))

  return resultadoIMC
 }
 function mostraResultado(){
  if(!calculaImc()){
   resultado.innerHTML = `<p class='paragrafo-resultado bad'>Peso inválido</p>`
  }else if(calculaImc() <= 18.5){
   resultado.innerHTML = `<p class='paragrafo-resultado'> Seu IMC é ${calculaImc().toFixed(2)} 
   (${grauIMC.abaixoPeso})</p>`
  }else if(calculaImc() <= 24.9){
   resultado.innerHTML = `<p class='paragrafo-resultado'> Seu IMC é ${calculaImc().toFixed(2)}
    (${grauIMC.pesoNormal})</p>`
  }else if(calculaImc() <= 29.9){
   resultado.innerHTML = `<p class='paragrafo-resultado'> Seu IMC é ${calculaImc().toFixed(2)} 
   (${grauIMC.pesoIdeal})</p>`
  }else if(calculaImc() <= 34.9){
   resultado.innerHTML = `<p class='paragrafo-resultado bad'> Seu IMC é ${calculaImc().toFixed(2)} 
   (${grauIMC.obeso1})</p>`
  }else if(calculaImc() <= 39.9){
   resultado.innerHTML = `<p class='paragrafo-resultado bad'> Seu IMC é ${calculaImc().toFixed(2)} 
   (${grauIMC.obeso2})</p>`
  }else{
   resultado.innerHTML = `<p class='paragrafo-resultado bad'> Seu IMC é ${calculaImc().toFixed(2)} 
   (${grauIMC.obeso3})</p>`
  }
 }

 function recebeFormulario(evento){
  evento.preventDefault();
  mostraResultado();
  peso.value = ''
  altura.value = ''
  peso.focus()
  console.log(calculaImc());
 }
 form.addEventListener('submit', recebeFormulario);
}

meuEscopo();