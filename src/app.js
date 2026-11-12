
const express = require('express');
const app = express();

app.use(express.json());

let pessoa = [
    {
        id: 1,
        nome: "joão",
        cpf: "123456789",
        dataNascimento: "02/02/2002"
    }
];

let passaport = [
    {
        id_passaport: 1,
        numero: "852741",
        dataEmissao: "20/02/2026",
        dataValidade: "30/12/2040",
        id_Pessoa: 1
    }
];

app.get('/', (req, res) => {
    res.send('Cadastro!');
});

app.get('/pessoa', (req, res) => {
    res.json(pessoa);
});

app.get('/passaport', (req, res) => {
    res.json(passaport);
});

app.post('/pessoa', (req, res) => {
    let pessoaNova = req.body;
    pessoaNova.id = pessoa.length + 1;
    pessoa.push(pessoaNova);
    res.json(pessoaNova);
});


app.post('/passaport', (req, res) => {
    let passaportNovo = req.body;
    passaportNovo.id_passaport = passaport.length + 1;
    passaport.push(passaportNovo);
    res.json(passaportNovo);
});


module.exports = app;
