class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    // Método abstrato que será implementado nas classes filhas
    FazerBarulho() {
      throw new Error("Método abstrato FazerBarulho não implementado.");
    }
    // Método abstrato para o movimento
    Mover() {
      throw new Error("Método abstrato Mover não implementado.");
    }
    Dormir() {
      return `${this.nome} está dormindo.`;
    }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  // Implementação dos métodos abstratos de Animal
  FazerBarulho() {
    return `${this.nome} está latindo: Woof Woof!`;
  }
  Mover() {
    return `${this.nome} está correndo pelo quintal.`;
  }

  // Métodos específicos para Cachorro
  Farejar() {
    return `${this.nome} está farejando algo.`;
  }
  Brincar() {
      return `${this.nome} está brincando com uma bola.`;
  }

}

const dogDoki = new Cachorro("Doki", "Maltes");
console.log(dogDoki);
console.log(dogDoki.FazerBarulho());
console.log(dogDoki.Mover());
console.log(dogDoki.Farejar());
console.log(dogDoki.Brincar());
console.log(dogDoki.Dormir());