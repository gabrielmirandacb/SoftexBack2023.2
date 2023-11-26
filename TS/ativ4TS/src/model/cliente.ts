import FrangoAssadoDecorator from './frangoAssado';
import PepperoniDecorator from './pepperoni';
import QueijoDecorator from './queijo';

// Cliente: Criando o sanduíche de frango assado com pepperoni e queijo mussarela ralado
const meuSanduiche = new QueijoDecorator(new PepperoniDecorator(new FrangoAssadoDecorator()));

// Imprimindo o preço total no console
console.log(`Sanduíche de Carne, Pepperoni e Queijo custa R$${meuSanduiche.preco().toFixed(2)}`);
