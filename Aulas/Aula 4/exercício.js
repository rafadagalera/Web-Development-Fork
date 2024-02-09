let fruits = ["morango", "banana", "mamão", "pera"];

// console.table(fruits); = cria uma tabela com a lista 

// includes = analisa se o elemento está na lista
console.log(fruits.includes("pera")); 
console.log(fruits.includes("maçã"));


/* Exercício: 
Verifique se "abacaxi" existe no array
Se existir = exiba no console "A string "abacaxi" existe no array "frutas""
Se não = verifique se "pera" existe
   Se existir = exiba no console "A string "pera" existe no array "frutas""
Se nenhuma das duas existirem = exiba no console a mensagem "Nem "pera" nem "abacaxi" existem no array "frutas"
*/

let frutas = ["morango", "banana", "mamão", "pera"];

if (frutas.includes("abacaxi")) {
    console.log("A string 'abacaxi' existe no array 'frutas'")
} else if (frutas.includes("pera")) {
    console.log("A string 'pera' existe no array 'frutas'")
}
else {
    console.log("Nenhuma das duas frutas existem no array 'frutas'")
}
