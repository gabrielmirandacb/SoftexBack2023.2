// Declaração das variáveis como Undefined
var varBoolean;
var varBigInt;
var varString;
var varSymbol;

// Exibindo os valores iniciais (Undefined)
console.log("Valores iniciais:");
console.log("booleanVar:", varBoolean);
console.log("bigIntVar:", varBigInt);
console.log("stringVar:", varString);
console.log("symbolVar:", varSymbol);

// Atribuindo valores nulos às variáveis
varBoolean = null;
varBigInt = null;
varString = null;
varSymbol = null;

// Exibindo os valores nulos
console.log("\nValores nulos:");
console.log("booleanVar:", varBoolean);
console.log("bigIntVar:", varBigInt);
console.log("stringVar:", varString);
console.log("symbolVar:", varSymbol);

// Atribuindo valores às variáveis
varBoolean = true;
varBigInt = 1234567890123456789012345678901234567890n;
varString = "Olá";
varSymbol = Symbol("Bem vindo");

// Exibindo os valores após atribuir os diferentes tipos
console.log("\nValores após atribuir diferentes tipos:");
console.log("booleanVar:", varBoolean);
console.log("bigIntVar:", varBigInt);
console.log("stringVar:", varString);
console.log("symbolVar:", varSymbol);
