//criação de listas vazias
//var addNum; 
var num = [];
var quadrado = [];

//sistema de repeticao para o usuario inserir dados
for(var i = 0 ; i < 3; i++){
    //outra forma de fazer
    //var addNum = parseInt(prompt(`Digite o ${i+1}º número que gostaria de adicionar: `));
    num.push(parseInt(prompt(`Digite o ${i+1}º número que gostaria de adicionar: `)));

   // num.push(addNum);
}
console.log(num);


for(var i = 0 ; i < num.length ; i++){
    //var addQuad = num[i]**2;
    quadrado.push(num[i]**2);

    //quadrado.push(addQuad)
}
console.log(quadrado);