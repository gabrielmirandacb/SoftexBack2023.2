do {
    var resposta = 0;
    var opc;
    var num = parseInt(prompt("Informe um numero inteiro positivo: "));
    
    if (num > 0) {
            resposta = fatorialRecussiva(num);
            console.log(`${num}! = ${resposta}`);
        
    } else {
        console.log("Erro!");
    }
    console.log("\n");
    opc = prompt("Deseja informar outro numero que deseja saber o quadrado dele: (Sim || Não) ").toUpperCase();
} while (opc == "SIM") {
}

function fatorialRecussiva (n){
    if ( n === 1 ){
        return 1 ;
    }else {
        return fatorialRecussiva(n-1)*n; 
    }
}