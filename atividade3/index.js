const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/ola', (req, res) => {
    res.send('Olá, mundo!');
});

function validarNumeros(req, res, next) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Erro: Parâmetros devem ser números.');
    }

    req.a = a;
    req.b = b;
    next();
}

app.get('/somar/:a/:b', validarNumeros, (req, res) => {
    const resultado = calc.somar(req.a, req.b);
    res.send(`${req.a} + ${req.b} = ${resultado}`);
});

app.get('/subtrair/:a/:b', validarNumeros, (req, res) => {
    const resultado = calc.subtrair(req.a, req.b);
    res.send(`${req.a} - ${req.b} = ${resultado}`);
});

app.get('/multiplicar/:a/:b', validarNumeros, (req, res) => {
    const resultado = calc.multiplicar(req.a, req.b);
    res.send(`${req.a} * ${req.b} = ${resultado}`);
});

app.get('/dividir/:a/:b', validarNumeros, (req, res) => {
    if (req.b === 0) {
        return res.status(400).send('Erro: Divisão por zero não é permitida.');
    }

    const resultado = calc.dividir(req.a, req.b);
    res.send(`${req.a} / ${req.b} = ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
