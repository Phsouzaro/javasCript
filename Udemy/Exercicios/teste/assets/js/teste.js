const data = new Date()
setInterval(function(){
 console.log(data.toLocaleTimeString('pt-BR', {second: "numeric"}))
}, 1000)
