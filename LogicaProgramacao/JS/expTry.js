
do{
    var num = parseInt(prompt("Informe um numero inteiro positivo: "));
    //Tratando o erro que pode ocorrer
    try{
        resposta = fatorialRecussiva(num);
        console.log(`${num}! = ${resposta}`);
    }catch(erro){
        console.log(erro);
    }
    var op = prompt("Deseja repetir o programa? Sim || Não").toUpperCase();
}while(op == "SIM"){
}


function fatorialRecussiva (n){
    if ( n >= 0){
        if( n ===1 || n ===0){
            return 1 ;
        }else {
            return fatorialRecussiva(n-1)*n; 
        }
    }else{
        //(Cria) Lançamento do erro
        throw new Error("Número inválido!")
    }
        
}