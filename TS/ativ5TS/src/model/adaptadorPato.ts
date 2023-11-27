import { Pato } from "./interfacePato";
import { Galinha } from "./interfaceGalinha";

export class AdaptadorPato implements Galinha {
    private readonly pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    voar(): void {
        this.pato.nadar();
    }
}
