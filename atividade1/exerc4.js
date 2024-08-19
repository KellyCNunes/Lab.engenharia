function verificarDado() {
    // Solicita a entrada do usuário
    let dado = prompt("Por favor, insira um dado:");

    // Pergunta se o usuário deseja verificar o tipo do dado
    let confirmar = confirm("Deseja verificar o tipo do dado informado?");

    // Verifica se o usuário deseja continuar
    if (confirmar) {
        // Detecta o tipo de dado e escreve na página
        let tipoDado = typeof dado;
        document.body.innerHTML = "<h1>O tipo do dado informado é: " + tipoDado + "</h1>";
    } else {
        // Mensagem caso o usuário não deseje verificar
        document.body.innerHTML = "<h1>Obrigado por visitar esta página.</h1>";
    }
}

// Executa a função ao carregar a página
window.onload = verificarDado;
