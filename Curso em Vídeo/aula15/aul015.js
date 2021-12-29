let num = [5, 8, 2, 9, 3]
num.push(1)
num.push(6)


console.log(`nosso vetor é o : ${num}`)

let pos = num.indexOf(6)

if(pos == -1){
 console.log(`O valor nao foi encontrado`);
}else{
 console.log(`O valor esta na posição: ${pos}`)
}
/*
for(let i = 0; i < num.length; i++){
 console.log(`O valor esta na posição: ${num[i]}`)
}
*/