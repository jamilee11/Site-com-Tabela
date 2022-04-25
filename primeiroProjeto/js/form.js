var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();/*esta funcao previne os comportamento padroes */

    var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacientedoFormulario(form)


	var erros = validaPaciente(paciente);
    
	console.log(erros);
	if(erros.length > 0){
		exibeMensagemErro(erros);
	/*	var msgErro = document.querySelector("#mensagemErro");
		msgErro.textContent = erros;*/
		return;
	}
	var erros = validaPaciente(paciente);


    adicionaPacientenaTabela(paciente);  
 
	tabela.appendChild(pacienteTr);

	form.reset();
	var msgErro = document.querySelector("#mensagemErro");
	msgErro.innerHTML = "";
});

function adicionaPacientenaTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-paciente");
	tabela.appendChild(pacienteTr);

}

function exibeMensagemErro(erros) {
	var ul = document.querySelector("#mensagemErro");
    ul.innerHTML = "";/* essa funcao te permite controlar o html interno de algum elemento */

	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
		
}

function obtemPacientedoFormulario(form) {
    var paciente = { /*aqui nos declramos um objeto*/
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}/*Utilizamos objetos no Javascript como na maioria das linguagens de programação orientadas , 
	aonde os objetos podemos compará-los com objetos da vida real. Um objeto é uma entidade independente, 
	com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades.
	 Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, 
	objetos em JavaScript podem ter propriedades, que definem suas características. */

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

	var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");  
	var alturaTd = montaTd(paciente.altura, "info-altura");
	var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	var imcTd = montaTd(paciente.imc, "info-imc");
   

	pacienteTr.appendChild(nomeTd);/*com a funcao appendChild, adicionamos como filho o elemento 
passado como parametro */

	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd)
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
		erros.push("o nome nao pode estar em branco");
	}

	if(!validaPeso(paciente.peso)) {
	   erros.push("peso é invalido");
	}

    if(!validaAltura(paciente.altura)){
	   erros.push("altura invalida");	
	}

	if(paciente.gordura.length == 0){
		erros.push("a gordura não pode ser em branco");
	}

	if(paciente.peso.length == 0){
		erros.push("o peso não pode ser em branco");
	}

	if(paciente.altura.length == 0){
		erros.push("a altura não pode ser em branco");
	}

	return erros;
}