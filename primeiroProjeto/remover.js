
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);/*e usado quando vc quer uma funcao espere um pouco para ser executada */

    paidoAlvo.remove();
});