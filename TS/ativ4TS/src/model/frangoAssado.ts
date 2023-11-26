import Sanduiche from './sanduiche';

class FrangoAssadoDecorator implements Sanduiche {
    preco(): number {
        return 4.5; // Preço base do sanduíche de frango assado
    }
}

export default FrangoAssadoDecorator;
