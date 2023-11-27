import { Strategy } from "./interfaceStrategy";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import { Multiplicacao } from "./multiplicacao";

const prompt = require('readline-sync');

export function operacao(): Strategy {
    console.log(`Operações:`);
    console.log(`1 - Soma;`);
    console.log(`2 - Subtração;`);
    console.log(`3 - Multiplicação.`);

    const opcao = prompt.questionInt(`Digite o numero da operacao que desejada: `);

    switch (opcao) {
        case 1:
            return new Soma();
        case 2:
            return new Subtracao();
        case 3:
            return new Multiplicacao();
        default:
            throw new Error(`Operação inválida`);
    }
}
