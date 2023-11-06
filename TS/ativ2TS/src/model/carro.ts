
  import { Veiculo } from "./veiculo";

  // Subclasse Carro que herda de Veiculo
  export class Carro extends Veiculo {
    private numeroPortas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas: number) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }

    public override clone(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas?: number): Veiculo {
      //forma intuitiva:
      let dolly = Object.create(this);
      dolly.modelo = modelo;
      dolly.marca = marca;
      dolly.cor = cor;
      dolly.numeroRodas = numeroRodas;
      dolly.numeroPortas = numeroPortas;
      return dolly;
    }

    public override toString(): string {
      return `Carro ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas} rodas e ${this.numeroPortas} portas.`;
    }

  }