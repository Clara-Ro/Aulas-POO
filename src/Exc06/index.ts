const prompt = require("prompt-sync")();

let num = Number(prompt('Digite um número: '))

switch(num){
    case 1:
        console.log('aluno')
        break;
    case 2:
        console.log('professor')
        break;
    case 3:
        console.log('coordernador')
        break;
    default:
        console.log('funcionario')
        break;
}