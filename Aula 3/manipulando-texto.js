let num_float = 123.456;

// Funções nativas = funções do próprio js
console.log(typeof num_float.toString());
console.log(typeof String(num_float));

// Array -> objeto
let linguagem = ["Java", "C#", "Python"];
            //     0      1       2 
console.log(typeof linguagem);
console.log(linguagem);
console.log(linguagem[0]);
console.log(linguagem[1]);
console.log(linguagem[2]);

let txt = "Estão chegando as provas"
// Substitui provas por avaliações
console.log(txt.replace("provas", "avaliações"));