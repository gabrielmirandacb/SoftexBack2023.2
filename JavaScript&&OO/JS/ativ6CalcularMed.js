//Criação de lopping para repetir caso o dado fornecido pelo usuario nao seja válido
do {
    //Criação de mensagem de Erro
    try {
        //Criação de variáveis
        var nota1 = parseFloat(prompt("Digite o valor da 1ª nota: "));
        var nota2 = parseFloat(prompt("Digite o valor da 2ª nota: "));
        var nota3 = parseFloat(prompt("Digite o valor da 3ª nota: "));
        var media;
        var conferencia = true;
        
        //Chamando e imprimindo a função
        media = calcularMedia(nota1, nota2, nota3);
        console.log(`Média = ${media}`);
    } catch (erro) {
        console.log(erro);
    }
} while (conferencia) {
}

//Criação da função para calcular média
function calcularMedia(n1, n2, n3) {
    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {
        if (nota1 <= 10 && nota2 <= 10 && nota3 <= 10) {
            var res = (n1 + n2 + n3) / 3;
            conferencia = false;
            return res;
        } else {
            throw new Error("Número inválido!")
        }
    } else {
        throw new Error("Número inválido!")
    }
}