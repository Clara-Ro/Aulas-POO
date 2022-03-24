const prompt = require("prompt-sync")();

let soma=0;

    for(let i=0; i<2;i++){
        let x= prompt(`Digite o ${i+1}° numero:`);
        soma = soma + Number(x)
    }
    console.log(`soma:${soma}`)

    if(soma>0){
        console.log('a soma é positiva')
    } else if (soma === 0) {
        console.log('nulo')
    }else{
        console.log('a soma é negativa')
    }