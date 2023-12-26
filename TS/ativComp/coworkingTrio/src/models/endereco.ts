export class Endereco {
    private id : number;
    private uf : string;
    private cep : string;
    private cidade : string;
    private bairro : string;
    private rua : string;
    private numero: number;
    private complemento ?: string;

    constructor(idEndereco: number, uf : string, cep : string, cidade : string, bairro : string, rua : string, numero: number, complemento : string){
        this.id = idEndereco;
        this.uf = uf;
        this.cep = cep;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
    }
    // Getters
    getId(): number {
        return this.id;
    }

    getUF(): string {
        return this.uf;
    }

    getCidade(): string {
        return this.cidade;
    }

    getBairro(): string {
        return this.bairro;
    }

    getRua(): string {
        return this.rua;
    }

    getNumero(): number {
        return this.numero;
    }

    getComp(): string | undefined {
        return this.complemento;
    }

    getCep(): string {
        return this.cep;
    }

    // Setters
    setUF(uf: string): void {
        this.uf = uf;
    }

    setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    setRua(rua: string): void {
        this.rua = rua;
    }

    setNumero(numero: number): void {
        this.numero = numero;
    }

    setComp(complemento: string | undefined): void {
        this.complemento = complemento;
    }

    setCep(cep: string): void {
        this.cep = cep;
    }
}