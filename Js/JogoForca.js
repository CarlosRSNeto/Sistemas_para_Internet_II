const palavras = ["casa", "gato", "bola", "elefante", "estrela"];
let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
let letrasCorretas = Array(palavraEscolhida.length).fill("_");
let tentativasErradas = 0;

function iniciarJogo() {

    atualizarPalavra();

    const alfabetoDiv = document.getElementById('alfabeto');
    alfabetoDiv.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letra;
        button.onclick = () => verificarLetra(letra);
        alfabetoDiv.appendChild(button);
    }
}

function atualizarPalavra() {
    const letrasDiv = document.getElementById('forcaLetras');
    letrasDiv.innerHTML = '';
    letrasCorretas.forEach(letra => {
        const letraDiv = document.createElement('div');
        letraDiv.className = 'letra';
        letraDiv.textContent = letra.toUpperCase();
        letrasDiv.appendChild(letraDiv);
    });
}

function verificarLetra(letra) {
    let acertou = false;
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i].toUpperCase() === letra) {
            letrasCorretas[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        tentativasErradas++;
        atualizarForca();
    }

    atualizarPalavra();

    if (letrasCorretas.join('') === palavraEscolhida.toUpperCase()) {
        alert("Você ganhou!");
        iniciarJogo();
    }

    if (tentativasErradas >= 6) {
        alert(`Você perdeu! A palavra era: ${palavraEscolhida}`);
        iniciarJogo();
    }
}

function atualizarForca() {
    const forcaDiv = document.getElementById('forca');
    forcaDiv.textContent = `Tentativas erradas: ${tentativasErradas}/6`;
}

iniciarJogo();