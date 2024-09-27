fetch('https://catfact.ninja/facts')
    .then(response => response.json())
    .then(data => {
        const factsList = document.getElementById('cat-facts-list');
        factsList.innerHTML = '';
        data.data.forEach(fact => {
            const listItem = document.createElement('li');
            listItem.textContent = fact.fact;
            factsList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar fatos sobre gatos:', error);
        document.getElementById('cat-facts-list').textContent = 'Erro ao carregar os fatos.';
    });