import { TextEditor } from "./txtEditor";

const textEditor = new TextEditor();

textEditor.open();

// Simulando a inserção de linhas pelo usuário
textEditor.insertLine(1, "Primeira linha");
textEditor.insertLine(2, "Segunda linha");
textEditor.insertLine(3, "Terceira linha");

// Simulando a remoção da segunda linha
textEditor.removeLine(2);

// Simulando o término da edição pelo usuário
textEditor.save();

// Exibindo o conteúdo do editor após as operações
console.log("Conteúdo do editor:");
console.log(textEditor.getLines().join("\n"));
