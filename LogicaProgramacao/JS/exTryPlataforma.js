/*Desenvolva um programa que recebe do usuário nome completo 
e ano de nascimento que seja entre 1922 e 2021. 
A partir dessas informações, o sistema mostrará o nome do usuário 
e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

do{
    var nome = prompt("Informe seu nome completo: ");
    var op;
    do{
        try{
            var anoNasc = parseInt(prompt("Informe seu ano de nascimento entre 1922 e 2021: "));
            var condicao = true;
            var resposta;
            
            resposta = calcularIdade(anoNasc);
            console.log(`Nome: ${nome}\nIdade: ${resposta}`);        
            
    
        }catch(erro){
            console.log(erro);
        }
    }while(condicao){
    } 

    op = prompt("Deseja informar os dados de outra pessoa? (Sim || Não) ").toUpperCase();
}while(op == "SIM"){
}

function calcularIdade (anoNascimento){
    const ANOATUAL = 2022;
    var idade = 0;

    if(anoNasc>=1922 && anoNasc <=2021){
        idade = ANOATUAL - anoNasc;
        condicao = false;
        return idade;
    }else if (isNaN(anoNasc)){
        throw new Error("Erro, não é um numero!");
    }else{
        throw new Error("Erro, ano inválido!");
    }
}
