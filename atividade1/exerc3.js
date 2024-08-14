function calcularFatorial() {
    let numero = prompt("Digite um número inteiro positivo:");

    if (!isNaN(numero) && numero > 0) {
        let fatorial = 1;
        // Calcula o fatorial do número
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }

        alert("O fatorial de " + numero + " é " + fatorial);
    } else {
        alert("Por favor, digite um número inteiro positivo válido.");
    }
}