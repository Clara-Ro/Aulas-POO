const prompt = require("prompt-sync")();

let nota=[]

for(let i=0; i<3; i++){
    nota.push(Number(prompt('Digite a nota: ')))
}

let soma =0

for(let i=0; i<3; i++){
    soma += nota[i]
}

let media= soma/3
console.log(`Média: ${media}`)
if(media<3.0){
    console.log('reprovado')
} else if(media>=3 && media<7){
    console.log('exame')
} else if (media>7){
    console.log('aprovado')
}