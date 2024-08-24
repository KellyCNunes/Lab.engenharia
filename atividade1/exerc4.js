let userInput = prompt("Digite um dado:");

let confirmTypeCheck = confirm("Deseja verificar o tipo do dado informado?");

let convertedInput = Number(userInput);
let isNumber = !isNaN(convertedInput) && userInput.trim() !== '';

let dataType;

if (isNumber) {
    dataType = "Number";
} else {
    dataType = "String";
}

if (confirmTypeCheck) {
    alert("O tipo do dado informado é: " + dataType);
} else {
    alert("Obrigado por visitar esta página");
}
