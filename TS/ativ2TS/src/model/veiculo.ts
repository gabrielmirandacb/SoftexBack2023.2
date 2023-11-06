// Classe abstrata Veiculo
export abstract class Veiculo {
    protected modelo: string;
    protected marca: string;
    protected cor: string;
    protected numeroRodas: number;
    
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    public abstract clone(modelo: string, marca: string, cor: string, numeroRodas: number): Veiculo;
    
    public toString(): string {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, 
      Número de Rodas: ${this.numeroRodas}`;
    }
  }
  
  
  
  