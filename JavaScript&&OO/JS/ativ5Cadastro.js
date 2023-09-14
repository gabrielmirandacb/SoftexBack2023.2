do {
    // Tratamento de erro
    try {
        /* Declaração de variáveis para receber o nome, salário, idade e se tem diploma do usuário
        utilizando os tipos de dados solicitados */
        var nome = prompt("Digite seu nome");
        var salario = parseFloat(prompt("Digite seu salário: "));
        var idade = parseInt(prompt("Digite sua idade: "));
        var diploma = prompt("Tem diploma: (Sim | Não) ").toUpperCase();
        var dip, condicao;

        // Verifica se o diploma é "SIM" ou "S" para atribuir true, caso contrário, atribui false.
        if (diploma == "SIM" || diploma == "S") {
            dip = true; // Verificação
        } else {
            dip = false; // Verificação
        }

        tratamento(nome, salario, idade, diploma);      
        
    } catch (erro) {
        console.log(erro); // Exibe o erro no console, se houver
    }
} while (condicao); // Continua o loop enquanto a condição for verdadeira

function tratamento(nom, sal, idad, dipl) {
    if (nom != "" && !isNaN(sal) && !isNaN(idade) && dipl != "") {
        condicao = false; // Define a condição como falsa para encerrar o loop
        // Impressão dos dados formatados
        alert(`Nome: ${nome}\nSalário: R$${salario.toFixed(2)}\nIdade: ${idade} anos\nDiploma: ${dip ? "Sim" : "Não"}`);
    } else {
        condicao = true; // Mantém a condição como verdadeira para continuar o loop
        throw new Error("Dados inválidos!"); // Lança um erro se os dados forem inválidos
    }
}
