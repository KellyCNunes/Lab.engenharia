
class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'Pendente'; 
    }

    concluir() {
        this.status = 'Concluída';
    }

    detalhes() {
        return `Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`;
    }
}


class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        this.renderizar();
    }

    listarTarefas() {
        return this.tarefas;
    }

    marcarComoConcluida(index) {
        this.tarefas[index].concluir();
        this.renderizar();
    }

    removerTarefa(index) {
        this.tarefas.splice(index, 1);
        this.renderizar();
    }

    visualizarDetalhes(index) {
        alert(this.tarefas[index].detalhes());
    }

    renderizar() {
        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.innerHTML = ''; 

        this.tarefas.forEach((tarefa, index) => {
            const tarefaElement = document.createElement('li');
            tarefaElement.innerHTML = `
                ${tarefa.nome} 
                <span>
                    <button class="detalhes" onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                    <button class="concluir" onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
                    <button class="remover" onclick="gerenciador.removerTarefa(${index})">Remover</button>
                </span>
            `;

            if (tarefa.status === 'Concluída') {
                tarefaElement.classList.add('completed');
            }

            listaTarefas.appendChild(tarefaElement);
        });
    }
}


const gerenciador = new GerenciadorDeTarefas();


document.getElementById('adicionarTarefaBtn').addEventListener('click', () => {
    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;

    if (nome && descricao) {
        const tarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(tarefa);

        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';
    } else {
        alert('Por favor, preencha o nome e a descrição da tarefa.');
    }
});
