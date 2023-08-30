function ola(nome) {
    window.alert("Oi "+ nome);
}
function expSomatorio(n) {
    res = 0;
    for (var i = 0; i < n; i++) {
        res += 2 * i + 1;
    }
    return res;
}
var pessoa = prompt("Informe seu nome: ");

ola(pessoa);

do {
    var resposta = 0;
    var opc;
    var num = parseInt(prompt("Informe o numero que deseja saber o quadrado dele: "));
    
    if (num > 0) {
            resposta = expSomatorio(num);
            console.log(`${num}² = ${resposta}`);
        
    } else {
        console.log("Erro!");
    }
    console.log("\n");
    opc = prompt("Deseja informar outro numero que deseja saber o quadrado dele: (Sim || Não) ").toUpperCase();
} while (opc == "SIM") {
}
