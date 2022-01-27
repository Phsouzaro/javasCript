
const primeiroNumero = Math.ceil(Math.random() * 60)
const segundoNumero = Math.ceil(Math.random() * 60)
//Funcões
const imprimirResultados = (n1, n2) => n1 > n2 ? `Maior numero: ${n1}` : `Maior numero: ${n2}`
//fim das Funcões

console.log(imprimirResultados(primeiroNumero, segundoNumero));