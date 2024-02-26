// Trazendo o prompt-sync para o projeto ~> npm i prompt-sync
const prompt = require('prompt-sync')()

function infoUsuario() {
    let altura = parseFloat(prompt("Digite sua altura"))
    let peso = parseFloat(prompt("Digite seu peso"))

    return {
        pesoInformado: peso,
        alturaInformada: altura
    }
}

function calcIMC(altura, peso) {
    return peso / altura**2
}

function main() {
    let peso =  infoUsuario().pesoInformado
    let altura = infoUsuario().alturaInformada
    let imc = calcIMC(altura, peso)
    console.log(`Seu IMC é ${imc}`)
}
main()