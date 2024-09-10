let valores = [];

function adicionarValor() {

    const numero = document.getElementById('numero').value;

    if (numero === '') {
        alert('Por favor, insira um número.');
        return;
    }

    const valorNumerico = parseFloat(numero);
    valores.push(valorNumerico);

    atualizarValores();
    atualizarMedia();

    document.getElementById('numero').value = '';
}

function atualizarValores() {

    document.getElementById('valoresVetor').textContent = `Valores no vetor: [${valores.join(', ')}]`;
}

function atualizarMedia() {

    const soma = valores.reduce((acc, valor) => acc + valor, 0);
    const media = soma / valores.length;

    document.getElementById('mediaVetor').textContent = `Média dos valores: ${media.toFixed(2)}`;
}