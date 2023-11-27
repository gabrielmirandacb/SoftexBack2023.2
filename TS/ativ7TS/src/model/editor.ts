import { Observador } from "./observador";

export class Editor {
  private observadores: Observador[] = [];
  private linhas: string[] = [];

  adicionarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.atualizar();
    }
  }

  insertLine(lineNumber: number, text: string): void {
    this.linhas.splice(lineNumber - 1, 0, text);
    this.notificarObservadores();
  }

  removeLine(lineNumber: number): void {
    this.linhas.splice(lineNumber - 1, 1);
    this.notificarObservadores();
  }

  getLines(): string[] {
    return [...this.linhas];
  }
}
