// Armazenar cookie e prazo para ele expirar. path = onde ele armazena os cookies, / = todo o site, podemos guardar apenas para a página de login por exemplo
// document.cookie = "userName = Carolina; expires = Thu, 14 Dec 2034 12:00:00 UTC; path=/";

//  ~~~~~~~~~~~~~~~~~~~~~~

// let nome = 'Carolina';
// localStorage.setItem('nome', nome);

// console.log(localStorage.getItem('nome'));~

//  ~~~~~~~~~~~~~~~~~~~~~~

let nome = ['Caio', 'Carol', 'Juan'];
let nomeJson = JSON.stringify(nome);
localStorage.setItem('nome', nomeJson);

const nomes = JSON.parse(localStorage.getItem(nomeJson));