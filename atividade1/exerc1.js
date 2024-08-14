
let numero = prompt("Digite um número inteiro positivo:");


// Verifica se o número é válido
if (!isNaN(numero) && numero > 0) {
    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
} else {
    alert("Por favor, digite um número inteiro positivo válido.");
}