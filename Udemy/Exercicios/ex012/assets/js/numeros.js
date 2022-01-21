const numerosQueJaSairam = [02, 11, 17, 18, 22, 33, 34, 35, 37, 38, 40, 41, 42, 51, 53, 56, 58]
const numerosParaJogar = []
let numeroAtual = 0
/* FUNCAO PARA GERAR NUMEROS ALEATORIOS */
function numerosAleatorios(){
 const numeroRandom = Number(Math.floor(Math.random()*60))
 numeroAtual = numeroRandom
 return numeroRandom
}
/* FUNCAO PARA GERAR NUMEROS ALEATORIOS */
/* WHILE PARA ADICIONAR O NUMERO QUE AINDA NAO TEM NO ARRAY PARA JOGAR */
while(numerosParaJogar.length < 6){
 if(numerosQueJaSairam.includes(numerosAleatorios())){
  if(!numerosParaJogar.includes(numeroAtual)) numerosParaJogar.push(numeroAtual) 
 }
}
/* WHILE PARA ADICIONAR O NUMERO QUE AINDA NAO TEM NO ARRAY PARA JOGAR */
/* FOR PARA ITERAR O ARRAY E DAR OS NUMEROS PARA JOGAR */
numerosParaJogar.sort((a,b) => a - b); //Organiza os numeros do maior para o menor.
for(let numeros of numerosParaJogar){
 console.log(`Numero para Jogar ${numeros}`)
}
/* FOR PARA ITERAR O ARRAY E DAR OS NUMEROS PARA JOGAR */