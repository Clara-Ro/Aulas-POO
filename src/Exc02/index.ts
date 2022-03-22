const prompt = require("prompt-sync")();

let num = prompt('Digite um número: ');

if(num<0){
    console.log('número negativo')
}else{
    console.log('número positivo')
}