const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// Criando elemento m para validação
const errorMensagem = document.createElement("m")

// Função para apagar o input quando clicar no botão
function clearForm() {
    inputNota.value = "";
}

// () => = function() --> FUNÇÃO ANÔNIMA
button.addEventListener("click", (event) => {
    // Não fazer a mensagem sumir no console.log
    event.preventDefault();

    // Validação
    if(inputNota.value.trim() === '') {
        errorMensagem.textContent = "Campo Obrigatório"; // Adicionando o texto para o elemento
        inputNota.insertAdjacentElement("afterend", errorMensagem);// Adiciona o elemento para aparecer depois do input
        errorMensagem.setAttribute("class", "error"); // adicionando a classe para a mensagem
        return false; // Volta para o começo do if, não deixando o usuário passar se não preencher corretamente
    }

    if (inputNota.value >= 6) {
        alert("Você foi aprovado");
    } else {
        alert("Você foi reprovado");
    }

    errorMensagem.classList.add("d-none");
    clearForm();
})