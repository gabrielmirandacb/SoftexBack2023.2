//Enumerado dos candidatos
const CANDIDATOS = {
    nomeCandX : "X",
    numCandX : 889,
    nomeCandY : "Y",
    numCandY : 847,
    nomeCandZ : "Z",
    numCandZ : 515,
    nomeBranco : "Branco",
    numBranco : 0,
};
//Zerando os votos
var contX = 0;
var contY = 0;
var contZ = 0;
var contBranco = 0;
var contNulos = 0;

//Imprimindo a zeresima
//zeresima(contX, contY, contZ, contBranco, contNulos);

do{  
    
    do{
        var testeLetra = false;
        var voto = prompt(`Bem Vindo ao Sistema de Votação \n
        Candidatos: 
            ${CANDIDATOS.nomeCandX} => ${CANDIDATOS.numCandX}
            ${CANDIDATOS.nomeCandY} => ${CANDIDATOS.numCandY}
            ${CANDIDATOS.nomeCandZ} => ${CANDIDATOS.numCandZ}
            ${CANDIDATOS.nomeBranco} => ${CANDIDATOS.numBranco}
            
        Vote: `);

        for(i in voto){
            //alert(Number(voto[i]));
            if(isNaN(voto[i])){
                testeLetra = true;
            }
        }
        alert(testeLetra);
    }while(testeLetra){
    }

    //Computando voto
    voto = parseInt(voto)
    if(voto == CANDIDATOS.numCandX){
        contX++;
    }else if(voto == CANDIDATOS.numCandY){
        contY++;
    }else if(voto == CANDIDATOS.numCandZ){
        contZ++;
    }else if(voto == CANDIDATOS.numBranco){
        contBranco++;
    }else {
        contNulos;
    }

    var op = prompt("Deseja finalizar a votação? (Sim | Não) ").toUpperCase();
    /*Fim se candidato eleito, fazer

    if( op == "SIM"){
        var fimEleicao = finalizarEleicao(contX,contY,contZ,contBranco,contNulos)
    }else{
        fimEleicao = true
    }*/
}while(op == "NÃO"){
}

//Mostrar resultado
console.log(`Votos: 
        ${CANDIDATOS.nomeCandX} = ${contX}
        ${CANDIDATOS.nomeCandY} = ${contY}
        ${CANDIDATOS.nomeCandZ} = ${contZ}
        ${CANDIDATOS.nomeBranco} = ${contBranco}
        Nulos = ${contNulos}`);

alert(`Votos: 
        ${CANDIDATOS.nomeCandX} = ${contX}
        ${CANDIDATOS.nomeCandY} = ${contY}
        ${CANDIDATOS.nomeCandZ} = ${contZ}
        ${CANDIDATOS.nomeBranco} = ${contBranco}
        Nulos = ${contNulos}`);

if(contX > contY && contX > contZ){
    alert(`${CANDIDATOS.nomeCandX} foi eleito` )
}else if (contY > contZ && contY > contX){
    alert(`${CANDIDATOS.nomeCandX} foi eleito` )
}else if (contZ > contX && contZ > contY){
    alert(`${CANDIDATOS.nomeCandZ} foi eleito` )
}else {
    alert("Eleição indefinida!")
}