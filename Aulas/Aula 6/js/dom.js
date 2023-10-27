function cliqueAqui() {
    alert("Olá");
}

// querySelector = seleciona tags, classes, id
// document = "dom", referência ao html
const tirarDiv = document.querySelector(".tirarDiv");
const voltarDiv = document.querySelector(".voltarDiv");
const card = document.querySelector(".card");

// Criar funções - função anônima:
// add.EventListener = reconhece uma ação
tirarDiv.addEventListener("click", function() {
    card.style.display = "none";
})


voltarDiv.addEventListener("click", function(){
    card.style.display = "block";
})