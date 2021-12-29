const selectOption = document.querySelector('select.cores')
const fundo = document.querySelector('ul.house')


function aguardaEvento(){
 switch (selectOption.selectedIndex){
  case 1:
   fundo.style.backgroundColor = 'yellow'
   break
  case 2: 
  fundo.style.backgroundColor = 'blue'
  break
  case 3: 
  fundo.style.backgroundColor = 'white'
  break
  case 4: 
  fundo.style.backgroundColor = 'green'
  break
  case 5:
   fundo.style.backgroundColor = 'red'
  break
  default:
   fundo.style.backgroundColor = '#CCC'
  break
 }
 console.log('selectOption:' + selectOption.selectedIndex);
 console.log('Fundo <ul> cores:' + fundo);
}
aguardaEvento();











/*
function changeColor(colorParam){
 let color = colorParam.value.toLowerCase();
 var optionElement = document.querySelector('select.oisa').parentElement.parentElement
 optionElement.style.background = color
 console.log(color)

}
*/

