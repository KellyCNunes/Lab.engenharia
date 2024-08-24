let x = prompt("Digite um número inteiro positivo:", "");
x = Number(x);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let result = factorial(x);

alert("O fatorial de " + x + " é " + result + ".");
