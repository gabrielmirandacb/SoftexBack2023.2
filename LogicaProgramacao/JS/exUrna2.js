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

do{
    do{
        var condicao = false;
        var voto = prompt(`Bem Vindo ao Sistema de Votação \n
        Candidatos: 
            ${CANDIDATOS.nomeCandX} => ${CANDIDATOS.numCandX}
            ${CANDIDATOS.nomeCandY} => ${CANDIDATOS.numCandY}
            ${CANDIDATOS.nomeCandZ} => ${CANDIDATOS.numCandZ}
            ${CANDIDATOS.nomeBranco} => ${CANDIDATOS.numBranco}
            
        Vote: `);

    testeNumero(voto);
    capturaVotos(voto);

    }while(condicao){
    }
    
    var op = prompt("Deseja finalizar a votação? (Sim || Não) ").toUpperCase();
}while(op == "NÃO"){
}

/*console.log(`Votos: 
        ${CANDIDATOS.nomeCandX} = ${contX}
        ${CANDIDATOS.nomeCandY} = ${contY}
        ${CANDIDATOS.nomeCandZ} = ${contZ}
        ${CANDIDATOS.nomeBranco} = ${contBranco}
        Nulos = ${contNulos}`);
*/
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

function testeNumero(teste){
    for(i in teste){
        if(isNaN(teste[i])){
            condicao = true;
        }
    }
}

function capturaVotos(votos){
    if (votos == CANDIDATOS.numCandX){
        contX++;
    }else if(votos == CANDIDATOS.numCandY){
        contY++;
    }else if(votos == CANDIDATOS.numCandZ){
        contZ++;
    }else if(votos == CANDIDATOS.numBranco){
        contBranco++;
    }else{
        contNulos++;
    }
}