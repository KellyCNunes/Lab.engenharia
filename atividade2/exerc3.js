let userInput = prompt("Digite uma palavra ou frase:");

let confirmPalindromeCheck = confirm("Deseja verificar se o texto informado é um palíndromo?");

let cleanedInput = userInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

let reversedInput = cleanedInput.split('').reverse().join('');

let isPalindrome = cleanedInput === reversedInput;

if (confirmPalindromeCheck) {
    if (isPalindrome) {
        alert(`"${userInput}" é um palíndromo!`);
    } else {
        alert(`"${userInput}" não é um palíndromo.`);
    }
} else {
    alert("Obrigado por visitar esta página");
}