import { Veiculo } from "./model/veiculo";
import { Carro } from "./model/carro";
import { Moto } from "./model/moto";

const listaVeiculos = new Array<Veiculo>();

const carro1 = new Carro("Sedan", "Toyota", "Prata", 4, 4);
const moto1 = new Moto("Esportiva", "Kawasaki", "Verde", 2, 1000);

listaVeiculos.push(carro1, moto1);

//console.log(listaVeiculos)

//Criando Clone:
const carroClone1 = carro1.clone("SUV", "Ford", "Prata", 4, 4);
const carroClone2 = carro1.clone("Hatch", "Hyundai", "Branco", 4, 4);
const carroClone3 = carro1.clone("Hatch", "Fiat", "Verde", 4, 2);
const carroClone4 = carro1.clone("SUV", "Honda", "Preto", 4, 4);
const carroClone5 = carro1.clone("Hatch", "Chevrolet", "Preto", 4, 4);
const motoClone1 = moto1.clone("Cruiser", "Harley-Davidson", "Vermelha", 2, 1600);

listaVeiculos.push(carroClone1, carroClone2, carroClone3, carroClone4, carroClone5, motoClone1);
//console.log(listaVeiculos);

listaVeiculos.forEach(element => {
  console.log(element.toString());
});
