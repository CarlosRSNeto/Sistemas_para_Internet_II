function transformarEmJSON() {
    
    const mat = document.getElementById('mat').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;

    if (!mat || !nome || !idade || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!Number.isInteger(Number(idade)) || Number(idade) <= 0) {
        alert('Por favor, insira uma idade válida.');
        return;
    }

    const aluno = {
        mat: mat,
        nome: nome,
        idade: parseInt(idade),
        cpf: cpf
    };

    const alunoJSON = JSON.stringify(aluno, null, 4);

    document.getElementById('resultado').textContent = alunoJSON;
}