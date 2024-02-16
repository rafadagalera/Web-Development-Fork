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