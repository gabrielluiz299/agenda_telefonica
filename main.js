const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
 
    adicionarLinha()
    atualizaTabela()
});

function adicionarLinha() {
    const inputNomesContatos = document.getElementById('nome-contatos');
    const inputNumerosContatos = document.getElementById('numero-contatos');

    nomes.push(inputNomesContatos.value);
    numeros.push(parseFloat(inputNumerosContatos.value));

    let linha = '<tr>';
    linha += `<td>${inputNomesContatos.value}</td>`;
    linha += `<td>${inputNumerosContatos.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomesContatos.value = '';
    inputNumerosContatos.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
        }