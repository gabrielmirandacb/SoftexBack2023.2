var nome = [];
var idade = [];
var corFav = [];
var posModificar;
var posMod;

for (i = 0; i < 10; i++) {
    var addNome = (prompt(`Informe o ${i + 1}º nome que deseja inserir: `));
    var addIdade = (prompt("Informe a idade: "));
    var addCorFav = (prompt("Informe a cor favorita: "));

    nome.push(addNome);
    idade.push(addIdade);
    corFav.push(addCorFav);
}

// Exibir as informações originais
console.log("Informações Originais:");
for (let i = 0; i < 10; i++) {
    console.log(`Nome: ${nome[i]}, Idade: ${idade[i]}, Cor Favorita: ${corFav[i]}`);
}

// Permitir ao usuário modificar uma posição e um novo dado
posModificar = parseInt(prompt("Digite a posição que deseja modificar a cor (0 a 9):"));
modificarCor(posModificar);

posMod = parseInt(prompt("Digite a posição que deseja modificar a idade (0 a 9):"));
modificarIdade(posMod);

//Exibir as Informações Modificadas
console.log("\nInformações Modificadas:");
for (let i = 0; i < 10; i++) {
    console.log(`Nome: ${nome[i]}, Idade: ${idade[i]}, Cor Favorita: ${corFav[i]}`);
}


function modificarCor(posicao) {
    do {
        var cond = true;

        if (posicao >= 0 && posicao < 10) {
            var novaCor = prompt(`Digite a nova cor favorita de ${nome[posicao]} :`);
            corFav[posicao] = novaCor;
            cond = false;
        } else {
            console.log("Posição inválida.");
        }
    } while (cond) {
    }
}

function modificarIdade(posi) {
    do {
        var condicao = true;

        if (posi >= 0 && posi < 10) {
            var novaIdade = prompt(`Digite a nova idade de ${nome[posi]}:`);
            idade[posi] = novaIdade;
            condicao = false;
        } else {
            console.log("Posição inválida.");
        }
    } while (condicao) {
    }
}

