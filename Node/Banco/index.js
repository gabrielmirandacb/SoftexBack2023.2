import { Banco } from "./model/banco.js";

//Criando uma conta...

let contaGab = new Banco(12345,"Gabriel",1000.00,"Corrente", 132);

console.log(contaGab.mostrarNome())
console.log(contaGab.mostrarConta())
console.log(contaGab.mostrarTipo())
contaGab.depositar(100.00);
console.log(contaGab.mostrarSaldo());
contaGab.sacar(300.00);
console.log(contaGab.mostrarSaldo());

console.log(contaGab);
