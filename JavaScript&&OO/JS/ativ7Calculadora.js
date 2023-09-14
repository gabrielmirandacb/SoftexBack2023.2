//Criação de lopping para repetir caso o dado fornecido pelo usuario nao seja válido
do {
    //Criação de mensagem de Erro
    try {
        //Criação de variáveis
        var condicao, numero1, numero2;
        var opc = parseInt(prompt(`Menu: \n1 - Soma;\n2 - Subtração; \n3 - Multiplicação; \n4 - Divisão;`));
        
        //Criação de condicional 
        if (opc >= 1 && opc <=4){
            numero1 = (parseInt((prompt(`Digite o 1º número: `))));
            numero2 = (parseInt((prompt(`Digite o 2º número: `))));
            
            //Chamando a função
            opcao(opc);
            
            //Criação de condição de parada solicitada pelo usuário
            condicao = prompt("Deseja fazer outra operação: (Sim || Não) ").toUpperCase();
            if (condicao == "SIM" || condicao == "S") {
                condicao = true;
            } else {
                condicao = false;
            }
        }else {
            condicao = true;
            throw new Error("Número inválido!");
        }
    } catch (erro) {
        alert(erro)
    }
} while (condicao) {
}


function opcao(op) {
    switch (op) {
        case 1:
            soma(numero1, numero2);
            break;
        case 2:
            subtracao(numero1, numero2);
            break;
        case 3:
            multiplicacao(numero1, numero2);
            break;
        case 4:
            divisao(numero1, numero2);
            break;
        default:
            break;
    }
}
//Criação de funções de operações 
function soma(num1, num2) {
    som = num1 + num2;
    return alert(`Resultado da Soma = ${som}`);
}

function subtracao(num1, num2) {
    if (num1 < num2) {
        sub = num2 - num1;
        return alert(`Resultado da Subtração = ${sub}`);
    } else {
        sub = num1 - num2;
        return alert(`Resultado da Subtração = ${sub}`);
    }
}

function multiplicacao(num1, num2) {
    mult = num1 * num2;
    return alert(`Resultado da Multiplicação = ${mult}`);
}

function divisao(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        div = num1 / num2;
        if (div % 2 == 0) {
            return alert(`Resultado da Divisão = ${div}`);
        } else {
            return alert(`Resultado da Divisão = ${parseInt(div)}
            \nSobra da Divisão = ${num1 % num2}`);
        }
    } else {
        throw new Error("Número inválido!");
    }
}