const prompt = require('prompt-sync')();
var op, num1, num2, condicao;
var area = 0

do{
    try{
        op = opcao();

        num1 = obterNumero1();
        switch(op){
            case 1:
                num2 = obterNumero2();
                area = calcularAreaQuad(num1, num2);
                break;
            case 2:
                num2 = obterNumero2();
                area = calcularAreaTri(num1, num2);
                break;
            case 3:
                area = calcularAreaCir(num1);
                break;
        }
        console.log(`Área = ${area}`);
    }catch(erro){
        console.log(erro);
    }finally{
        var opc = prompt("Deseja realizar outra operação (S || N): ").toUpperCase();
        if (opc == "S" ){
            condicao = true;
        } else if (opc == "N"){
            condicao = false;
        }
    }
}while(condicao){
}

function opcao(){
    console.log(`Menu Cálculo de Áreas: \n1 - Quadrado;\n2 - Triângulo; \n3 - Circulo;\n`);
    let opc = parseInt(prompt("Opção escolhida: "))
    if (isNaN(opc) || opc < 1 || opc > 3){
        condicao = true;
        throw new Error("Opção invalida!")
    }else{
        condicao = false;
        return opc;
    }
}


function obterNumero1() {
    let n1 = parseFloat(prompt("Digite o 1° número: "));
    if (isNaN(n1) || n1 < 0){
        condicao = true;
        throw new Error("1° número inválido!");
    } else {
        condicao = false;
        return n1;
    }
}

function obterNumero2(){
    let n2 = parseFloat(prompt("Digite o 2° número: "))
    if (isNaN(n2) || n2 < 0){
        condicao = true;
        throw new Error("2° número inválido!");
    } else {
        condicao = false;
        return n2;
    }
}

function calcularAreaQuad(n1,n2){
    let areaquad = n1 * n2;
    return (areaquad).toFixed(2);
}

function calcularAreaTri(n1,n2){
    let areatri = (n1 * n2)/2;
    return (areatri).toFixed(2);
}

function calcularAreaCir(r){
    let areacir = Math.PI * r**2;
    return (areacir).toFixed(2);
}
