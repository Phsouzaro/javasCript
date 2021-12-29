let num = document.querySelector('input#txtnumero')
let lista = document.querySelector('select#opcoes')
let res = document.querySelector('div#finalizar')
let valores = []

function isNumero(n){
 if(Number(n) >= 1 && Number(n) <= 100){
  return true
 }else{
  return false
 }
}

function inLista(n, l){
 if(l.indexOf(n) != -1){
  return false
 }else{
  return false
 }
}

function adicionar(){
 if(isNumero(num.value) && !inLista(Number(num.value), valores)){
  valores.push(num.value)
  var item = document.createElement('option')
  item.text = `Valor ${num.value} adicionado`
  lista.appendChild(item)
  res.innerHTML = ''
 }else{
  window.alert('Valor invalido!')
 }

 num.value = ''
 num.focus()
}

function finalizar(){

if(valores.length == 0){
 alert('nao há valores para mostrar')
}else{
 let total = valores.length
 let maior = valores[0]
 let menor = valores[0]
 let soma = 0
 let media = 0
 for( let pos in valores){
  soma += Number(valores[pos])
  if(valores[pos] > maior){
   maior = pos
  }
  if(valores[pos] < menor){
   menor = pos
  }
 }
 media = soma / total
 res.innerHTML = ''
 res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados </p>`
 res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
 res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
 res.innerHTML += `<p>A soma total dos valores informados é ${soma}</p>`
 res.innerHTML += `<p>A media dos valores somados é ${media}</p>`
}


 
}
