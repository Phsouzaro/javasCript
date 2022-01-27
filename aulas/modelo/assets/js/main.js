const numerosQueJaSairam = [02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58]
const numerosParaJogar = []
let numeroAtual = 0
const botao = document.querySelector('.botao')
const res = document.querySelector('.resultado')
function numerosAleatorios(){
 const numeroRandom = Number(Math.floor(Math.random()*60))
 numeroAtual = numeroRandom
 return numeroRandom
}
function criaP(){
 const p = document.createElement('p')
 return p
}

function addNumerosAoDiv(){
 while(numerosParaJogar.length < 6){
  if(numerosQueJaSairam.includes(numerosAleatorios())){
   if(!numerosParaJogar.includes(numeroAtual)) numerosParaJogar.push(numeroAtual) 
  }
 }
 const p = criaP()
 numerosParaJogar.sort((a,b) => a - b); 
 for(let numeros of numerosParaJogar){
  const addP = p.innerHTML = `Numero para Jogar ${numeros}`
 
 res.innerHTML = addP
}
 

}
 botao.addEventListener('click', addNumerosAoDiv)