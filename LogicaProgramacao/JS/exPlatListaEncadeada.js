class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = new ListaEncadeada;
        this.proximo = null;
    }
}


class ListaEncadeada {
    constructor() {
        this.cabeca = null;
        this.contador = 0;
    }


    isEmpty() {
        return this.contador === 0;
    }


    getcontador() {
        return this.contador;
    }


    addInicio(conteudo) {
        const pessoa = new Pessoa(conteudo, null);
        if (this.isEmpty()) {
            this.cabeca = pessoa;
        } else {
            pessoa.proximo = this.cabeca;
            this.cabeca = pessoa;
        }
        this.contador++
    }


    addFinal(conteudo) {
        const pessoa = new Pessoa(conteudo, null);
        if (this.isEmpty()) {
            this.cabeca = pessoa;
        } else {
            let anterior = this.cabeca;
            while (anterior.proximo) {
                anterior = anterior.proximo;
            }
            anterior.proximo = pessoa;
        }
        this.contador++;
    }


    print() {
        if (this.isEmpty()) {
            console.log(`A lista está vazia.`);
        } else {
            let atual = this.cabeca;
            while (atual !== null) {
                console.log(atual.conteudo);
                atual = atual.proximo;
            }
        }
    }
}
const listaPessoa = new ListaEncadeada();


const humano1 = new Pessoa(`Gabriel`, 27);
const humano2 = new Pessoa(`Alexandre`, 51);
const humano3 = new Pessoa(`Lauro`, 64);
const humano4 = new Pessoa(`Kelma`, 42);
const humano5 = new Pessoa(`Letícia`, 26);
const humano6 = new Pessoa(`Guilherme`, 18)


//add as pessoas


listaPessoa.addFinal(humano2);
listaPessoa.addFinal(humano3);
listaPessoa.addFinal(humano4);


// add os filhos


humano2.filho.addFinal(humano5);
humano3.filho.addFinal(humano1);
humano4.filho.addFinal(humano6);


// imprimindo


listaPessoa.print();


console.log(listaPessoa);
