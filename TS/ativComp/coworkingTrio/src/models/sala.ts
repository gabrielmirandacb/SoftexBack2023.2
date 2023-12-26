export class Sala {

    id : number;
    nome : string;
    published?: boolean;

    constructor(id : number, nome: string){
        this.id = id;
        this.nome = nome;
    }

    // Getters
    getId(): number {
        return this.id;
    }
    getNome(): string {
        return this.nome;
    }
    // Setters
    setId(id: number): void {
        this.id = id;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }

}