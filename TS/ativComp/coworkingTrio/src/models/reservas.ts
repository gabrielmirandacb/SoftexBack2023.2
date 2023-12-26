class Reservas {
    private valor : number;
    private data : Date;
    private horaInic : Time;
    private horaFim : Time;

    constructor(valor : number, data : Date, horaInic : Time, horaFim : Time) {
        this.valor = valor;
        this.data = data;
        this.horaInic = horaInic;
        this.horaFim = horaFim;
    }
}