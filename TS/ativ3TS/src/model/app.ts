import SistemaSeguranca from "./sistemaSeg";

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente secreto tenta acessar a Base Secreta
sistemaSeguranca.acessarBaseSecreta("123456789"); // Acesso negado

// Agente secreto tenta acessar a Base Secreta com a senha correta
sistemaSeguranca.acessarBaseSecreta("987654321"); // Acesso concedido
