const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const enviar = document.querySelector('.button');
const validar = document.createElement('v');

// Função para apagar os input quando forem enviados
function clearForm() {
    login.value = ''
    senha.value = ''
}

enviar.addEventListener("click", function(event) {
    event.preventDefault();

    if (login.value.trim() === '') {
        validar.textContent = "Campo obrigatório.";
        login.insertAdjacentElement ("afterend", validar);
        validar.setAttribute("class", "validar");
        return false;
    }

    if (senha.value.trim() === '') {
        validar.textContent = "Campo obrigatório.";
        senha.insertAdjacentElement ("afterend", validar);
        validar.setAttribute("class", "validar");
        return false;
    }

    console.log("Login: ", login.value);
    console.log("Senha: ", senha.value);
    clearForm();
})