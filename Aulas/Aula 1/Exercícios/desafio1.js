// Desafio 1: Calcular valor de uma compra -> promoção de R$22 por R$ 15 SE comprar 7+ livros
function quantidadeLivros() {
    let livros = prompt("Digite a quantidade de livros que deseja comprar: ");
    return livros
}

function calculoValor (livros){
    if (livros >= 7){
        return livros * 15
    } else if (livros < 7 && livros > 0){
        return livros * 22
    } else {
        return null
    }
}

function main(){
    if (calculoValor(quantidadeLivros()) == null) {
        console.log("Por favor, digite um valor válido.")
    } else {
        console.log(`O preço total a ser pago é: R$${calculoValor(quantidadeLivros())}`)
    }
}

main() 

/* OBS: 
const main = () => {} - Função em arrow sem parâmetro
const calculoValor = livros => - Função em arrow com um parâmetro
*/
