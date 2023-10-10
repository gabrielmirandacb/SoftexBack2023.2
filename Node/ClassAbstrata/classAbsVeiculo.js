// Classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    // Método abstrato que será implementado nas classes filhas
    Ligando() {
      throw new Error("Método abstrato.");
    }
  
    Acelerar() {
      throw new Error("Método abstrato");
    }
  
    Frear() {
      throw new Error("Método abstrato");
    }
  }
  
  // Classe Moto que herda de Veiculo
  class Moto extends Veiculo {
    constructor(marca, modelo) {
      super(marca, modelo);
      this.velocidade = 0;
      this.ligado = false;
      this.marcha = 0;
    }
  
    // Implementação dos métodos abstratos
    Ligando() {
        if(this.ligado == false){
            this.ligado = true;
            return `Ligando a moto ${this.marca} ${this.modelo}.`;
        }else{
            //throw new Error(`A moto ${this.marca} ${this.modelo} já esta ligada`);
            return `A moto ${this.marca} ${this.modelo} já esta ligada`
        }
      
    }
    Acelerar() {
        if(this.ligado == true){
            this.velocidade += 10;
            this.TrocarMarcha();
            return `Acelerando a moto ${this.marca} ${this.modelo} a ${this.velocidade}Km/h e marcha ${this.marcha}.`;
        }else{
            //throw new Error(`A moto ${this.marca} ${this.modelo} já está desligada`);
            return `A moto ${this.marca} ${this.modelo} esta desligada.`;
        }
      
    }
    Frear() {
        if(this.velocidade >= 0 ){
            this.velocidade -= 10;
            this.TrocarMarcha();
            return `Freando a moto ${this.marca} ${this.modelo} a ${this.velocidade}Km/h e marcha ${this.marcha}.`;
        }else{
            //throw new Error(`A moto ${this.marca} ${this.modelo} já está parada`);
            return `A moto ${this.marca} ${this.modelo} já está parada.`;
        }
      
    }
  
    // Métodos específicos para Moto
    Empinar() {
      return `Empinando a moto ${this.marca} ${this.modelo}.`;
    }
    TrocarMarcha() {
        if (this.velocidade > 0 && this.velocidade < 20){
            this.marcha = 1;
            return `Trocando a marcha da moto ${this.marca} ${this.modelo} para ${this.marcha}.`;
        }else if(this.velocidade >= 20 && this.velocidade <= 40) {
            this.marcha = 2;
            return `Trocando a marcha da moto ${this.marca} ${this.modelo} para ${this.marcha}.`;
        }else if(this.velocidade >= 40) {
            this.marcha = 3;
            return `Trocando a marcha da moto ${this.marca} ${this.modelo} para ${this.marcha}.`;
        }else{
            this.marcha = 0;
            return `Trocando a marcha da moto ${this.marca} ${this.modelo} para ${this.marcha}.`;
        }
    }
    Desligando() {
        if(this.ligado == true){
            this.ligado = false;
            return `Desligando a moto ${this.marca} ${this.modelo}.`;
        }else{
            //throw new Error(`A moto ${this.marca} ${this.modelo} já está desligada`);
            return `A moto ${this.marca} ${this.modelo} já está desligada`
        }
    }
  }
  
  // Exemplo de uso das classes
  const motoGab = new Moto("Voltz", "EV1");
  console.log(motoGab);
  console.log(motoGab.Desligando());
  console.log(motoGab.Ligando());
  console.log(motoGab.Acelerar());
  console.log(motoGab.Empinar());
  console.log(motoGab.Frear());
  console.log(motoGab.Desligando()); 
  