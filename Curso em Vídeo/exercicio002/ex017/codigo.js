function calcular(){
 let numero = document.querySelector('input#txtnumber')
 
 let tabuada = document.querySelector('select#tabuada')

 if(numero.value.length == 0){
  window.alert('[ERRO] Numero Inválido! Impossivel gerar tabuada...')
 }else{
  let n = Number(numero.value)
  let c = 1
  while(c <= 10){
   let item = document.createElement('option')
   item.value = c
   item.text = `${n}x${c} = ${n*c}`
   tabuada.appendChild(item)
   c++
  }
 }

}








/*
function calcular(){
 let numero = document.querySelector('input#txtnumber')
 let n = Number(numero.value)
 let numeroReset = Number(numero.value)
 let res = document.querySelector('select#tabuada')


 if(numero.value.length == 0 || numero.value.length > 2){
  window.alert('[ERRO] Numero Inválido! Impossivel gerar tabuada...')
 }else{
  for(let c = 0; c <= 10; c++){
   n = n * c;
   var opt = document.createElement('option')
   opt.value = c
   opt.innerHTML += `${numeroReset}x${c} = ${n}`
   res.appendChild(opt)

   n = numeroReset

   

  }
  console.log(res.firstElementChild.setAttribute('hidden', 'hidden'))
 }
}

*/