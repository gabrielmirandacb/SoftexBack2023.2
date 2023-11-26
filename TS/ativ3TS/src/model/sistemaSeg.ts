class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "987654321";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente secreto!");
        } else {
            console.log("Acesso negado! Senha incorreta. Intruso detectado!");
        }
    }
}

export default SistemaSeguranca;
