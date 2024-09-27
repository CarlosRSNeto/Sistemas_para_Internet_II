fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        const cryptoData = document.getElementById('crypto-data');
        cryptoData.innerHTML = `
            Bitcoin: $${data.bitcoin.usd} <br>
            Ethereum: $${data.ethereum.usd}
        `;
    })
    .catch(error => {
        console.error('Erro ao buscar dados de criptomoedas:', error);
        document.getElementById('crypto-data').textContent = 'Erro ao carregar os dados de criptomoedas.';
    });