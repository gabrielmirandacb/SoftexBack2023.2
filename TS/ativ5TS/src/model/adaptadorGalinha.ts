import { Pato } from "./interfacePato";
import { Galinha } from "./interfaceGalinha";

export class AdaptadorGalinha implements Pato {
    private readonly galinha: Galinha;

    constructor(galinha: Galinha) {
        this.galinha = galinha;
    }

    grasnar(): void {
        this.galinha.cacarejar();
    }

    nadar(): void {
        this.galinha.voar();
    }
}
