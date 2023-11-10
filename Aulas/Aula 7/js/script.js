const buttonMedicamentos = document.querySelector("#medicamentos");
const lista_remedios = document.querySelector(".remedios");

// Função para mostrar os medicamentos quando clicar no botão
buttonMedicamentos.addEventListener("click", function(){
    // adiciona uma classe para a lista_remedios
    lista_remedios.classList.add("d-block");
})

// Variáveis da validação
const campoNome = document.querySelector("#nome");
const campoCidade = document.querySelector("#cidade");
const buttonValidar = document.querySelector("button");

// Função para apagar os inputs depois de enviar
function clearForm() {
    campoNome.value = '';
    campoCidade.value = '';
}

// Função para validar os campos
buttonValidar.addEventListener("click", function(event) {
    event.preventDefault();

    // trim = não deixa preencherem só com espaço
    if (campoNome.value.trim() === '') {
        alert("Preencha o campo nome");
        return false;
    }

    if (campoCidade.value.trim() === '') {
        alert("Preencha o campo cidade");
        return false;
    }

    clearForm();
})