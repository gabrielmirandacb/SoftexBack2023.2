//Primeiro Codigo
//Criação de variaveis
var notas = 0;
var qtdNotas = parseInt(prompt("Digite a quantidade de notas que deseja inserir: "));
var resultado, nota;
var mediaAprovacao = 7;

//criação de sistema de repetição para o usuário inserir as notas
for (let index = 0; index < qtdNotas ; index++) {
    nota = (parseInt(prompt(`Digite a ${index + 1}ª nota: `)));
    notas += nota;    
}

//chamando a funçao e imprimindo
resultado = (calcularMedia(notas) >= mediaAprovacao)? "Passou!":"Reprovou!"
alert(resultado);

//criação de função
function calcularMedia (media){
    var result = (media)/qtdNotas;
    return alert(`Média = ${result}`);
}

//Segundo Código
//Criação de variaveis
var notas = 0;
var qtdNotas = parseInt(prompt("Digite a quantidade de notas que deseja inserir: "));
var nota;
var mediaAprovacao = 7;

//criação de sistema de repetição para o usuário inserir as notas
for (let index = 0; index < qtdNotas ; index++) {
    nota = (parseInt(prompt(`Digite a ${index + 1}ª nota: `)));
    notas += nota;    
}

//chamando a funçao e imprimindo
calcularNota(notas);

//criação de função
function calcularNota(not) {
    var resultado = (mediaAprovacao*(qtdNotas+1))- not;
    return alert(`Nota Necessária para passar = ${resultado}`);
}