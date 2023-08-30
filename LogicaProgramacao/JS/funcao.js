ola();

do {
    var num = parseInt(prompt("Informe o numero que deseja saber o quadrado dele: "));
    var quad = 0;
    var opc
    if (num > 0) {
        for (var i = 0; i < num; i++) {
            quad += 2 * i + 1;
            console.log(`${num}² = (2 * ${i} + 1) `);
            console.log(`${num}² = ${quad}`);
        }
    } else {
        console.log("Erro!");
    }
    console.log("\n");
    opc = prompt("Deseja informar outro numero que deseja saber o quadrado dele: (Sim || Não) ").toUpperCase();
} while (opc == "SIM") {
}
function ola() {
    window.alert("Oi Gabriel");
}
function somarquadrado(num) {
    
}