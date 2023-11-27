import { Strategy } from "./interfaceStrategy";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import { Multiplicacao } from "./multiplicacao";

const prompt = require('readline-sync');

export function operacao(): Strategy {
    console.log(`Operacoes:`);
    console.log(`1 - Soma;`);
    console.log(`2 - Subtracao;`);
    console.log(`3 - Multiplicacao.`);

    const opcao = prompt.questionInt(`Digite o numero da operacao que desejada: `);

    switch (opcao) {
        case 1:
            return new Soma();
        case 2:
            return new Subtracao();
        case 3:
            return new Multiplicacao();
        default:
            throw new Error(`Operacao invalida`);
    }
}
