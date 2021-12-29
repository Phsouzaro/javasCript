window.onload = function(){

	var func = function(){
		console.log("Declarando como variável!");
	};

	func();

	function outra_funcao(par){
		console.log(par);
	}	

	outra_funcao('Olá mundo');

	var obj = {};

	obj.func = function(){
		console.log("Através de objetos!");
	};


	obj.func();



}