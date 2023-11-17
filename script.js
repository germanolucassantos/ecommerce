var action = document.getElementById("criar") // selecionando o botão
action.addEventListener("click", carregar) // escutando o evento click do botão
var tabuada = document.getElementById("tabuada") // selecionando a div tabuada

function carregar() {
    var numero = window.document.getElementById("numero") // selecionando o numero digitado no in
    tabuada.innerText = "";

    for(let i = 1; i <= 10; i++) {
    tabuada.innerHTML += `${numero.value} * ${i} = ${numero.value * i}</br>`; // escrevendo o resultado
    console.log("teste")
   } 
}
