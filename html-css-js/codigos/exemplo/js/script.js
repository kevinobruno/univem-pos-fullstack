function domTree() {
    var element = document.documentElement.lastChild;
    alert('Eu sou o nó: ' + element.nodeName);

    var anotherElement = document.getElementsByTagName('h1')[0];
    alert('Eu sou o nó: ' + anotherElement.nodeName);

    var child = anotherElement.firstChild;
    alert('Eu sou o nó: ' + child.nodeName);
}

function queryElements() {
    var elementById = document.getElementById('name');
    alert('elementById ' + elementById.nodeName);

    var elementByName = document.getElementsByName('title')[0];
    alert('elementByName ' + elementByName.nodeName);

    var elementByClass = document.getElementsByClassName('grid-wrapper')[0];
    alert('elementByClass ' + elementByClass.nodeName);

    var elementByTagName = document.getElementsByTagName('button')[0];
    alert('elementByTagName ' + elementByTagName.nodeName);

    // var querySelector = document.querySelector('.class');  // Class
    // var querySelector = document.querySelector('#id');  // ID
    // var querySelector = document.querySelector('input[name="inputName"]');  // Input name
    var querySelector = document.querySelector('#name');
    alert('querySelector ' + querySelector.nodeName);
}

function helloWorld() {
    alert('Hello World!');
}

function submitForm() {
    var element = document.querySelector('#input');
    alert('value: ' + element.value);
}

function sendRequest() {
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
    // document.querySelector('#response').innerHTML = '';

    document.querySelector('#cep').textContent = 'CEP:';
    document.querySelector('#street').textContent = 'Rua:';
    document.querySelector('#neighborhood').textContent = 'Bairro:';
    document.querySelector('#city').textContent = 'Cidade:';
    document.querySelector('#state').textContent = 'UF:';
    document.querySelector('#cepError').textContent = '';
}

function fillCep(data) {
    // document.querySelector('#response').innerHTML = `<p>CEP: ${data.cep}</p>`;

    document.querySelector('#cep').textContent = 'CEP: ' + data.cep;
    document.querySelector('#street').textContent = 'Rua: ' + data.logradouro;
    document.querySelector('#neighborhood').textContent = 'Bairro: ' + data.bairro;
    document.querySelector('#city').textContent = 'Cidade: ' + data.localidade;
    document.querySelector('#state').textContent = 'UF: ' + data.uf;
}

function showCepError() {
    document.querySelector('#cepError').textContent = 'Erro ao buscar CEP, valide se você digitou um CEP válido!';
}

const showName = name => alert(`Olá ${name}`); 

function showPrompt(callback) {
    const name = prompt('Insira seu nome:');
    callback(name);
}
