// Interface computador
interface Computer {
    getRAM(): number;
    getHDD(): number;
    getCPU(): number;
    getType(): string;
    toString(): string;
  }
  
  // Implementação da classe ComputerFactory
  class ComputerFactory {
    static createComputer(type: string, ram: number, hdd: number, cpu: number): Computer | null {
      if (type.toLowerCase() === "pc") {
        return new PC(ram, hdd, cpu);
      } else if (type.toLowerCase() === "server") {
        return new Server(ram, hdd, cpu);
      }
      return null; // Retorna null se o tipo não for reconhecido
    }
  }
  
  // Implementação da classe PC
  class PC implements Computer {
    private ram: number;
    private hdd: number;
    private cpu: number;
    private type: string = "PC";
  
    constructor(ram: number, hdd: number, cpu: number) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    getRAM(): number {
      return this.ram;
    }
  
    getHDD(): number {
      return this.hdd;
    }
  
    getCPU(): number {
      return this.cpu;
    }
  
    getType(): string {
      return this.type;
    }
  
    toString(): string {
      return `PC: RAM=${this.ram}GB, HDD=${this.hdd}GB, CPU=${this.cpu}GHz`;
    }
  }
  
  // Implementação da classe Server
  class Server implements Computer {
    private ram: number;
    private hdd: number;
    private cpu: number;
    private type: string = "Server";
  
    constructor(ram: number, hdd: number, cpu: number) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    getRAM(): number {
      return this.ram;
    }
  
    getHDD(): number {
      return this.hdd;
    }
  
    getCPU(): number {
      return this.cpu;
    }
  
    getType(): string {
      return this.type;
    }
  
    toString(): string {
      return `Server: RAM=${this.ram}GB, HD=${this.hdd}GB, CPU=${this.cpu}GHz`;
    }
  }
  
  // Exemplo de uso
  const pc = ComputerFactory.createComputer("pc", 8, 1000, 1.8);
  const server = ComputerFactory.createComputer("server", 32, 1024, 2.2);
  
  if (pc && server) {
    console.log(pc.toString());
    console.log(server.toString());
  }
  