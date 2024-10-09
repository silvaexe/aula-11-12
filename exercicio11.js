function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

const num1 = Number(prompt("Insira o primeiro número:"));
const num2 = Number (prompt("Insira o segundo número:"));

console.log(`Números inseridos: ${num1} e ${num2}`);
console.log(`Soma: ${soma(num1, num2)}`);
console.log(`Subtração: ${subtracao(num1, num2)}`);
console.log(`Multiplicação: ${multiplicacao(num1, num2)}`);
console.log(`Divisão: ${divisao(num1, num2)}`);
