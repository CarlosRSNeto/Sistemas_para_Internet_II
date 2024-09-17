function separar() {
    const palavra = document.getElementById('palavra').value;
    const letrasDiv = document.getElementById('letras');
    
    letrasDiv.innerHTML = '';

    for (let letra of palavra) {
        const letraDiv = document.createElement('div');
        letraDiv.className = 'letra';
        letraDiv.textContent = letra.toUpperCase();
        letrasDiv.appendChild(letraDiv);
    }
}