
const pessoas = [
  { nome: 'Pedro', idade: 22 },
  { nome: 'Fernanda', idade: 24 },
  { nome: 'Tania', idade: 20 },
  { nome: 'Elizane', idade: 42 },
  { nome: 'Renato', idade: 40 },
  { nome: 'Eunice', idade: 62 },
  { nome: 'Idelvone', idade: 40 },
  { nome: 'Danilo', idade: 40 }
]


const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
})

console.log(maisVelha);



