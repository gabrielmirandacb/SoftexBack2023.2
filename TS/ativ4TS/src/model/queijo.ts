import DecoradorDeSanduiche from './decorador';

class QueijoDecorator extends DecoradorDeSanduiche {
    preco(): number {
        return super.preco() + 2.0; // Preço adicional pelo queijo mussarela ralado
    }
}

export default QueijoDecorator;
