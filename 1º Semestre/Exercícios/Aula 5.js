const Estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];
let lowerCaseEstados = [];

for (let i = 0; i < Estados.length; i ++){
    lowerCaseEstados.push(Estados[i].toLowerCase());
}

console.log(lowerCaseEstados);