var valores = {
nome: 'Pedro',
hora: new Date().getHours(),
horaDoDia: ''
}


if(valores.hora >= 6 && valores.hora < 12){
 valores.horaDoDia = 'Manha'
}else if(valores.hora >= 12 && valores.hora < 18){
 valores.horaDoDia = 'tarde'
}else{
 valores.horaDoDia = 'noite'
}

console.log(`Olá meu nome é ${valores.nome}. Estou aprendendo JavaScript as ${valores.hora} da ${valores.horaDoDia}`)