import { Strategy } from "./interfaceStrategy";

export class Calculadora {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    calcular(num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }
}
