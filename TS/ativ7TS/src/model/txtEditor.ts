import { Editor } from "./editor";

export class TextEditor extends Editor {
  open(): void {
    console.log("Editor aberto.");
    this.notificarObservadores();
  }

  save(): void {
    console.log("Editor salvo.");
  }
}
