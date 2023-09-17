const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var media = 0;

rl.question('Qual é o seu nome? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  rl.question('Qual a 1ª nota que deseja inserir? ', (nota1) => {
    rl.question('Qual a 2ª nota que deseja inserir? ', (nota2) => {
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2)
        media = (nota1 + nota2)/ 2;
        if (media >= 7){
            console.log(`Media = ${media} \nAprovado por média`)
        }else{
            console.log(`Media = ${media} \nReprovado por média`)
        }
        rl.close();
      });      
  });  
});
