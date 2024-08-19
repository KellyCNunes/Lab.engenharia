function verificarDado() {
    
    let dado = prompt("Por favor, insira um dado:");

   
    let confirmar = confirm("Deseja verificar o tipo do dado informado?");

    if (confirmar) {
        // Detecta o tipo de dado 
        let tipoDado = typeof dado;
        document.body.innerHTML = "<h1>O tipo do dado informado é: " + tipoDado + "</h1>";
    } else {
        document.body.innerHTML = "<h1>Obrigado por visitar esta página.</h1>";
    }
}

// Executa a função ao carregar a página
window.onload = verificarDado;
