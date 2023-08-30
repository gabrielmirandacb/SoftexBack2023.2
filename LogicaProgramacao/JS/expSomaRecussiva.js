function ola(nome) {
    window.alert("Oi "+ nome);
}
function expSomatorioRecussiva(n) {
    if(n ===1){
        return 1; 
    }else{
        return expSomatorioRecussiva(n - 1) + (2 * n - 1);
    }
}
var pessoa = prompt("Informe seu nome: ");

ola(pessoa);

do {
    var resposta = 0;
    var opc;
    var num = parseInt(prompt("Informe o numero que deseja saber o quadrado dele: "));
    
    if (num > 0) {
            resposta = expSomatorioRecussiva(num);
            console.log(`${num}² = ${resposta}`);
        
    } else {
        console.log("Erro!");
    }
    console.log("\n");
    opc = prompt("Deseja informar outro numero que deseja saber o quadrado dele: (Sim || Não) ").toUpperCase();
} while (opc == "SIM") {
}