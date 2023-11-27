import { Pato } from "./interfacePato";
import { Galinha } from "./interfaceGalinha";
import { GalinhaAngola } from "./galinhaAngola";
import { PatoReal } from "./patoReal";
import { AdaptadorPato } from "./adaptadorPato";
import { AdaptadorGalinha } from "./adaptadorGalinha";

export class AdaptadorPatoDemo {
    static main() {
        const patoReal: Pato = new PatoReal();
        const adaptadorPato: Galinha = new AdaptadorPato(patoReal);

        const galinhaAngola: Galinha = new GalinhaAngola();
        const adaptadorGalinha: Pato = new AdaptadorGalinha(galinhaAngola);

        console.log("Pato real utilizando metodo da galinha:");
        adaptadorPato.cacarejar();
        adaptadorPato.voar();

        console.log("Galinha da Angola utilizando metodo do pato:");
        adaptadorGalinha.grasnar();
        adaptadorGalinha.nadar();
    }
}

// Execução do exemplo
AdaptadorPatoDemo.main();
