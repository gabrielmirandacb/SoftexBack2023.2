import { Endereco } from "./endereco";

class Cliente {
    private cpf : string;
    private nome : string;
    private email : string;
    private dataNasc : Date;
    private telefone: string;
    private endereco: Endereco;


    constructor(cpf : string, nome : string, email : string, telefone : string, dataNasc : Date, end : Endereco){
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.dataNasc = dataNasc;
        this.endereco = end;
    }

    // Getters
    getCpf(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }

    getDataNasc(): Date {
        return this.dataNasc;
    }

    getEmail(): string {
        return this.email;
    }

    getTelefone(): string{
        return this.telefone;
    }

    getEndereco(): Endereco {
        return this.endereco;
    }

    // Setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setEmail(email: string): void {
        this.email = email;
    }
    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }


}