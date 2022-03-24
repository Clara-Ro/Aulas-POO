const prompt = require("prompt-sync")();
let fruits: string[] = [];
for(let i=0;i<5;i++){
    fruits.push(prompt('Digite uma fruta: '))
}
let num = Number(prompt('Digite 1 para adicionar mais uma fruta ou 0 para não adicionar: '))
while(num==1){
    fruits.push(prompt('Digite a fruta: '))
    num = Number(prompt('Digite 1 para adicionar mais uma fruta ou 0 para não adicionar: '))
}

for(let i=0;i<fruits.length;i++){
    console.log(`A ${i+1}° fruta é ${fruits[i]}`)
}