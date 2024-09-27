fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        const jokeContainer = document.getElementById('joke');
        if (data.type === 'single') {
            jokeContainer.textContent = data.joke;
        } else {
            jokeContainer.textContent = `${data.setup} - ${data.delivery}`;
        }
    })
    .catch(error => {
        console.error('Erro ao buscar piada:', error);
        document.getElementById('joke').textContent = 'Erro ao carregar a piada.';
    });