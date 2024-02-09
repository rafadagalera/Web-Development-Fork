const peso = prompt("Digite seu peso em Kg: ");
const altura = prompt("Digite sua altura em metros: ");

function calculo (){
    const imc = peso/(altura**2)
    return `O imc é: ${imc}`
}
console.log(calculo());

function classificacao(imc){
    if (imc < 18.5){
        return `Classificação = Peso Baixo`
    } else if (imc >= 18.5 && imc <= 24.99){
        return `Classificação = Peso Normal`
    } else if (imc >= 25 && imc <= 29.99){
        return `Classificação = Sobrepeso`
    } else{
        return `Classificação = Obesidade`
    }
}
console.log(classificacao(calculo()));