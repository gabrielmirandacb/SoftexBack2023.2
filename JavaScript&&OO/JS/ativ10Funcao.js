// Função arrow que exibe uma saudação
function saudacao () {
    return (`Olá ${nome}! Bem-vindo ao programa de cálculo de notas.`);
} 

// Função que calcula o somatório das notas
function calcularSomatorio(qtdNot) {
    var soma = 0;
    var nota;
    // Usa um loop para somar as notas inseridas
    for (var i = 0; i < qtdNot; i++) {
        nota = parseFloat(prompt(`Insira a ${i + 1}ª nota: `));
        soma += nota;
    }
    return soma;
}

// Função que calcula a média das notas
function calcularMedia() {
    // Chama a função calcularSomatorio para obter o somatório das notas
    var somatorio = calcularSomatorio(qtdNotas);
    // Calcula a média
    var media = somatorio / qtdNotas;
    return media;
}

// Função arrow que exibe o resultado com base na média
const  exibirResultado = (media) => {
    if (media >= 7) {
        return `Parabéns! Você foi aprovado com média ${media.toFixed(2)}`;
    } else {
        return `Infelizmente, você foi reprovado com média ${media.toFixed(2)}`;
    }
}

// Solicita ao usuário que insira o nome
var nome = prompt("Digite seu nome: ");

// Solicita ao usuário que insira a quantidade de notas
var qtdNotas = parseInt(prompt("Digite a quantidade de notas que deseja inserir: "));

// Chama a função de saudação
console.log(saudacao());

// Calcula a média das notas e armazena em uma variável
var media = calcularMedia();

// Exibe o resultado com base na média calculada
console.log(exibirResultado(media));
