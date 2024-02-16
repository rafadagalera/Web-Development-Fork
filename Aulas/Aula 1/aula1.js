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

// Retirar a função do comentário para rodar o exercício desejado
// main() 

/* OBS: 
const main = () => {} - Função em arrow sem parâmetro
const calculoValor = livros => - Função em arrow com um parâmetro
*/

// Desafio 2: calcular multa de acordo com a velocidade (velocidade máxima = 60Km/h). Multa de 100 reais por km ultrapassado
function velocidade(){
    let vel = prompt("Digite a sua velocidade: ")
    return vel
}

function calculoMulta(vel){
    if (vel > 60){
        return (vel - 60)*100
    } else if (vel <= 60 && vel > 0){
        return String
    } else {
        return null
    }
}

function multa(){
    if (calculoMulta(velocidade()) == Number){
        console.log(`O valor da multa a ser paga é de R$ ${calculoMulta(velocidade())}`)
    } else if (calculoMulta(velocidade()) == String){
        console.log("Você esá dentro do limite de velocidade. Não há multa a ser paga")
    } else {
        console.log ("Por favor, digite um valor válido.")
    }
}

multa()