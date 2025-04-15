const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/formacao', (req, res) => {
    res.render('formacao');
});

app.get('/footer', (req, res) => {
    res.render('partials/footer');
});

app.get('/about', (req, res) => {
    res.render('partials/about_me');
});

app.get('/contato', (req, res) => {
    res.render('partials/contato');
});

app.get('/projetos', (req, res) => {
    res.render('projetos', {title: 'Meus Projetos'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
