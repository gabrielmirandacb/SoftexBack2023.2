//Criando Vetor
var vetor = [3,7,9,1,0];
//Criando uma variavel condição para tomada de decisão
var condicao;

//Método Fila
//Função para adicionar um número a lista
function adicionar(){
    vetor.push(prompt("Insira um número para entrar na lista: ")); //adiciona um numero ao final da lista
    return alert(`Lista atualizada: \nLista = [${vetor}]`);
}
//Criando função para saber se a lista está vazia
function estaVazia(){
    if(vetor.length == 0){
        return alert("Lista está vazia!")
    }
}

//Criando função para retirar um número da lista como método fila
function retirar(){
    if (estaVazia()){
        return null; //retorna null se a lista estiver vazia
    }else{
        return alert(`O número que saiu da fila foi: ${vetor.shift()}`); //remove o numero do começo da lista
    }    
}

//Criando função para saber o tamanho da fila
function tamanho(){
    return alert(`O tamanho da lista é: ${vetor.length}`);
}

alert(`Lista = [${vetor}]`); //Imprimindo o vetor na tela
condicao = prompt("Deseja adicionar um numero na fila? Sim | Não").toUpperCase();
//Chamando a função adicionar
if (condicao == "SIM"){
    adicionar(vetor);
}

condicao = prompt("A fila andou? Sim | Não ").toUpperCase();
//chamando a função retirar
if (condicao == "SIM"){
    retirar(vetor);
    alert(`Lista atualizada: \nVetor = [${vetor}]`);
}


condicao = prompt("Deseja saber o tamanho da fila? Sim | Não ").toUpperCase();
//chamando a função tamanho
if (condicao == "SIM"){
    tamanho(vetor);
}

// Método Pilha

//Criando função para desempilhar da lista
function desempilhar(){
    if(estaVazia()){
        return null;
    }
    return alert(`Número desempilhado foi: ${vetor.pop()}`);
}

condicao = prompt("Deseja adicionar um numero na fila? Sim | Não").toUpperCase();
//Chamando a função adicionar
if (condicao == "SIM"){
    adicionar(vetor);
}

condicao = prompt("Deseja desempilhar um número da fila? Sim | Não").toUpperCase();
//chamando a função desempilhar
if (condicao == "SIM"){
    desempilhar(vetor);
    alert(`Lista atualizada: Vetor = [${vetor}]`)
}

condicao = prompt("Deseja saber o tamanho da lista? Sim | Não ").toUpperCase();
//chamando a função tamanho
if (condicao == "SIM"){
    tamanho(vetor);
}

//Método Lista

//Criando função para inserir um elemento na lista
function inserir(elemento, posicao = vetor.length){
    if(posicao > 0 && posicao <= vetor.length){
        vetor.splice(posicao,0,elemento);
        cond = false;
        return alert(`Lista atualizada: \nLista = [${vetor}]`);
    }else{
        return alert("Posição inválida!");
    }
}

condicao = prompt("Deseja inserir um numero na lista? Sim | Não").toUpperCase();
//chamando a função inserir
if (condicao == "SIM"){
    //Criando um laço para repetir até o usuário inserir uma posição válida
    do{
        var cond = true;
        var pos = parseInt(prompt(`Digite o número da posição entre 0 a ${vetor.length}: `));
        var elem = parseInt(prompt("Digite o elemento que deseja inserir: "))
        inserir(elem,pos);
    }while(cond){
    }    
}







