let x = Number(prompt("Digite um número inteiro positivo:", ""));
let isPrime = true;

if (x < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  alert(x + " é um número primo!");
} else {
  alert(x + " não é um número primo!");
}
