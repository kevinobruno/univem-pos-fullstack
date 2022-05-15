function searchCep() {
    cleanCep();

    const cep = document.querySelector('#cepInput').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://viacep.com.br/ws/${cep}/json`, true);

    xhr.onerror = e => showCepError();

    xhr.onload = e => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                fillCep(data);
            } else {
                showCepError();
            }
        }
    };

    xhr.send();
}

function cleanCep() {
    document.querySelector('#cep').textContent = 'CEP:';
    document.querySelector('#street').textContent = 'Rua:';
    document.querySelector('#neighborhood').textContent = 'Bairro:';
    document.querySelector('#city').textContent = 'Cidade:';
    document.querySelector('#state').textContent = 'UF:';
    document.querySelector('#cepError').textContent = '';
}

function fillCep(data) {
    document.querySelector('#cep').textContent = 'CEP: ' + data.cep;
    document.querySelector('#street').textContent = 'Rua: ' + data.logradouro;
    document.querySelector('#neighborhood').textContent = 'Bairro: ' + data.bairro;
    document.querySelector('#city').textContent = 'Cidade: ' + data.localidade;
    document.querySelector('#state').textContent = 'UF: ' + data.uf;
}

function showCepError() {
    document.querySelector('#cepError').textContent = 'Erro ao buscar CEP, valide se você digitou um CEP válido!';
}
