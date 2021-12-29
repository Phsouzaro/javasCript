const numero = Number(prompt('Digite um Numero'))
const spanTitulo = document.getElementById('titulo')
const res = document.getElementById('res')

console.log(numero);
spanTitulo.innerHTML = numero


res.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)} </p>`
res.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
res.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`
res.innerHTML += `<p>arredondado para baixo: ${Math.floor(numero)}</p>`
res.innerHTML += `<p>arredondado para cima: ${Math.ceil(numero)}</p>`
res.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`