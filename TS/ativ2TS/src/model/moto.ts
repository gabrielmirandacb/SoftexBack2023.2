import { Veiculo } from "./veiculo";

// Subclasse Moto que herda de Veiculo
export class Moto extends Veiculo {
    private cilindradas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, cilindradas: number) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
    
    public override clone(modelo: string, marca: string, cor: string, numeroRodas: number, cilindradas?: number): Veiculo {
      //forma intuitiva:
      let dolly = Object.create(this);
      dolly.modelo = modelo;
      dolly.marca = marca;
      dolly.cor = cor;
      dolly.numeroRodas = numeroRodas;
      dolly.cilindradas = cilindradas;
      return dolly;
    }

    public override toString(): string {
      return `Moto ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas} rodas e ${this.cilindradas} cilindradas.`;
    }
  }

  