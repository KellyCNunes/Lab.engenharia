let numero = prompt("Digite um número inteiro primo:");


// Verifica se o número é válido
if (!isNaN(numero) && numero > 0) {
    // Verifica se o número é primo
    if (numero % numero === 0) {
        alert("O número " + numero + " é primo.");
    } else {
        alert("O número " + numero + " não é primo.");
    }
} else {
    alert("Por favor, digite um número inteiro positivo válido.");
}