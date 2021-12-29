
function meuEscopo(){

 const form = document.querySelector('.form')
 const resultado = document.querySelector('.resultado')
 const pessoas = []

 function recebeEventoFormulario(evento){
  evento.preventDefault()
   const nome = form.querySelector('.nome')
   const sobrenome = form.querySelector('.sobrenome')
   const peso = form.querySelector('.peso')
   const altura = form.querySelector('.altura')
   

   if(nome.value.length != 0 && sobrenome.value.length != 0 && peso.value.length != 0 && altura.value.length != 0){
     if(nome.value != -1 && sobrenome.value != -1 && peso.value != -1 && altura.value != -1){
      pessoas.push({
        nome: nome.value, 
        sobrenome: sobrenome.value, 
        peso: Number(peso.value), 
        altura: Number(altura.value)
       })
       resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value} </br>Peso: ${peso.value} Altura: ${altura.value}</p>`
       pessoas.forEach(valor => {console.log(valor)});
     }
   
   }else{
    alert('Favor preencher todos os campos')
   }
   nome.focus()
   
 }

 form.addEventListener('submit', recebeEventoFormulario)

}

meuEscopo()