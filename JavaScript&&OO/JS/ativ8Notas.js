//Primeiro Codigo
//Criação de variaveis
var notas = 0;
var qtdNotas = parseInt(prompt("Digite a quantidade de notas que deseja inserir: "));
var resultado, nota;

//criação de sistema de repetição para o usuário inserir as notas
for (let index = 0; index < qtdNotas ; index++) {
    nota = (parseInt(prompt(`Digite a ${index + 1}ª nota: `)));
    notas += nota;    
}

//chamando a funçao e imprimindo
resultado = (calcularMedia(notas) >= 7)? "Passou!":"Reprovou!"
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

//criação de sistema de repetição para o usuário inserir as notas
for (let index = 0; index < qtdNotas ; index++) {
    nota = (parseInt(prompt(`Digite a ${index + 1}ª nota: `)));
    notas += nota;    
}

//chamando a funçao e imprimindo
calcularNota(notas);

//criação de função
function calcularNota(media) {
    var resultado = (7*(qtdNotas+1))- media;
    return alert(`Nota Necessária para passar = ${resultado}`);
}