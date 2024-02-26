// Desafio 3: Indicar o maior número comparando 3 valores
function valores(){
    n1 = prompt("Digite o primeiro valor: ")
    n2 = prompt("Digite o segundo valor: ")
    n3 = prompt("Digite o terceiro valor: ")
    return {n1, n2, n3}
}

function comparar(valores){
    if((n1 > n2 && n1> n3 ) || (n1 == n2 && n1 > n3) || (n1 == n3 && n1 > n2)){
        console.log(`O maior número é ${n1}`)
    } else if (n2 > n1 && n2 > n3 || n2 == n3 && n2 > n1){
        console.log(`O maior número é ${n2}`)
    } else if (n3 > n1 && n3 > n2){
        console.log(`O maior número é: ${n3}`)
    } else {
        console.log("Todos os números são iguais")
    }
}

comparar(valores())