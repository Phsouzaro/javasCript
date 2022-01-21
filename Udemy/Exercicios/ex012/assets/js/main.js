
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

const nomePessoa = pessoas.map(obj => obj.nome);
console.log(nomePessoa);
console.log('*************************');
const removeNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removeNome);
console.log('*************************');
const adicionaId = pessoas.map((obj, index) => {
  const newObj = { ...obj };
  newObj.id = index + 1001;
  return newObj;
});
console.log(adicionaId);
console.log(adicionaId.map(valor => valor.id));
console.log('*************************');






