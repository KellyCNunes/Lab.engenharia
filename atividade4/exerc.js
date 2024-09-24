// Função para exibir a mensagem de erro abaixo do campo
function mostrarErro(campo, mensagem) {
    const spanError = document.getElementById(`${campo}Error`);
    spanError.textContent = mensagem;
    spanError.style.color = "red"; // Define a cor vermelha para o erro
}

// Função para limpar a mensagem de erro quando o campo for corrigido
function limparErro(campo) {
    const spanError = document.getElementById(`${campo}Error`);
    spanError.textContent = "";
}

// Exibe os campos de Aluno ou Professor com base na seleção
function toggleFields() {
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    const alunoFields = document.getElementById('alunoFields');
    const professorFields = document.getElementById('professorFields');
    
    if (perfil === 'aluno') {
        alunoFields.style.display = 'block';
        professorFields.style.display = 'none';
    } else if (perfil === 'professor') {
        professorFields.style.display = 'block';
        alunoFields.style.display = 'none';
    }
}

// Validações de Pessoa
class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }

    validarNome() {
        const nomeParts = this.nome.trim().split(" ");
        if (nomeParts.length < 2) {
            mostrarErro('nome', 'Por favor, insira seu nome completo (nome e sobrenome).');
            return false;
        }
        limparErro('nome');
        return true;
    }

    validarEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(this.email)) {
            mostrarErro('email', 'Email inválido! Formato esperado: "usuario@dominio.com".');
            return false;
        }
        limparErro('email');
        return true;
    }

    validarTelefoneFixo() {
        const telefoneFixoPattern = /^\(\d{2}\)\d{4}-\d{4}$/;
        if (!telefoneFixoPattern.test(this.telefoneFixo)) {
            mostrarErro('telefoneFixo', 'Telefone fixo inválido! Formato esperado: "(99)9999-9999".');
            return false;
        }
        limparErro('telefoneFixo');
        return true;
    }

    validarTelefoneCelular() {
        const telefoneCelularPattern = /^\(\d{2}\)\d{5}-\d{4}$/;
        if (!telefoneCelularPattern.test(this.telefoneCelular)) {
            mostrarErro('telefoneCelular', 'Telefone celular inválido! Formato esperado: "(99)99999-9999".');
            return false;
        }
        limparErro('telefoneCelular');
        return true;
    }

    validarDataNascimento() {
        const dataPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/;
        if (!dataPattern.test(this.dataNascimento)) {
            mostrarErro('dataNascimento', 'Data de nascimento inválida! Formato esperado: "dd/mm/aaaa".');
            return false;
        }
        limparErro('dataNascimento');
        return true;
    }
}

// Classe Aluno herda de Pessoa
class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.matricula = matricula;
    }

    validarMatricula() {
        if (this.matricula.length !== 10) {
            mostrarErro('matricula', 'Matrícula do aluno deve ter 10 dígitos!');
            return false;
        }
        limparErro('matricula');
        return true;
    }
}

// Classe Professor herda de Pessoa
class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, matricula) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.areaAtuacao = areaAtuacao;
        this.matricula = matricula;
    }

    validarMatricula() {
        if (this.matricula.length !== 5) {
            mostrarErro('profMatricula', 'Matrícula do professor deve ter 5 dígitos!');
            return false;
        }
        limparErro('profMatricula');
        return true;
    }

    validarAreaAtuacao() {
        if (this.areaAtuacao === "") {
            mostrarErro('areaAtuacao', 'Área de atuação é obrigatória.');
            return false;
        }
        limparErro('areaAtuacao');
        return true;
    }
}

// Manipulação do DOM e Validações no evento submit
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefoneFixo = document.getElementById('telefoneFixo').value;
    const telefoneCelular = document.getElementById('telefoneCelular').value;
    const perfil = document.querySelector('input[name="perfil"]:checked');

    if (!perfil) {
        alert("Por favor, selecione se você é Aluno ou Professor.");
        return;
    }

    let pessoa;

    if (perfil.value === 'aluno') {
        const matricula = document.getElementById('matricula').value;
        pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        if (!pessoa.validarMatricula()) {
            return;
        }
    } else {
        const areaAtuacao = document.getElementById('areaAtuacao').value;
        const matricula = document.getElementById('profMatricula').value;
        pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, matricula);
        if (!pessoa.validarMatricula() || !pessoa.validarAreaAtuacao()) {
            return;
        }
    }

    if (pessoa.validarNome() && pessoa.validarEmail() && pessoa.validarDataNascimento() &&
        pessoa.validarTelefoneFixo() && pessoa.validarTelefoneCelular()) {
        alert('Formulário enviado com sucesso!');
        // Aqui pode ser adicionado a lógica de envio de dados.
    }
});

// Evento para mostrar os campos de aluno ou professor
document.querySelectorAll('input[name="perfil"]').forEach((element) => {
    element.addEventListener('change', toggleFields);
});


   



