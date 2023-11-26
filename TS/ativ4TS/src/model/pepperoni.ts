import DecoradorDeSanduiche from './decorador';

class PepperoniDecorator extends DecoradorDeSanduiche {
    preco(): number {
        return super.preco() + 0.99; // Preço adicional pelo pepperoni
    }
}

export default PepperoniDecorator;
