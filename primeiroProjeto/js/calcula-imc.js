
var titulo =document.querySelector(".titulo");/*e assim slelecionamos uma classe*/    /*uma boa pratica e nao pesquisar o elemento pelo nome da tag, e sim pela class ou id no html*/
            /*    console.log(titulo);/*aqui vc imprime com a tag utilizada no titulo*/
console.log(titulo.textContent);/*dessa forma, vc so imprime o conteudo no titulo*/
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso); //assumindo que o peso e valido e pode ser calculado
	var alturaValida = validaAltura(altura); // assumindo que a altura e valida e pode ser calculada

	if(!pesoValido){
		console.log("peso invalido");
		pesoValido =  false;// se caso o valor do peso nao for valido passara a ser falso, impedindo o calculo
		tdImc.textContent = "peso invalido";
		paciente.classList.add("paciente-invalido")
	}

	if(!alturaValida){
			console.log("altura invalida");
			alturaValida = false;// se caso o valor da altura nao for valida passara a ser falsa, assim impedindo o calculo
			tdImc.textContent = "altura invalida";
			//paciente.style.color = "red"; voce tambem pode manipular para o campo inteiro mudar de cor, com o backgroundColor
			paciente.classList.add("paciente-invalido");//classList e uma funcao que acessa as classes que aquele html tem
		}
		
	if(alturaValida && pesoValido) {
			var imc = calculaImc(peso,altura,altura);
			tdImc.textContent = imc;//funcao que limita as casas decimais, para indicar quantas casas decimais vc quer que apareça no imc
		}	
}
/*funcao escutador de evento, onde vc define o que vai acontecer se o usuario
dar um click */
titulo.addEventListener("click", function(){
	console.log("olha so, posso chamar uma funcao anonima");
})/* esta e uma funcao anonima, sem nome*/

function validaPeso(peso){
	if(peso >=0 && peso < 1000){
		return true;
	}else {
		return false;
	}
}

function validaAltura(altura){
	if(altura >=0 && altura <= 3.00){
		return true;
	}else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso/(altura * altura);
	return imc.toFixed(2);/*retornando o valor do imc depois de calculado */
}//tofixed e uma funcao que limita as casas decimais, para indicar quantas casas decimais vc quer 
/*que apareça no imc*/