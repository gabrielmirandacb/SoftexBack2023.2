import { Calculadora } from "./calculadora";
import { operacao } from "./operacao";

const prompt = require('readline-sync');

const n1 = prompt.questionFloat(`Digite o primeiro numero: `);
const n2 = prompt.questionFloat(`Digite o segundo numero: `);

const opEscolhida = operacao();
const calculadora = new Calculadora(opEscolhida);

const resultado = calculadora.calcular(n1, n2);

console.log(`Resultado = ${resultado}`);
