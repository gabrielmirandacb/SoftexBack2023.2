class Pagamento {
    valorFinal : number;
    notaFiscal ?: number;

    constructor(valorFinal : number, notaFiscal ?: number){
        this.valorFinal = valorFinal;
        this.notaFiscal = notaFiscal;
        
    }
}