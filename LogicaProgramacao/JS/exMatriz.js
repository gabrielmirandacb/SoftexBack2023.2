// Pergunta ao usuário quantos animais deseja inserir
var qtdAnimais = parseInt(prompt("Quantos animais deseja inserir? "));

// Matriz vazia para armazenar os animais
var animais = [];

// Loop para coletar informações de cada animal
for (var i = 0; i < qtdAnimais; i++) {
    var nome = prompt(`Digite o nome do ${i + 1}º animal: `);
    var especie = prompt(`Digite a espécie do ${nome}: `);
    var idade = parseInt(prompt(`Digite a idade do ${nome}: `));

    // Adiciona as informações do animal à matriz de animais
    animais.push([nome, especie, idade]);
}

// Exibe as informações dos animais
for (var i = 0; i < animais.length; i++) {
    console.log("Nome: " + animais[i][0] + ", Espécie: " + animais[i][1] + ", Idade: " + animais[i][2]+"\n");
}