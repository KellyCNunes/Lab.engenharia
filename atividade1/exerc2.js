let numero = prompt("Digite um número inteiro primo:");
let contador = 0;

if (!isNaN(numero) && numero > 0) {
    // Verifica se o número é primo
    for (i=1; i< numero; i++){
        if (numero % i === 0) {
            contador++;      
        }
    } if (contador < 2){
        alert("O número " + numero + " é primo.");
    }
    else{ alert("O número " + numero + " não é primo.")}
}
    
 else {
    alert("Por favor, digite um número inteiro positivo válido.");
}
