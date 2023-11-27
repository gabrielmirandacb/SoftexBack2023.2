import { Galinha } from "./interfaceGalinha";

export class GalinhaAngola implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voar(): void {
        console.log("Voando...");
    }
}
