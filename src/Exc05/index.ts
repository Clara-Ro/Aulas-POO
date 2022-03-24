const prompt = require("prompt-sync")();
let num = Number(prompt('Digite um número: '))
do{
    let quadrado = num**2;
    console.log(`o quadrado é: ${quadrado}`);
    num = Number(prompt('Digite um número: '));
} while (num!=0);