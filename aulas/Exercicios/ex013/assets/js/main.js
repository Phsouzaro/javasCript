const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaiorQDez = numeros.filter(valor => valor > 10)

numerosMaiorQDez.sort((a, b) => a - b)
console.log(numerosMaiorQDez);
console.log('**********************************');

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

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5);
const pessoasIdadeMaiorTrinta = pessoas.filter(valor => valor.idade > 30);
const nomeTerminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));



console.log(pessoasComNomeGrande)
console.log('**********************************');
console.log(pessoasIdadeMaiorTrinta)
console.log('**********************************');
console.log(nomeTerminaComA)



