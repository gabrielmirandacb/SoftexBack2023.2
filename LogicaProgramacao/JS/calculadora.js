var opc = menu();

if (opc != "SAIR") {
    var n1 = parseFloat(prompt("Informe o 1º número: "));
    var n2 = parseFloat(prompt("Informe o 2º número: "));
    var res = 0;
    switch (opc) {
        case "SOMA":
            res = soma(n1, n2);
            break;
        case "SUBTRAÇÃO":
            res = subtracao(n1, n2);
            break;
        case "MULTIPLICAÇÃO":
            res = multiplicacao(n1, n2);
            break;
        case "DIVISÃO":
            res = divisao(n1, n2);
            break;
        default:
            console.log("Erro na escolha!")
    }
    if (opc == "SOMA" || opc == "SUBTRAÇÃO"|| opc == "MULTIPLICAÇÃO" || opc == "DIVISÃO"){
        console.log(`O RESULTADO DA ${opc} = ${res}`)
    }
}else {
    console.log("Encerrar sessão!")
}
function menu(opcao) {
    console.log("Menu:" + "\n" + "1: Soma" + "\n" + "2: Subtração" + "\n" + "3: Multiplicação" + "\n" + "4: Divisão" + "\n" + "5: Sair");
    var opcao = prompt("Informe a opção que deseja realizar: ").toUpperCase();
    return opcao;
}

function soma(num1, num2) {
    var resultado = 0
    resultado = num1 + num2;
    return resultado;
}
function subtracao(num1, num2) {
    var resultado = 0
    resultado = num1 - num2;
    return resultado;
}
function multiplicacao(num1, num2) {
    var resultado = 0
    resultado = num1 * num2;
    return resultado;
}
function divisao(num1, num2) {
    var resultado = 0
    resultado = num1 / num2;
    return resultado;
}