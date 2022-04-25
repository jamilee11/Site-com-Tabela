var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscarei os pacientes");

    var xhr = new XMLHttpRequest();//O XMLHtttpRequest é objeto responsável por fazer requisições HTTP com o 
 /*   Javascript.*/

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//abrindo conexao com o endereço

    xhr.addEventListener("load", function(){/*aqui insirimos a funcao de quando os dados estiverem encontrados*/
    var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
       
        pacientes.forEach(function(paciente){
            adicionaPacientenaTabela(paciente);
        });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");

        }

    });

    xhr.send();

});