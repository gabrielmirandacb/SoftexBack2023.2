import Sanduiche from './sanduiche';

abstract class DecoradorDeSanduiche implements Sanduiche {
    protected sanduicheDecorado: Sanduiche;

    constructor(sanduicheDecorado: Sanduiche) {
        this.sanduicheDecorado = sanduicheDecorado;
    }

    preco(): number {
        return this.sanduicheDecorado.preco();
    }
}

export default DecoradorDeSanduiche;
