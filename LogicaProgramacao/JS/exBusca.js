//criando uma lista
var vetor = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
//solicitando pro usuário qual num deseja procurar
var num = parseInt(prompt("Qual o numero que deseja procurar? "));

//console.log(vetor);

//chamando função
var indiceBuscado = buscarElemento(vetor, num);

//condicao para impressao
if (indiceBuscado != - 1){
    console.log(`O elemento buscado ${num}, foi encontrado no índice [${indiceBuscado}]`);
}else{
    console.log(`O elemento buscado ${num}, não foi encontrado na lista`);
}

//criando funcao de busca
function buscarElemento (array, elemento){
    for (var i = 0 ; i < array.length ; i++){
        if (array[i] == elemento){
            return i;
        }        
    }
    return -1;
}


