export class Banco{
    constructor(conta,cliente, saldo, tipo , agencia){
        this.conta = conta;
        this.cliente = cliente;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    }

    mostrarSaldo(){
        return this.saldo;
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso!`);
        }else{
            throw new Error ("Valor de depósito inválido!")
        }
        
    }

    sacar(valor){
        if(this.saldo >= valor && valor > 0){
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso!`);
        }else{
            throw new Error ("Valor de saque inválido ou insuficiente!")
        }
    }

    mostrarTipo(){
        return this.tipo;
    }

    mostrarConta(){
        return this.conta;
    }
    mostrarNome(){
        return this.nome;
    }
}