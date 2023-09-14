import { No } from "./exNoListaEncadeada1.js";



export class ListaEncadeada {
    constructor() {
        this.cabeca = null;
        this.contador = 0;
    }

    addNoComeco(conteudo) {
        let novoNo = new No(conteudo, null);
        if (this.cabeca !== null) {
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
        } else {
            this.cabeca = novoNo;
        }
        this.contador++;
    }

    addNoFim(conteudo) {
        let novoNo = new No(conteudo, null);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let aux = this.cabeca;
            while (aux.proximo !== null) {
                aux = aux.proximo;
            }
            aux.proximo = novoNo;
        }
    }

    addNoAt(conteudo, index) {
        let novoNo = new No(conteudo, null);
        if (this.contador < index) {
            return this.addNoFim(conteudo);
        } else {
            let noIndice = this.cabeca;
            let noAnterior = null;
            for (let i = 1; i < index; i++) {
                noAnterior = noIndice
                noIndice = this.noIndice.proximo;
            }
            noAnterior.proximo = novoNo;
            novoNo.proximo = noIndice;
        }
        this.contador++;
        return this.contador;
    }

    removerPrimeiroNo() {
        if (this.cabeca === null) {
            return null;
        } else {
            let aux = this.cabeca;
            this.cabeca = this.cabeca.proximo;
            aux.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }

    removerNoIndice(indice) {
        if(indice === 0){
            return this.removerPrimeiroNo
        }
        if (this.contador < indice) {
            return null;
        } else {
            let noIndice = this.cabeca;
            let noAnterior = null;
            for (let i = 1; i < index; i++) {
                noAnterior = noIndice
                noIndice = this.noIndice.proximo;
            }
            noAnterior.proximo = noIndice;
            noIndice.proximo = null;
            this.contador--;
            return noIndice.conteudo;
        }
    }

    removerNoFim() {
        if (this.cabeca === null) {
            return null;
        } else {
            let aux = this.cabeca;
            while (aux.proximo !== null) {
                noAnterior = aux;
                aux = aux.proximo;
            }
            noAnterior.proximo = null;
            this.contador--;
            return aux.conteudo
        }
    }

    exibirElementos() {
        if (this.cabeca == null) {
            console.log(null);
        } else {
            let aux = this.cabeca;
            while (aux.proximo !== null) {
                console.log(aux.conteudo);
                aux = aux.proximo;
            }
            console.log(aux.conteudo);
        }
    }

}

