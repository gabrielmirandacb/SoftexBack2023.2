/*Declaraçao de variavel para receber o nome, salário, idade e se tem diploma do usuário
utilizando os tipos de dados solicitados*/
var nome = prompt("Digite seu nome");
var salario = parseFloat(prompt("Digite seu salário: "));
var idade = parseInt(prompt("Digite sua idade: "));
var diploma = prompt("Tem diploma: (Sim | Não) ").toUpperCase();
var dip;

if (diploma == "SIM" || diploma == "S"){
    dip = true; //verificação
}else{
    dip = false; //verificação
}

//impressão dos dados
alert(`Nome: ${nome}\nSalário: R$${salario}\nIdade: ${idade} anos\nDiploma: ${dip}`)

