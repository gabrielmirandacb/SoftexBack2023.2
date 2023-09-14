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