class FormaPag{
    private valor: number;
    private tipo: string;
    private tipoOnline : boolean;
    private taxa ?: number;
    private desconto ?: number;
    private qtdParcelas ?: number;

    constructor(valor : number, tipo : string, tipoOnline : boolean, taxa ?: number, desconto ?: number, qtdParcelas ?: number){
        this.valor = valor;
        this.tipo = tipo;
        this.tipoOnline = tipoOnline;
        this.taxa = taxa;
        this.desconto = desconto;
        this.qtdParcelas = qtdParcelas;
    }
}