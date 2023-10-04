const prompt = require('prompt-sync')();

// Loop principal que permite repetir o processo enquanto o usuário desejar
do {
    try {
        var nome, idade , sexo, condicao

        // Chama as funções para obter nome, idade e sexo
        nome = obterNome(); 
        idade = obterIdade();
        sexo = obterSexo();

        // Verifica a idade e exibe a mensagem correspondente
        if(idade >= 18){
            console.log(`Nome: ${nome}\nIdade: ${idade} anos\nSexo: ${sexo}\nSitução: Pode retirar CNH!`);
        } else {
            console.log(`Nome: ${nome}\nIdade: ${idade} anos\nSexo: ${sexo}\nSitução: Não pode retirar CNH!`);
        }
    } catch (erro) {
        console.log(erro);
    } finally {
        // Pergunta se o usuário deseja realizar outro teste
        var opc = prompt("Deseja realizar outro teste (S || N): ").toUpperCase();
        if (opc == "S" ){
            condicao = true;
        } else if (opc == "N"){
            condicao = false;
        }
    }
} while (condicao);

// Função para obter o nome, verifica se não está em branco
function obterNome() {
    let nom = prompt("Digite seu nome: ").toUpperCase();
    if (!nom.trim()){
        condicao = true;
        throw new Error("Nome inválido!");
    } else {
        condicao = false;
        return nom;
    }
}

// Função para obter a idade, verifica se é um número válido
function obterIdade() {
    let idad = parseInt(prompt("Digite sua idade: "));
    if (isNaN(idad)){
        condicao = true;
        throw new Error("Idade inválida!");
    } else {
        condicao = false;
        return idad;
    }
}

// Função para obter o sexo, verifica se é "Masculino" ou "Feminino"
function obterSexo() {
    let sex = prompt("Digite seu sexo (M || F): ").toUpperCase();
    if (sex !== "M" && sex !== "F"){
        condicao = true;
        throw new Error("Sexo inválido!");
    } else {
        condicao = false;
        return sex;
    }
}
