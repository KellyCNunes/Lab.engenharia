// Classe Pessoa
class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.telefoneCelular = telefoneCelular;
    }

    validarEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(this.email);
    }

    validarTelefoneFixo() {
        const telefoneFixoPattern = /^\(\d{2}\)\d{4}-\d{4}$/;
        return telefoneFixoPattern.test(this.telefoneFixo);
    }

    validarTelefoneCelular() {
        const telefoneCelularPattern = /^\(\d{2}\)\d{5}-\d{4}$/;
        return telefoneCelularPattern.test(this.telefoneCelular);
    }

    validarDataNascimento() {
        const dataPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/;
        return dataPattern.test(this.dataNascimento);
    }
}

// Classe Aluno herda de Pessoa
class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
        super(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        this.matricula = matricula;
    }

    validarMatricula() {
        return this.matricula.length === 10;
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
        return this.matricula.length === 5;
    }
}

// Manipulação do DOM e Validações
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefoneFixo = document.getElementById('telefoneFixo').value;
    const telefoneCelular = document.getElementById('telefoneCelular').value;
    const perfil = document.querySelector('input[name="perfil"]:checked').value;
    const matricula = document.getElementById('matricula').value;
    const areaAtuacao = document.getElementById('areaAtuacao').value;

    let pessoa;

    if (perfil === 'aluno') {
        pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
        if (!pessoa.validarMatricula()) {
            alert("Matrícula do aluno deve ter 10 dígitos!");
            return;
        }
    } else {
        pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, areaAtuacao, matricula);
        if (!pessoa.validarMatricula()) {
            alert("Matrícula do professor deve ter 5 dígitos!");
            return;
        }
    }

    if (!pessoa.validarEmail()) {
        document.getElementById('emailError').textContent = 'Email inválido!';
        return;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!pessoa.validarTelefoneFixo()) {
        alert("Telefone fixo inválido!");
        return;
    }

    if (!pessoa.validarTelefoneCelular()) {
        alert("Telefone celular inválido!");
        return;
    }

    if (!pessoa.validarDataNascimento()) {
        alert("Data de nascimento inválida!");
        return;
    }

    // Armazenar os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('dataNascimento', dataNascimento);
    localStorage.setItem('telefoneFixo', telefoneFixo);
    localStorage.setItem('telefoneCelular', telefoneCelular);
    localStorage.setItem('perfil', perfil);
    localStorage.setItem('matricula', matricula);
    
    if (perfil === 'professor') {
        localStorage.setItem('areaAtuacao', areaAtuacao);
    }

    // Redirecionar para a página de resultado
    window.location.href = 'resultado.html';
});

